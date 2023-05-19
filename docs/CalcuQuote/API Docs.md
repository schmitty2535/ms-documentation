# CalcuQuote Open API Documentation

## Submit BOM
Endpoint: `api/OpenAPI/BOM/Submit`
Notes:

Input:
```json
{  
"AssemblyId": 12  
}
```

Response:
```json
{
  "BomIds": [
    10
  ],
  "ResponseStatus": {
    "StatusCode": 200,
    "Message": "Success!"
  }
}
```

## Enter a BOM into an RFQ
Endpoint: `api/OpenAPI/ImportWidget/SubmitBOM`
Notes:

Input:
```json
{
  "AssemblyId": 13,
  "BOMId": 0,
  "UserId": "ce9663cc-f31c-464b-aa05-552ce81bf0d4",
  "BOMLineItems": [
    {
      "LineItem": "1",
      "Description": "Cree 2835 G-Class xxxxK 3-Step",
      "Qty": 32,
      "Designator": "LED1-LED32",
      "PartClass": "SMT General",
      "Mfgr": "",
      "MfgrsPartNo": "JB2835BWT-G-HxxGA0000-N0000001",
      "Supplier": "",
      "SuppliersPartNo": "",
      "InternalPart": "OLO6535",
      "IsInstall": true,
      "IsPurchase": true,
      "AttrRate": 100,
      "PartNoNotes": "",
      "NoOfLeads": 2
    },
    {
      "LineItem": "2",
      "Description": "PCB 56 LED STANDARD 560x20mm 1L 1/0OZ FR4 1.6MM WHITE MASK BLACK SILK LF-HASL FINISH",
      "Qty": 1,
      "Designator": "PCB",
      "PartClass": "PCB PCB",
      "Mfgr": "",
      "MfgrsPartNo": "P23062A_CAM",
      "Supplier": "",
      "SuppliersPartNo": "",
      "InternalPart": "B23062A",
      "IsInstall": true,
      "IsPurchase": true,
      "AttrRate": 100,
      "PartNoNotes": ""
    },
    {
      "LineItem": "3",
      "Description": "0603 MARKING RESISTOR",
      "Qty": 1,
      "Designator": "4000K",
      "PartClass": "SMT General",
      "Mfgr": "",
      "MfgrsPartNo": "RC0603JR-10100KL",
      "Supplier": "",
      "SuppliersPartNo": "",
      "InternalPart": "RCB6534",
      "IsInstall": true,
      "IsPurchase": true,
      "AttrRate": 100,
      "PartNoNotes": "",
      "NoOfLeads": 2
    },
    {
      "LineItem": "4",
      "Description": "TERMINAL BLOCK, WIRE TO BRD, 1POS, 18AWG",
      "Qty": 4,
      "Designator": "J1-J4",
      "PartClass": "SMT General",
      "Mfgr": "",
      "MfgrsPartNo": "2060-451/998-404",
      "Supplier": "",
      "SuppliersPartNo": "",
      "InternalPart": "JR0545",
      "IsInstall": true,
      "IsPurchase": true,
      "AttrRate": 100,
      "PartNoNotes": "",
      "NoOfLeads": 1
    }
  ]
}
```
Response:


## Add a Labor Activity to an Assembly
Endpoint: `api/OpenAPI/Labor/Create`
Notes:
- BOMID appears to be the same as the RFQ ID
- Activity id can only be found by getting labor information from an assembly that already has that task configured - (probably need to get all ID’s then hardcode)
- Driver Count  needs to be calculated manually and will not be automatically computed like when using the UI

Input:
```json
{  
	"AssemblyId": 13,  
	"BOMId": 12,  
	"UserId": "ce9663cc-f31c-464b-aa05-552ce81bf0d4",  
	"LaborDetails": [  
		{  
			"ActivityId": 98,  
			"ActivityNote": "",  
			"Time": 20,  
			"DriverCount": 42,  
			"LearningCurvePercentage": 100,  
		}  
	]  
}
```

Response:
```json
{  
	"ResponseStatus": {  
		"StatusCode": 200,  
		"Message": ""  
	}  
}
```

