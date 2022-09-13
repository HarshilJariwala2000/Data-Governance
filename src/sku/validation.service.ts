import {Injectable} from '@nestjs/common'
interface IValidation{
    textVldn?:{
        "maxCharacters": number,
        "minCharacters": number,
        "lowerCaseOnly": boolean,
        "upperCaseOnly": boolean,
        "allowNumbers": boolean,
        "specialCharacters": boolean,
        "spacingAllowed": boolean,
        "type": string,
        "id": number,
        "attributeId": number,
        "createdAt": string,
        "updatedAt": string
    },
    validation:string
}

@Injectable()
export class ValidationService{

    async getValidation(attributeId:number){
        return validation[0]
    }

    async callValidationFunction(validationValue:string,validation:IValidation){
        if(validation.validation==="textVldn") return await this.textValidation(validationValue,validation)
    }

    async textValidation(validationText:string,validationParams:IValidation){
        const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/
        // if(validationText.length>validationParams.textVldn.maxCharacters) return false
        // if(validationText.length<validationParams.textVldn.minCharacters) return false
        // if(validationParams.textVldn.lowerCaseOnly && validationText!=validationText.toLowerCase()) return false
        // if(validationParams.textVldn.upperCaseOnly && validationText!=validationText.toUpperCase()) return false
        // if(!validationParams.textVldn.spacingAllowed && validationText.indexOf(' ')>=0) return false
        // if(!validationParams.textVldn.specialCharacters && specialChars.test(validationText)) return false
        return true;
    }

    async numericValidation(){

    }

    async dateValidation(){

    }

    async passwordValidation(){

    }

    async rangeValidation(){

    }

    async singleValidation(){

    }

    async multipleSelectionValidation(){

    }

    
}
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