This repository is just a backup/storage for all the resources that are currently available through our FHIR servers. The data
is stored in JSON transaction bundles and organized by type and fhir version.

If you want to insert this data into your server please consider using this tool: https://github.com/smart-on-fhir/tag-uploader.
You can read it's documentation for usage instructions, but the very basic example would be something like:

```sh
cd path/to/fhir-uploader
node . -d my/input/directory -S http://my.fhir/server
```
Just make sure that the `STU-3` directory is uploaded to stu3 server and the `DSTU-2` goes to dstu2 one.

For **XML** bundle files we have written another simple uploader tool: https://github.com/smart-on-fhir/xml-bundle-uploader


### Renewing patients
As time passes the patients get older. This may be an issue, especially for pediatric apps.
That is why the datasets must be periodically "renewed". To do so we have created a special
tool: https://github.com/smart-on-fhir/timeshift

### Submitting custom patient data

While the server provides reasonable variety of sample patients, developers may occasionally need
specific data for their apps. In these cases custom data can be added to the server(s).

You can create transaction bundles as described below and add them to the appropriate custom folders:
- DSTU-2/CUSTOM/
- STU-3/CUSTOM/
- R4/CUSTOM/

NOTE that for DSTU-2 transactions should be in XML!

Then make a pull request to this repository. We will review your data, give it a try and if everything is OK, it will be permanently added to the server.

#### Transaction requirements
- Data should be in FHIR transaction bundles
- There should be one transaction bundle for each patient
- `urn:uuid` identifiers should be used instead of "real" IDs, These look like
  `urn:uuid:{unique random string ID}`. This allows resources to reference to each
  other by `urn:uuid`. While the data is being inserted, the FHIR server will
  replace those with real IDs and keep track of them so that reference work properly.
  For example:
  ```json
  // After uploading this bundle:
  {
      "resourceType": "Bundle",
      "type": "transaction",
      "entry": [
          {
              "fullUrl": "urn:uuid:39d9cd1b-ce97-4cda-bed8-7609c7af884b",
              "resource": {
                  "resourceType": "Patient",
                  "id": "39d9cd1b-ce97-4cda-bed8-7609c7af884b"
                  ...
              },
              "request": {
                  "method": "PUT",
                  "url": "urn:uuid:39d9cd1b-ce97-4cda-bed8-7609c7af884b"
              }
          }
  }
  
  // the server should have the following patient:
  {
      "resourceType": "Bundle",
      "type": "searchset",
      "entry": [
          {
              "fullUrl": "https://r4.smarthealthit.org/Patient/39d9cd1b-ce97-4cda-bed8-7609c7af884b",
              "resource": {
                  "resourceType": "Patient",
                  "id": "39d9cd1b-ce97-4cda-bed8-7609c7af884b"
                  ...
              }
          }
          ...
      ]
  }
  ```
- Make sure you are using unique string IDs. Values like `urn:uuid:123` are not acceptable.
  You should verify that resource of that type and having the same ID does NOT exist on the server 
  already. We recommend using tools like https://www.uuidgenerator.net/version4 to generate
  unique IDs.
- In the `entry` array of the transaction bundle, resources that are being 
  referenced should be listed BEFORE those that reference them. For example,
  a Patient should be listed before his conditions:
  ```js
  // Example in JavaScript for clarity

  const PATIENT_ID = "39d9cd1b-ce97-4cda-bed8-7609c7af884b"
  const CONDITION_ID = "629ca19c-1025-4b3e-9e5c-2cd805208a8b"
  
  const transaction = {
      "resourceType": "Bundle",
      "type": "transaction",
      "entry": [
          {
              "fullUrl": `urn:uuid:${PATIENT_ID}`,
              "resource": {
                  "resourceType": "Patient",
                  "id": PATIENT_ID
                  // ...
              },
              "request": {
                  "method": "PUT",
                  "url": `urn:uuid:${PATIENT_ID}`
              }
          },
          {
              "fullUrl": `urn:uuid:${CONDITION_ID}`,
              "resource": {
                  "resourceType": "Condition",
                  "id": CONDITION_ID,
                  "patient": {
                      "reference": `urn:uuid:${PATIENT_ID}`
                  },
                  // ...
              },
              "request": {
                  "method": "PUT",
                  "url": `urn:uuid:${CONDITION_ID}`
              }
          }
      ]
  }
  ```
- For transaction entries use **PUT** requests rather then **POST** if possible. The differences between the 
  two are:
  - POST will create the resource but that might be a little unpredictable.
    - The server may decide to ignore the resource ID (if any) and assign new one
    - if the resource has an ID and it doesn't exist on the server, it should be created
    - if the resource has an ID and it does exist, the server may ignore it or assign new one (thus creating
      another resource)
    - if the resource has an ID and it does exist and the server does not ignore it, it may reply with an error (thus rolling back the entire transaction)
  - PUT will create the resource if it does not exist, or update it otherwise
    - PUT allows you to specify your own resource IDs. Just make sure they don't exist on the server. For    
      example, if you intend to add a Patient with ID of `abc`, first look it up on the server using simple GET
      request to `{Server Base URL}/Patient/abc`. If it exists, pick another ID!
    - PUT would allow for the same transaction to be executed multiple times. Putting together a proper 
      transaction is a difficult task, so it is important to be able to modify it and retry until it works properly.
