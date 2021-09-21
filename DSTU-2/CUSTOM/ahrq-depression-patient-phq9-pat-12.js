const PATIENT_ID = "AHRQ-12"
const CONDITION_1_ID = "320967"
const CONDITION_2_ID = "862833"

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
              "value": "TEST-12",
              "period": {
                "start": "2021-10-16T08:19:01+00:00"
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
              "value": "TEST-12",
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
                "Helen"
              ],
              "given": [
                "Rodriguez"
              ]
            }
          ],
          "gender": "female",
          "birthDate": "1976-11-25",
          "deceasedBoolean": false
        },
        "search": {
          "mode": "match"
        },
        "request": {
          "method": "PUT",
          "url": "Patient/TEST-12"
        }
      },
      {
        "fullUrl": "Condition/${CONDITION_1_ID}",
        "resource": {
          "resourceType": "Condition",
          "id": CONDITION_1_ID,
          "patient": {
            "reference": "Patient/${PATIENT_ID}"
          },
          "dateRecorded": "2021-02-07T10:06:55+00:00",
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
          "onsetDateTime": "2020-01-01T03:34:58+00:00"
        },
        "search": {
          "mode": "match"
        },
        "request": {
          "method": "PUT",
          "url": "Condition"
        }
      },
      {
        "fullUrl": "Condition/${CONDITION_2_ID}",
        "resource": {
          "resourceType": "Condition",
          "id": CONDITION_2_ID,
          "patient": {
            "reference": "Patient/${PATIENT_ID}"
          },
          "dateRecorded": "2021-07-21T09:18:12+00:00",
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
          "onsetDateTime": "2020-02-01T19:58:29+00:00"
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
    