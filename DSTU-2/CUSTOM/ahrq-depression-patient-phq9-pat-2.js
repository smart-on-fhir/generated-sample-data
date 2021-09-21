const PATIENT_ID = "AHRQ-2"
const CONDITION_ID = "509133"

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
                "lastUpdated": "2021-03-10T13:11:59+00:00"
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
                  "value": "TEST-2",
                  "period": {
                    "start": "2021-12-18T14:50:59+00:00"
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
                  "value": "TEST-2",
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
                    "Edward"
                  ],
                  "given": [
                    "Jacobs"
                  ]
                }
              ],
              "gender": "male",
              "birthDate": "1982-12-16",
              "deceasedBoolean": false
            },
            "search": {
              "mode": "match"
            },
            "request": {
              "method": "PUT",
              "url": "Patient/TEST-2"
            }
        },
        {
            "fullUrl": "Condition/${CONDITION_ID}",
            "resource": {
              "resourceType": "Condition",
              "id": CONDITION_ID,
              "patient": {
                "reference": "Patient/${PATIENT_ID}"
              },
              "dateRecorded": "2021-06-16T01:33:38+00:00",
              "identifier": {
                "system": "https://pro.deiddev.om1.com/",
                "value": "ae65d63e-0fd5-4f27-abce-87814f9ed0bf"
              },
              "code": {
                "coding": [
                  {
                    "system": "http://snomed.info/sct",
                    "code": "35489007",
                    "display": "Depressive disorder",
                    "userSelected": true
                  }
                ],
                "text": "Depressive disorder"
              },
              "category": {
                "coding": [
                  {
                    "system": "http://hl7.org/fhir/condition-category",
                    "code": "diagnosis",
                    "display": "Diagnosis"
                  }
                ],
                "text": "Diagnosis"
              },
              "clinicalStatus": "active",
              "verificationStatus": "confirmed",
              "onsetDateTime": "2020-01-13T17:52:04+00:00"
            },
            "search": {
              "mode": "match"
            },
            "request": {
              "method": "PUT",
              "url": "Condition"
            }
        }
    ]
}