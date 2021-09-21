const PATIENT_ID = "TEST-2"
const QUESTIONNAIRE_RESPONSE_1_ID = "847913"


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
                "lastUpdated": "2008-12-07T10:34:43+00:00"
              },
              "text": {
                "status": "generated",
                "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><table class=\"hapiPropertyTable\"><tbody><tr><td>Identifier</td><td>0</td></tr></tbody></table></div>"
              },
              "identifier": [
                {
                  "system": "urn:oid:2.16.840.1.113883.6.1000",
                  "value": "TEST-2",
                  "period": {
                    "start": "2021-07-21T03:08:31+00:00"
                  }
                }
              ]
            },
            "request": {
              "method": "PUT",
              "url": "Patient"
            }
        },
        {
            "fullUrl": "QuestionnaireResponse/${QUESTIONNAIRE_RESPONSE_1_ID}",
            "resource": {
              "resourceType": "QuestionnaireResponse",
              "id": QUESTIONNAIRE_RESPONSE_1_ID,
              "meta": {
                "versionId": "1",
                "lastUpdated": "2020-01-13T05:23:34+00:00"
              },
              "questionnaire": {
                "identifier": {
                  "system": "https://pro.deiddev.om1.com/",
                  "value": "case_2_847913"
                }
              },
              "status": "completed",
              "subject": {
                "reference": "Patient/${PATIENT_ID}"
              },
              "authored": "2020-01-13T05:23:34+00:00",
              "item": [
                {
                  "linkId": "1",
                  "definition": "http://loinc.orgfhir/DataElement/44250-9",
                  "text": "Little interest or pleasure in doing things",
                  "answer": [
                    {
                      "valueCoding": {
                        "extension": [
                          {
                            "url": "http://hl7.org/fhir/StructureDefinition/iso21090-CO-value",
                            "valueDecimal": 1
                          }
                        ],
                        "system": "http://loinc.org",
                        "code": "LA6568-5",
                        "display": "Yes"
                      }
                    }
                  ]
                },
                {
                  "linkId": "2",
                  "definition": "http://loinc.orgfhir/DataElement/44255-8",
                  "text": "Feeling down, depressed or hopeless",
                  "answer": [
                    {
                      "valueCoding": {
                        "extension": [
                          {
                            "url": "http://hl7.org/fhir/StructureDefinition/iso21090-CO-value",
                            "valueDecimal": 2
                          }
                        ],
                        "system": "http://loinc.org",
                        "code": "LA6568-5",
                        "display": "Yes"
                      }
                    }
                  ]
                },
                {
                  "linkId": "3",
                  "definition": "http://loinc.orgfhir/DataElement/44259-0",
                  "text": "Trouble falling asleep, staying asleep, or sleeping too much",
                  "answer": [
                    {
                      "valueCoding": {
                        "extension": [
                          {
                            "url": "http://hl7.org/fhir/StructureDefinition/iso21090-CO-value",
                            "valueDecimal": 2
                          }
                        ],
                        "system": "http://loinc.org",
                        "code": "LA6568-5",
                        "display": "Yes"
                      }
                    }
                  ]
                },
                {
                  "linkId": "4",
                  "definition": "http://loinc.orgfhir/DataElement/44254-1",
                  "text": "Feeling tired or having little energy",
                  "answer": [
                    {
                      "valueCoding": {
                        "extension": [
                          {
                            "url": "http://hl7.org/fhir/StructureDefinition/iso21090-CO-value",
                            "valueDecimal": 3
                          }
                        ],
                        "system": "http://loinc.org",
                        "code": "LA6568-5",
                        "display": "Yes"
                      }
                    }
                  ]
                },
                {
                  "linkId": "5",
                  "definition": "http://loinc.orgfhir/DataElement/44251-7",
                  "text": "Poor appetite or overeating",
                  "answer": [
                    {
                      "valueCoding": {
                        "extension": [
                          {
                            "url": "http://hl7.org/fhir/StructureDefinition/iso21090-CO-value",
                            "valueDecimal": 3
                          }
                        ],
                        "system": "http://loinc.org",
                        "code": "LA6568-5",
                        "display": "Yes"
                      }
                    }
                  ]
                },
                {
                  "linkId": "6",
                  "definition": "http://loinc.orgfhir/DataElement/44258-2",
                  "text": "Feeling bad about yourself - or that you're a failure or have let yourself or your family down",
                  "answer": [
                    {
                      "valueCoding": {
                        "extension": [
                          {
                            "url": "http://hl7.org/fhir/StructureDefinition/iso21090-CO-value",
                            "valueDecimal": 1
                          }
                        ],
                        "system": "http://loinc.org",
                        "code": "LA6568-5",
                        "display": "Yes"
                      }
                    }
                  ]
                },
                {
                  "linkId": "7",
                  "definition": "http://loinc.orgfhir/DataElement/44252-5",
                  "text": "Trouble concentrating on things, such as reading the newspaper or watching television",
                  "answer": [
                    {
                      "valueCoding": {
                        "extension": [
                          {
                            "url": "http://hl7.org/fhir/StructureDefinition/iso21090-CO-value",
                            "valueDecimal": 3
                          }
                        ],
                        "system": "http://loinc.org",
                        "code": "LA6568-5",
                        "display": "Yes"
                      }
                    }
                  ]
                },
                {
                  "linkId": "8",
                  "definition": "http://loinc.orgfhir/DataElement/44253-3",
                  "text": "Moving or speaking so slowly that other people could have noticed. Or, the opposite - being so fidgety or restless that you have been moving around a lot more than usual",
                  "answer": [
                    {
                      "valueCoding": {
                        "extension": [
                          {
                            "url": "http://hl7.org/fhir/StructureDefinition/iso21090-CO-value",
                            "valueDecimal": 3
                          }
                        ],
                        "system": "http://loinc.org",
                        "code": "LA6568-5",
                        "display": "Yes"
                      }
                    }
                  ]
                },
                {
                  "linkId": "9",
                  "definition": "http://loinc.orgfhir/DataElement/44260-8",
                  "text": "Thoughts that you would be better off dead or of hurting yourself in some way",
                  "answer": [
                    {
                      "valueCoding": {
                        "extension": [
                          {
                            "url": "http://hl7.org/fhir/StructureDefinition/iso21090-CO-value",
                            "valueDecimal": 0
                          }
                        ],
                        "system": "http://loinc.org",
                        "code": "LA6568-5",
                        "display": "Yes"
                      }
                    }
                  ]
                },
                {
                  "linkId": "10",
                  "definition": "http://loinc.orgfhir/DataElement/44261-6",
                  "text": "Total PHQ-9 Score",
                  "answer": [
                    {
                      "valueInteger": 35
                    }
                  ]
                }
              ]
            },
            "request": {
              "method": "PUT",
              "url": "QuestionnaireResponse"
            }
        }
    ]
}