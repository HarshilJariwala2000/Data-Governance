import { Body, Controller, Get, Post } from '@nestjs/common';
import { BusinessDataModelService } from './business.data.model.service';
import { SkuService } from './sku.service';

@Controller('sku')
export class SkuController {
    constructor(private readonly skuService:SkuService,
        private readonly businessDataModel:BusinessDataModelService){}

    @Get('getFields')
    async x(@Body() body):Promise<any>{
        return this.skuService.getFields(body)
    }

    @Post('saveAsDraft')
    async saveAsDraft(@Body() body:any):Promise<any>{
        return this.skuService.saveNewProduct(1, body)
    }
}
