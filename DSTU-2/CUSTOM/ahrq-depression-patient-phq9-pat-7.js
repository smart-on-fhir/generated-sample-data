const PATIENT_ID = "AHRQ-7"
const ALLERGY_INTOLERANCE_1_ID = "481657"
const ALLERGY_INTOLERANCE_2_ID = "561283"

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
                  "value": "TEST-7",
                  "period": {
                    "start": "2021-03-19T06:21:42+00:00"
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
                  "value": "TEST-7",
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
                    "Nora"
                  ],
                  "given": [
                    "Kinard"
                  ]
                }
              ],
              "gender": "female",
              "birthDate": "1985-11-05",
              "deceasedBoolean": false
            },
            "search": {
              "mode": "match"
            },
            "request": {
              "method": "PUT",
              "url": "Patient/TEST-7"
            }
        },
        {
            "fullUrl": "AllergyIntolerance/${ALLERGY_INTOLERANCE_1_ID}",
            "resource": {
              "resourceType": "AllergyIntolerance",
              "onset": "2006-02-20",
              "recordedDate": "2006-02-20",
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
        },
        {
            "fullUrl": "AllergyIntolerance/${ALLERGY_INTOLERANCE_2_ID}",
            "resource": {
              "resourceType": "AllergyIntolerance",
              "onset": "2010-02-04",
              "recordedDate": "2010-02-04",
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