const PATIENT_ID = "TEST-1"


const transaction = {
    "resourceType": "Bundle",
    "type": "transaction",
    "entry": [
        {
            "fullUrl": "Patient/${PATIENT_ID}",
            "resource": {
              "resourceType": "Patient",
              "id": PATIENT_ID,
              "meta": {
                "versionId": "1",
                "lastUpdated": "2012-10-16T01:31:41+00:00"
              },
              "text": {
                "status": "generated",
                "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><table class=\"hapiPropertyTable\"><tbody><tr><td>Identifier</td><td>0</td></tr></tbody></table></div>"
              },
              "identifier": [
                {
                  "system": "urn:oid:2.16.840.1.113883.6.1000",
                  "value": "TEST-1",
                  "period": {
                    "start": "2021-05-05T02:39:15+00:00"
                  }
                }
              ]
            },
            "request": {
              "method": "PUT",
              "url": "Patient"
            }
        }
    ]
}