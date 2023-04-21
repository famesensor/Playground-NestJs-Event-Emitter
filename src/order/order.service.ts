import { Injectable } from '@nestjs/common'
import { EventEmitter2 } from '@nestjs/event-emitter'
import { EVENT_NAMES } from 'src/constants/event'
import { ReturnResponse } from 'src/interface/common'
import { CreateOrderEvent } from 'src/order/dto/event'
import { CreateOrderDTO } from 'src/order/dto/order'
import { Order } from 'src/order/interface/order'

const { ORDER_CREATED } = EVENT_NAMES

@Injectable()
export class OrderService {
    constructor(private eventEmitter: EventEmitter2) {}

    private Orders: Order[] = []

    async createOrder({
        productName,
        productDesc,
        price,
    }: CreateOrderDTO): Promise<ReturnResponse> {
        const order: Order = { price, productDesc, productName }

        this.Orders.push(order)

        console.log('orders ->', this.Orders)

        const bodyEvent = new CreateOrderEvent()
        bodyEvent.productName = productName
        bodyEvent.productDesc = productDesc
        bodyEvent.price = price

        this.eventEmitter.emit(ORDER_CREATED, bodyEvent)
        return { status: true, message: 'order created!' }
    }
}