## Get all Job Types and IDs
Endpoint: `api/CQAPIGetConfigIds/GetAllJobTypeId`
Notes:

Input:
- No Input

Response:
```json
{
  "status": 200,
  "message": "Success!",
  "data": {
    "data": [
      {
        "Id": 7,
        "Name": "New"
      },
      {
        "Id": 5,
        "Name": "Repeat"
      },
      {
        "Id": 6,
        "Name": "Rev Change"
      }
    ]
  },
  "messageType": "Success"
}
```

## Get all Customers and IDs
Endpoint: `api/CQAPIGetConfigIds/GetAllCustomerId`
Notes:

Input:
- No Input

Response:
```json
{
  "status": 200,
  "message": "Success!",
  "data": {
    "data": [
      {
        "Id": 24,
        "Name": "CalcuQuote"
      },
      {
        "Id": 26,
        "Name": "Unassociated Contacts"
      },
      {
        "Id": 27,
        "Name": "Magna"
      },
      {
        "Id": 28,
        "Name": "Appareo"
      }
    ]
  },
  "messageType": "Success"
}
```

## Get all Customer Contacts and IDs
Endpoint: `api/CQAPIGetConfigIds/GetAllCustomerContactId`
Notes:

Input:
- No Input

Response:
```json
{
  "status": 200,
  "message": "Success!",
  "data": {
    "data": [
      {
        "Id": 29,
        "Name": "Marisol Cajigal",
        "CustomerId": 24,
        "CustomerName": "CalcuQuote"
      },
      {
        "Id": 35,
        "Name": "Kaitlyn Dotson",
        "CustomerId": 24,
        "CustomerName": "CalcuQuote"
      },
      {
        "Id": 39,
        "Name": "Jordan Lawrence",
        "CustomerId": 24,
        "CustomerName": "CalcuQuote"
      },
      {
        "Id": 40,
        "Name": "Alex Pinell",
        "CustomerId": 24,
        "CustomerName": "CalcuQuote"
      },
      {
        "Id": 38,
        "Name": "Contact1 Contact1",
        "CustomerId": 26,
        "CustomerName": "Unassociated Contacts"
      },
      {
        "Id": 41,
        "Name": "Oliver Pace",
        "CustomerId": 27,
        "CustomerName": "Magna"
      },
      {
        "Id": 42,
        "Name": "Jeff Mauck",
        "CustomerId": 28,
        "CustomerName": "Appareo"
      }
    ]
  },
  "messageType": "Success"
}
```



## Get all Suppliers and Corresponding Info
Endpoint: `api/CQAPISupplier/V2/GetAllSuppliers`
Notes:

