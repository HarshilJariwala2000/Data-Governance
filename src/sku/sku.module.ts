import { Module } from '@nestjs/common';
import { BusinessDataModelService } from './business.data.model.service';
import { SkuController } from './sku.controller';
import { SkuService } from './sku.service';
import { ValidationService } from './validation.service';
import { WorkflowService } from './workflow.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports:[TypeOrmModule.forFeature([],'pdm')],
    controllers:[SkuController],
    providers:[SkuService, BusinessDataModelService, ValidationService, WorkflowService],
    
})
export class SkuModule {}
