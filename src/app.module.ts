import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SkuController } from './sku/sku.controller';
import { SkuService } from './sku/sku.service';
import { SkuModule } from './sku/sku.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { pdmDatabaseConfig } from './orm.config';


@Module({
  imports: [SkuModule,
  TypeOrmModule.forRoot({...pdmDatabaseConfig,name:'pdm'})],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
