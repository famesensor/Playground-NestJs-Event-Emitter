import { Injectable } from '@nestjs/common'
import { CreateOrderEvent } from 'src/order/dto/event'

@Injectable()
export class NotificationService {
    orderCreatedEvent(body: CreateOrderEvent) {
        console.log('body ->', body)
        console.log('send email order created!')
    }
}