Input:
- No Input
```json
{
  "Page": 1,
  "ItemsPerPage": 10,
  "IncludeSupplierContacts": true
}
```
Response:
```json
{
  "TotalRecords": 174,
  "TotalPages": 18,
  "Suppliers": [
    {
      "Id": 1,
      "SupplierName": "DEFAULT VENDOR",
      "Alias": "default vendor",
      "SupplierRFQ": null,
      "RFQNotes": null,
      "ExternalId": null,
      "PreferenceOrder": null,
      "Active": true,
      "MinimumOrderSize": null,
      "ShippingFee": null,
      "POTerms": null,
      "POFOB": null,
      "POShippingMethod": null,
      "POSupplierNote": null,
      "CustomReelFee": null,
      "BidReminderDays": 2,
      "SupplierContacts": [
        {
          "Id": 112,
          "ContactPersonName": "Alex",
          "Email": "alex@calcuquote.com",
          "ExternalId": null,
          "SupplierContactCompanyDetails": [
            {
              "Id": 1,
              "CompanyName": "MADE Manufacture and Design Electronics"
            }
          ]
        }
      ]
    },
    {
      "Id": 2,
      "SupplierName": "ManEx Target price",
      "Alias": "manex target price",
      "SupplierRFQ": null,
      "RFQNotes": null,
      "ExternalId": null,
      "PreferenceOrder": 1,
      "Active": true,
      "MinimumOrderSize": null,
      "ShippingFee": null,
      "POTerms": null,
      "POFOB": null,
      "POShippingMethod": null,
      "POSupplierNote": null,
      "CustomReelFee": null,
      "BidReminderDays": 2,
      "SupplierContacts": []
    },
    {
      "Id": 3,
      "SupplierName": "ManEx Standard Cost",
      "Alias": "manex standard cost",
      "SupplierRFQ": null,
      "RFQNotes": null,
      "ExternalId": null,
      "PreferenceOrder": 1,
      "Active": true,
      "MinimumOrderSize": null,
      "ShippingFee": null,
      "POTerms": null,
      "POFOB": null,
      "POShippingMethod": null,
      "POSupplierNote": null,
      "CustomReelFee": null,
      "BidReminderDays": 2,
      "SupplierContacts": []
    },
    {
      "Id": 4,
      "SupplierName": "ManEx",
      "Alias": "manex",
      "SupplierRFQ": null,
      "RFQNotes": null,
      "ExternalId": null,
      "PreferenceOrder": 1,
      "Active": true,
      "MinimumOrderSize": null,
      "ShippingFee": null,
      "POTerms": null,
      "POFOB": null,
      "POShippingMethod": null,
      "POSupplierNote": null,
      "CustomReelFee": null,
      "BidReminderDays": 2,
      "SupplierContacts": []
    },
    {
      "Id": 21,
      "SupplierName": "TTI",
      "Alias": "tti",
      "SupplierRFQ": null,
      "RFQNotes": null,
      "ExternalId": null,
      "PreferenceOrder": null,
      "Active": true,
      "MinimumOrderSize": null,
      "ShippingFee": null,
      "POTerms": null,
      "POFOB": null,
      "POShippingMethod": null,
      "POSupplierNote": null,
      "CustomReelFee": null,
      "BidReminderDays": 2,
      "SupplierContacts": []
    },
    {
      "Id": 23,
      "SupplierName": "MyArrow",
      "Alias": "myarrow",
      "SupplierRFQ": null,
      "RFQNotes": null,
      "ExternalId": null,
      "PreferenceOrder": null,
      "Active": true,
      "MinimumOrderSize": null,
      "ShippingFee": null,
      "POTerms": null,
      "POFOB": null,
      "POShippingMethod": null,
      "POSupplierNote": null,
      "CustomReelFee": null,
      "BidReminderDays": 2,
      "SupplierContacts": []
    },
    {
      "Id": 24,
      "SupplierName": "Future",
      "Alias": "future",
      "SupplierRFQ": null,
      "RFQNotes": null,
      "ExternalId": null,
      "PreferenceOrder": null,
      "Active": true,
      "MinimumOrderSize": null,
      "ShippingFee": null,
      "POTerms": null,
      "POFOB": null,
      "POShippingMethod": null,
      "POSupplierNote": null,
      "CustomReelFee": null,
      "BidReminderDays": 2,
      "SupplierContacts": []
    },
    {
      "Id": 25,
      "SupplierName": "E-Sonic",
      "Alias": "e-sonic",
      "SupplierRFQ": null,
      "RFQNotes": null,
      "ExternalId": null,
      "PreferenceOrder": null,
      "Active": true,
      "MinimumOrderSize": null,
      "ShippingFee": null,
      "POTerms": null,
      "POFOB": null,
      "POShippingMethod": null,
      "POSupplierNote": null,
      "CustomReelFee": null,
      "BidReminderDays": 2,
      "SupplierContacts": []
    },
    {
      "Id": 26,
      "SupplierName": "Sager",
      "Alias": "sager",
      "SupplierRFQ": null,
      "RFQNotes": null,
      "ExternalId": null,
      "PreferenceOrder": null,
      "Active": true,
      "MinimumOrderSize": null,
      "ShippingFee": null,
      "POTerms": null,
      "POFOB": null,
      "POShippingMethod": null,
      "POSupplierNote": null,
      "CustomReelFee": null,
      "BidReminderDays": 2,
      "SupplierContacts": []
    },
    {
      "Id": 27,
      "SupplierName": "Master Electronics",
      "Alias": "master electronics",
      "SupplierRFQ": null,
      "RFQNotes": null,
      "ExternalId": null,
      "PreferenceOrder": null,
      "Active": true,
      "MinimumOrderSize": null,
      "ShippingFee": null,
      "POTerms": null,
      "POFOB": null,
      "POShippingMethod": null,
      "POSupplierNote": null,
      "CustomReelFee": null,
      "BidReminderDays": 2,
      "SupplierContacts": []
    }
  ],
  "ResponseStatus": {
    "StatusCode": 200,
    "Message": ""
  }
}
```


