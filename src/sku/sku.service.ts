import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { BusinessDataModelService } from './business.data.model.service';
import { ValidationService } from './validation.service';
import { DataSource, Repository, In, EntityManager, EntitySchema } from 'typeorm';
import { InjectDataSource } from '@nestjs/typeorm';
const pdmData  ={
    "tableName": "pdm_1",
    "attributeIds": [],
    "attributeGroupIds": [
        1,
        2
    ]
}
@Injectable()
export class SkuService {

    constructor(private readonly businessDataModelService:BusinessDataModelService,
                private readonly validationService:ValidationService,
                @InjectDataSource('pdm') private pdmDataSource:DataSource){}

    async getPhysicalModel(categoryId:number){
            return pdmData
    }

    async getAttributeArrayWithRefrenceMasters(attributes){
        let attributesWithRefrenceMasters = []
        attributes.forEach(async (x)=>{
            let att:attributes={id:null,tableColumnName:null,attributeName:null,labelDescription:null,labelName:null,attributeType:null,constraint:null,refrenceAttributes:[]};
            att.attributeName=x.attributeName
            att.attributeType=x.attributeType
            att.id=x.id
            att.labelDescription=x.labelDescription
            att.labelName=x.labelName
            att.tableColumnName=x.attributeName.toLowerCase().trim().replace(/ /g,"_")
            att.constraint=x.constraint
            if(att.constraint) att.refrenceAttributes= (await this.businessDataModelService.getRefrenceAttributes(x.referenceMasterId)).referenceAttributes.map(y=>{
                const {attributeName,displayName,attributeType}=y
                return {attributeName,displayName,attributeType}
            })
            attributesWithRefrenceMasters.push(att)
        })
        return attributesWithRefrenceMasters
    }

    async getFields(categoryId:number){
        let fields:field[] = []
        const pdmData = await this.getPhysicalModel(categoryId)
        const attributes = await this.businessDataModelService.getAttributeInfo(pdmData.attributeIds)
        const attributeGroups = await this.businessDataModelService.getAttributesFromAttributeGroup(pdmData.attributeGroupIds)
        fields.push({
            id:null,
            attributeGroupName:"Additional Information",
            attributes: await this.getAttributeArrayWithRefrenceMasters(attributes)
        })
        for(let i =0;i<attributeGroups.length;i++){
            fields.push({
                id:attributeGroups[i].id,
                attributeGroupName:attributeGroups[i].attributeGroupName,
                attributes:await this.getAttributeArrayWithRefrenceMasters(attributeGroups[i].attributes)
            })
        }
        return fields
    }

    async getRawAttributes(categoryId:number){
        const attributeGroup = await this.getFields(categoryId)
        const rawAttributes = [].concat.apply([],attributeGroup.map(x=>x.attributes))
        return rawAttributes;
    }

    async matchColumnNameToAttribute(columnName:string, rawAttributes:attributes[]){
        const matchingAttribute = rawAttributes.find(x=>x.tableColumnName===columnName)
        return matchingAttribute
    }

    async validateValue(value, matchingAttribute:attributes){

        if(matchingAttribute.constraint){
            const referenceAttributeUsed = matchingAttribute.refrenceAttributes.find(x=>x.attributeName===value)
            if(!referenceAttributeUsed) return false
            return true
        }

        const validationApplicable = await this.validationService.getValidation(matchingAttribute.id)
        const isValid = await this.validationService.callValidationFunction(value, validationApplicable)
        if(!isValid) return false
        return true
    }

    async validateInputBody(categoryId:number,data:any){
        const rawAttributes = await this.getRawAttributes(categoryId)
        const tableColumns = Object.keys(data)
        console.log(data[`${tableColumns[0]}`])
        for(let i = 0;i<tableColumns.length;i++){
            const matchingAttribute = await this.matchColumnNameToAttribute(tableColumns[i],rawAttributes)
            if(!matchingAttribute) throw new HttpException(`table column ${tableColumns[i]} does not exist`, HttpStatus.NOT_ACCEPTABLE)
            const valueIsValid = await this.validateValue(data[`${tableColumns[i]}`],matchingAttribute)
            if(!valueIsValid) throw new HttpException(`Invalid Value`, HttpStatus.NOT_ACCEPTABLE)
        }
        return true;
    }

    async saveNewProduct(categoryId:number,data:any){
        const tableName = (await this.getPhysicalModel(categoryId)).tableName
        await this.validateInputBody(categoryId,data)

    }
}

interface field{
    id:number
    attributeGroupName:string
    attributes:attributes[]
}

interface attributes{
    id:number
    tableColumnName:string
    attributeName:string
    labelDescription:string
    labelName:string
    attributeType:string
    constraint:boolean
    refrenceAttributes?:refrenceAttributes[]
}

interface refrenceAttributes{
    attributeName:string
    displayName:string
    attributeType:string
}
