import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { EventEmitterModule } from '@nestjs/event-emitter'
import { AppController } from 'src/app.controller'
import { NotificationModule } from './notification/notification.module'
import { OrderModule } from './order/order.module'

@Module({
    imports: [
        ConfigModule.forRoot(),
        EventEmitterModule.forRoot(),
        OrderModule,
        NotificationModule,
    ],
    controllers: [AppController],
})
export class AppModule {}
