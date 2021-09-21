const PATIENT_ID = "AHRQ-10"
const CONDITION_ID = "643338"
const ALLERGY_INTOLERANCE_ID = "771890"

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
                  "value": "TEST-10",
                  "period": {
                    "start": "2021-12-21T09:44:51+00:00"
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
                  "value": "TEST-10",
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
                    "Cheryl"
                  ],
                  "given": [
                    "Villarreal"
                  ]
                }
              ],
              "gender": "female",
              "birthDate": "1988-08-08",
              "deceasedBoolean": false
            },
            "search": {
              "mode": "match"
            },
            "request": {
              "method": "PUT",
              "url": "Patient/TEST-10"
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
              "dateRecorded": "2021-08-02T15:29:59+00:00",
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
              "onsetDateTime": "2020-03-04T17:30:41+00:00"
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
            "fullUrl": "AllergyIntolerance/${ALLERGY_INTOLERANCE_ID}",
            "resource": {
              "resourceType": "AllergyIntolerance",
              "onset": "2016-11-29",
              "recordedDate": "2016-11-29",
              "patient": {
                "reference": "Patient/${PATIENT_ID}"
              },
              "substance": {
                "coding": [
                  {
                    "system": "http://www.nlm.nih.gov/research/umls/rxnorm",
                    "code": "352272",
                    "display": "Escitalopram 10 MG Oral Tablet [Lexapro]",
                    "userSelected": false
                  }
                ],
                "text": "Lexapro"
              },
              "status": "active",
              "criticality": "CRITH",
              "reaction": [
                {
                  "id": "12760021",
                  "manifestation": [
                    {
                      "coding": [
                        {
                          "system": "http://snomed.info/sct",
                          "code": "271807003",
                          "display": "Eruption of skin (disorder)",
                          "userSelected": false
                        }
                      ],
                      "text": "Rash"
                    }
                  ]
                }
              ]
            },
            "search": {
              "mode": "match"
            },
            "request": {
              "method": "PUT",
              "url": "AllergyIntolerance"
            }
        }
    ]
}