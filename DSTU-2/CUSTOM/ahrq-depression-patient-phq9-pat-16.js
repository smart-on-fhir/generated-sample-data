const PATIENT_ID = "AHRQ-16"

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
                "lastUpdated": "2021-03-10T13:11:36+00:00"
              },
              "text": {
                "status": "generated",
                "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><div class=\"hapiHeaderText\">PHQ <b>NINE </b></div><table class=\"hapiPropertyTable\"><tbody><tr><td>Identifier</td><td>2801459</td></tr><tr><td>Address</td><td><span>221 B Wall Street </span><br/><span>New </span><span>New York </span><span>USA </span></td></tr><tr><td>Date of birth</td><td><span>14 December 2017</span></td></tr></tbody></table></div>"
              },
              "identifier": [
                {
                  "use": "usual",
                  "type": {
                    "coding": [
                      {
                        "system": "http://hl7.org/fhir/v2/0203",
                        "code": "MR",
                        "display": "Medical record number",
                        "userSelected": false
                      }
                    ],
                    "text": "MRN"
                  },
                  "system": "urn:oid:2.16.840.1.113883.3.927.2.100",
                  "value": "TEST-16",
                  "period": {
                    "start": "2021-01-16T08:00:50+00:00"
                  }
                },
                {
                  "use": "usual",
                  "type": {
                    "coding": [
                      {
                        "system": "http://hl7.org/fhir/v2/0203",
                        "code": "MR",
                        "display": "Medical record number",
                        "userSelected": false
                      }
                    ],
                    "text": "MRN"
                  },
                  "system": "urn:oid:2.16.840.1.113883.6.1000",
                  "value": "TEST-16",
                  "period": {
                    "start": "2021-03-05T22:00:00+00:00"
                  }
                }
              ],
              "active": true,
              "name": [
                {
                  "use": "official",
                  "family": [
                    "Rachael"
                  ],
                  "given": [
                    "Waits"
                  ]
                }
              ],
              "gender": "female",
              "birthDate": "2001-01-09",
              "deceasedBoolean": false
            },
            "search": {
              "mode": "match"
            },
            "request": {
              "method": "PUT",
              "url": "Patient/TEST-16"
            }
        }
    ]
}