## Get a Supplier by Name
Endpoint: `api/CQAPISupplier/V2/GetSupplierByName`
Notes:

Input:
```json
{
  "SupplierName": "Future",
  "IncludeSupplierContacts": true
}
```

Response:
```json
{
  "Suppliers": [
    {
      "Id": 24,
      "SupplierName": "Future",
      "Alias": "future",
      "SupplierRFQ": null,
      "RFQNotes": null,
      "ExternalId": null,
      "PreferenceOrder": null,
      "Active": true,
      "MinimumOrderSize": null,
      "ShippingFee": null,
      "POTerms": null,
      "POFOB": null,
      "POShippingMethod": null,
      "POSupplierNote": null,
      "CustomReelFee": null,
      "BidReminderDays": 2,
      "SupplierContacts": []
    }
  ],
  "ResponseStatus": {
    "StatusCode": 200,
    "Message": ""
  }
}
```

## Get the status of an RFQ
Endpoint: `api/OpenAPI/RFQStatus`
Notes:

Input:
```json
{
  "RFQId": 10,
  "AssemblyIds": [
    10
  ]
}
```

Response:
```json
{
  "RequestFormData": {
    "RequestFormId": 10,
    "DisplayRequestFormId": "10",
    "JobType": "Turnkey",
    "OrderType": "New",
    "RFQSubmittedBy": "Maxwell Schmitt",
    "RFQSubmittedByEmail": "ms@made-usa.net",
    "RFQSubmittedByUserId": "ce9663cc-f31c-464b-aa05-552ce81bf0d4",
    "RFQInDate": "2023-05-10T11:27:13",
    "RFQDueDate": "2023-05-17T11:27:53Z",
    "CompanyCurrency": "USD",
    "RFQCurrency": "USD",
    "ProgramManager": null,
    "PotentialRevenue": null,
    "QuoteNote": null,
    "QuoteValidDays": 30,
    "QuoteTypeName": null,
    "Customer": {
      "Id": 26,
      "IndustryName": "Default",
      "Category": "Default",
      "CompanyName": "Unassociated Contacts",
      "Web": null,
      "TNC": null,
      "Currency": "USD",
      "ExternalID": "0",
      "Notes": null
    },
    "CustomerContact": {
      "Id": 38,
      "ContactFirstName": "Contact1",
      "ContactLastName": "Contact1",
      "Address1": "",
      "Address2": "",
      "Address3": "",
      "Email": "Contact1@test.com",
      "City": "",
      "State": "DC",
      "Country": "",
      "Zip": "123",
      "Phone": "",
      "Fax": "",
      "CompanyName": null
    },
    "CheckListBuilder": [],
    "Assemblies": [
      {
        "Id": 10,
        "DisplayAssemblyId": "10",
        "LastModifiedDate": "2023-05-11T17:33:27.16",
        "AssemblyPublishVersion": null,
        "AssemblyPublishedDate": null,
        "AssemblyName": "32 LED Module 22",
        "AssemblyNumber": "S5620D32CxxF8NxxxxxxxxA",
        "AssemblyNote": null,
        "Rev": "--",
        "AdditionalRequirements": [
          {
            "Requirement": "Functional Test",
            "Description": null,
            "Order": 9
          }
        ],
        "Quantities": [
          {
            "Id": 15,
            "RequestQuantity": 5000,
            "EditQuantity": 5000,
            "PackageName": null,
            "TurnTime": [
              {
                "Id": 15,
                "TurnAroundTime": 3,
                "TimeUoMName": "Week(s)",
                "TurntimeReferenceName": null
              }
            ]
          },
          {
            "Id": 16,
            "RequestQuantity": 10000,
            "EditQuantity": 10000,
            "PackageName": null,
            "TurnTime": [
              {
                "Id": 16,
                "TurnAroundTime": 3,
                "TimeUoMName": "Week(s)",
                "TurntimeReferenceName": null
              }
            ]
          }
        ],
        "status": {
          "Type": "Turnkey",
          "Stage": "Incomplete",
          "SubStage": "",
          "Risk": "Complete",
          "BOM": "Complete",
          "Labor": "Complete",
          "MaterialCosting": "Incomplete",
          "Summary": "Incomplete",
          "Quote": "Incomplete"
        }
      }
    ]
  },
  "ResponseStatus": {
    "StatusCode": 200,
    "Message": ""
  }
}
```



