import { Injectable } from '@nestjs/common';


@Injectable()
export class BusinessDataModelService {

    async getAttributeInfo(attributeId:number[]){
        return attributes
    }

    async getAttributesFromAttributeGroup(attributeGroupId:number[]){
        return attributeGroups
    }

    async getRefrenceAttributes(referenceMasterId:number){
        return refrenceAttributes
    }

}

const attributes = [{
    "id": 5,
    "attributeName": "Country Of Origin",
    "labelDescription": "Country Of Origin",
    "labelName": "Country Of Origin",
    "attributeType": "textBox",
    "constraint": false,
    "masterId": 1,
    "attributeGroupId": 1,
    "referenceMasterId": 0,
    "status": true,
    "createdAt": "2022-09-12T16:34:26.328Z",
    "updatedAt": "2022-09-12T16:34:26.328Z"
  }]

const attributeGroups = [
    {
    "id": 1,
    "attributeGroupName": "Basic Information",
    "status": true,
    "createdAt": "2022-09-13T05:06:00.776Z",
    "updatedAt": "2022-09-13T05:06:00.776Z",
    "attributes": [
    {
        "id": 1,
        "attributeName": "Model Name",
        "labelDescription": "Model Name",
        "labelName": "Model Name",
        "attributeType": "textBox",
        "constraint": false,
        "masterId": 1,
        "attributeGroupId": 1,
        "referenceMasterId": 0,
        "status": true,
        "createdAt": "2022-09-13T05:06:00.780Z",
        "updatedAt": "2022-09-13T05:06:00.780Z"
    },
    {
        "id": 2,
        "attributeName": "Manufacturer",
        "labelDescription": "Manufacturer",
        "labelName": "Manufacturer",
        "attributeType": "textBox",
        "constraint": false,
        "masterId": 1,
        "attributeGroupId": 1,
        "referenceMasterId": 0,
        "status": true,
        "createdAt": "2022-09-13T05:06:00.780Z",
        "updatedAt": "2022-09-13T05:06:00.780Z"
    }   
],
},
//
{
    "id": 2,
    "attributeGroupName": "Technical Details",
    "status": true,
    "createdAt": "2022-09-13T05:06:00.776Z",
    "updatedAt": "2022-09-13T05:06:00.776Z",
    "attributes": [
    {
        "id": 3,
        "attributeName": "RAM",
        "labelDescription": "RAM",
        "labelName": "RAM",
        "attributeType": "textBox",
        "constraint": true,
        "masterId": 1,
        "attributeGroupId": 2,
        "referenceMasterId": 1,
        "status": true,
        "createdAt": "2022-09-13T05:06:00.780Z",
        "updatedAt": "2022-09-13T05:06:00.780Z"
    },
    {
        "id": 4,
        "attributeName": "Wattage",
        "labelDescription": "Wattage",
        "labelName": "Wattage",
        "attributeType": "textBox",
        "constraint": false,
        "masterId": 1,
        "attributeGroupId": 1,
        "referenceMasterId": 0,
        "status": true,
        "createdAt": "2022-09-13T05:06:00.780Z",
        "updatedAt": "2022-09-13T05:06:00.780Z"
    }   
],
}
]

const validation =  [{
        "textVldn": {
          "maxCharacters": 25,
          "minCharacters": 5,
          "lowerCaseOnly": false,
          "upperCaseOnly": false,
          "allowNumbers": true,
          "specialCharacters": true,
          "spacingAllowed": true,
          "type": "varchar",
          "id": 1,
          "attributeId": 4,
          "createdAt": "Tue Sep 13 2022 12:42:15 GMT+0530 (India Standard Time)",
          "updatedAt": "Tue Sep 13 2022 12:42:15 GMT+0530 (India Standard Time)"
        },
        "validation": "textVldn"
      }]


const refrenceAttributes = {
        "referenceAttributes": [
          {
            "id": 9,
            "attributeName": "4 GB",
            "displayName": "4 GB",
            "attributeType": "varchar",
            "referenceMasterId": 5,
            "status": true,
            "createdAt": "2022-09-13T07:05:06.529Z",
            "updatedAt": "2022-09-13T07:05:06.529Z"
          },
          {
            "id": 10,
            "attributeName": "8 GB",
            "displayName": "8 GB",
            "attributeType": "varchar",
            "referenceMasterId": 5,
            "status": true,
            "createdAt": "2022-09-13T07:05:13.452Z",
            "updatedAt": "2022-09-13T07:05:13.452Z"
          },
          {
            "id": 11,
            "attributeName": "12 GB",
            "displayName": "12 GB",
            "attributeType": "varchar",
            "referenceMasterId": 5,
            "status": true,
            "createdAt": "2022-09-13T07:05:21.765Z",
            "updatedAt": "2022-09-13T07:05:21.765Z"
          }
        ]
      }
//GET getPDM
//Input
//http://127.0.0.1:3000/pdm/getPhysicalDataModel?id=1
//
//Output
// {
//     "tableName": "color_1",
//     "attributeIds": [],
//     "attributeGroupIds": [
//         1,
//         2
//     ]
// }

//GET attributes
// {
//     "id": 1,
//     "attributeName": "Product Name",
//     "labelDescription": "Product Name",
//     "labelName": "Product Name",
//     "attributeType": "textBox",
//     "constraint": false,
//     "masterId": 1,
//     "attributeGroupId": 1,
//     "referenceMasterId": 0,
//     "status": true,
//     "createdAt": "2022-09-12T16:34:26.328Z",
//     "updatedAt": "2022-09-12T16:34:26.328Z"
//   }

//Validation
// {
//     "textVldn": {
//       "maxCharacters": 25,
//       "minCharacters": 1,
//       "lowerCaseOnly": false,
//       "upperCaseOnly": false,
//       "allowNumbers": true,
//       "specialCharacters": true,
//       "spacingAllowed": true,
//       "type": "varchar",
//       "id": 128,
//       "attributeId": 317,
//       "createdAt": "Tue Sep 13 2022 12:42:15 GMT+0530 (India Standard Time)",
//       "updatedAt": "Tue Sep 13 2022 12:42:15 GMT+0530 (India Standard Time)"
//     },
//     "validation": "textVldn"
//   }

//Refrence Attrs
// {
//     "referenceAttributes": [
//       {
//         "id": 9,
//         "attributeName": "4 GB",
//         "displayName": "4 GB",
//         "attributeType": "varchar",
//         "referenceMasterId": 5,
//         "status": true,
//         "createdAt": "2022-09-13T07:05:06.529Z",
//         "updatedAt": "2022-09-13T07:05:06.529Z"
//       },
//       {
//         "id": 10,
//         "attributeName": "8 GB",
//         "displayName": "8 GB",
//         "attributeType": "varchar",
//         "referenceMasterId": 5,
//         "status": true,
//         "createdAt": "2022-09-13T07:05:13.452Z",
//         "updatedAt": "2022-09-13T07:05:13.452Z"
//       },
//       {
//         "id": 11,
//         "attributeName": "12 GB",
//         "displayName": "12 GB",
//         "attributeType": "varchar",
//         "referenceMasterId": 5,
//         "status": true,
//         "createdAt": "2022-09-13T07:05:21.765Z",
//         "updatedAt": "2022-09-13T07:05:21.765Z"
//       }
//     ]
//   }