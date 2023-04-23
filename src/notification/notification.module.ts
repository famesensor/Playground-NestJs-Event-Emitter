import { Module } from '@nestjs/common'
import { OrderCreatedListener } from 'src/notification/listeners/order-created.listener'
import { NotificationService } from './notification.service'

@Module({
    controllers: [],
    providers: [NotificationService, OrderCreatedListener],
})
export class NotificationModule {}