## Get all RFQs in a Date Range
Endpoint: `api/cqRfqStatus/Search`
Notes:

Input:
```json
{
  "StartDate": "2023-05-09T19:45:07.695Z",
}

```

Response:
```json
{
  "status": 200,
  "message": null,
  "data": {
    "data": {
      "Messsage": "Success!",
      "Assemblies": [
        {
          "RequestFormId": 10,
          "DisplayRequestFormId": "10",
          "AssemblyId": 10,
          "DisplayAssemblyId": "10",
          "JobType": "Turnkey",
          "OrderType": "New",
          "RFQSubmittedBy": "Maxwell Schmitt",
          "RFQInDate": "2023-05-10T11:27:13",
          "RFQDueDate": "2023-05-17T11:27:53",
          "LastModifiedDate": "2023-05-11T17:33:27.16",
          "ProgramManager": "",
          "PotentialRevenue": null,
          "QuoteNote": "",
          "Customer": {
            "Id": 26,
            "IndustryName": "Default",
            "Category": "Default",
            "CompanyName": "Unassociated Contacts",
            "ExternalID": "0",
            "Notes": null
          },
          "cQAPICustomerContact": {
            "CustomerName": null,
            "ContactFirstName": "Contact1",
            "ContactLastName": "Contact1",
            "ContactEmail": "Contact1@test.com",
            "State": "DC",
            "City": "",
            "Address": ""
          },
          "AssemblyName": "32 LED Module 22",
          "AssemblyNumber": "S5620D32CxxF8NxxxxxxxxA",
          "Rev": "--",
          "cQAPIAdditionalRequirement": [
            {
              "Requirement": "Functional Test"
            }
          ],
          "AssemblyNote": null,
          "AssemblyPublishVersion": null,
          "quantity": [
            {
              "Id": 15,
              "RequestQuantity": 5000,
              "TurnTime": [
                {
                  "Id": 15,
                  "TurnAroundTime": 3,
                  "TimeUoMName": "Week(s)"
                }
              ]
            },
            {
              "Id": 16,
              "RequestQuantity": 10000,
              "TurnTime": [
                {
                  "Id": 16,
                  "TurnAroundTime": 3,
                  "TimeUoMName": "Week(s)"
                }
              ]
            }
          ],
          "cQAPIRFQCheckListBuilder": [],
          "status": {
            "Type": "Turnkey",
            "Stage": "Incomplete",
            "SubStage": "",
            "Risk": "Complete",
            "BOM": "Complete",
            "Labor": "Complete",
            "MaterialCosting": "Incomplete",
            "Summary": "Incomplete",
            "Quote": "Incomplete"
          }
        },
        {
          "RequestFormId": 11,
          "DisplayRequestFormId": "11",
          "AssemblyId": 11,
          "DisplayAssemblyId": "11",
          "JobType": "Turnkey",
          "OrderType": "New",
          "RFQSubmittedBy": "Maxwell Schmitt",
          "RFQInDate": "2023-05-11T16:25:35",
          "RFQDueDate": "2023-05-18T16:25:35",
          "LastModifiedDate": "2023-05-11T17:34:09.863",
          "ProgramManager": "",
          "PotentialRevenue": null,
          "QuoteNote": "",
          "Customer": {
            "Id": 26,
            "IndustryName": "Default",
            "Category": "Default",
            "CompanyName": "Unassociated Contacts",
            "ExternalID": "0",
            "Notes": null
          },
          "cQAPICustomerContact": {
            "CustomerName": null,
            "ContactFirstName": "Contact1",
            "ContactLastName": "Contact1",
            "ContactEmail": "Contact1@test.com",
            "State": "DC",
            "City": "",
            "Address": ""
          },
          "AssemblyName": "32 LED Module 22",
          "AssemblyNumber": "S5620D48CxxF8NxxxxxxxxA",
          "Rev": "--",
          "cQAPIAdditionalRequirement": [
            {
              "Requirement": "Functional Test"
            }
          ],
          "AssemblyNote": null,
          "AssemblyPublishVersion": null,
          "quantity": [
            {
              "Id": 17,
              "RequestQuantity": 5000,
              "TurnTime": [
                {
                  "Id": 17,
                  "TurnAroundTime": 3,
                  "TimeUoMName": "Week(s)"
                }
              ]
            },
            {
              "Id": 18,
              "RequestQuantity": 10000,
              "TurnTime": [
                {
                  "Id": 18,
                  "TurnAroundTime": 3,
                  "TimeUoMName": "Week(s)"
                }
              ]
            }
          ],
          "cQAPIRFQCheckListBuilder": [],
          "status": {
            "Type": "Turnkey",
            "Stage": "Incomplete",
            "SubStage": "",
            "Risk": "Complete",
            "BOM": "Complete",
            "Labor": "Complete",
            "MaterialCosting": "Incomplete",
            "Summary": "Incomplete",
            "Quote": "Incomplete"
          }
        }
      ]
    }
  },
  "messageType": "Success"
}
```





















