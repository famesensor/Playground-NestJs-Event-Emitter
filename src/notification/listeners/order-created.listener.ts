import { Injectable } from '@nestjs/common'
import { OnEvent } from '@nestjs/event-emitter'
import { EVENT_NAMES } from 'src/constants/event'
import { NotificationService } from 'src/notification/notification.service'
import { CreateOrderEvent } from 'src/order/dto/event'

const { ORDER_CREATED } = EVENT_NAMES

@Injectable()
export class OrderCreatedListener {
    constructor(private notificationService: NotificationService) {}

    @OnEvent(ORDER_CREATED)
    listenerOrderCreatedEvent(body: CreateOrderEvent) {
        this.notificationService.orderCreatedEvent(body)
    }
}
