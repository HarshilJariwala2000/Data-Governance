import { TypeOrmModuleOptions } from '@nestjs/typeorm'
import * as dotenv from 'dotenv'
dotenv.config()

export const pdmDatabaseConfig: TypeOrmModuleOptions = {
    type:  "postgres",
    username: process.env.USERNAME1,
    password: process.env.PASSWORD1,
    port: parseInt(process.env.PORT1),
    host: process.env.HOST1,
    database: process.env.DB1,
    synchronize: true,
    //entities:[ TenantCategory, SubscribedMarketplaces, TenantHierarchyLevel, TenantToCoreMapping, CoreToMarketplaceMapping, TenantToMarketplaceMapping],
}