example
```json
{
  "Messsage": "string",
  "Assemblies": [
    {
      "RequestFormId": 0,
      "DisplayRequestFormId": "string",
      "AssemblyId": 0,
      "DisplayAssemblyId": "string",
      "JobType": "string",
      "OrderType": "string",
      "RFQSubmittedBy": "string",
      "RFQInDate": "2023-05-11T19:45:07.695Z",
      "RFQDueDate": "2023-05-11T19:45:07.695Z",
      "LastModifiedDate": "2023-05-11T19:45:07.695Z",
      "ProgramManager": "string",
      "PotentialRevenue": 0,
      "QuoteNote": "string",
      "Customer": {
        "Id": 0,
        "IndustryName": "string",
        "Category": "string",
        "CompanyName": "string",
        "ExternalID": "string",
        "Notes": "string"
      },
      "cQAPICustomerContact": {
        "CustomerName": "string",
        "ContactFirstName": "string",
        "ContactLastName": "string",
        "ContactEmail": "string",
        "State": "string",
        "City": "string",
        "Address": "string"
      },
      "AssemblyName": "string",
      "AssemblyNumber": "string",
      "Rev": "string",
      "cQAPIAdditionalRequirement": [
        {
          "Requirement": "string"
        }
      ],
      "AssemblyNote": "string",
      "AssemblyPublishVersion": "string",
      "quantity": [
        {
          "Id": 0,
          "RequestQuantity": 0,
          "TurnTime": [
            {
              "Id": 0,
              "TurnAroundTime": 0,
              "TimeUoMName": "string"
            }
          ]
        }
      ],
      "cQAPIRFQCheckListBuilder": [
        {
          "Name": "string",
          "FieldTypeValue": "string",
          "FieldType": "string",
          "FieldTypeDataType": "string",
          "maxlength": 0,
          "Required": true,
          "FieldOrder": 0
        }
      ],
      "status": {
        "Type": "string",
        "Stage": "string",
        "SubStage": "string",
        "Risk": "string",
        "BOM": "string",
        "Labor": "string",
        "MaterialCosting": "string",
        "Summary": "string",
        "Quote": "string"
      }
    }
  ]
}
```