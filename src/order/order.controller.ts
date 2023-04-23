import { Body, Controller, Post } from '@nestjs/common'
import { ReturnResponse } from 'src/interface/common'
import { CreateOrderDTO } from 'src/order/dto/order'
import { OrderService } from './order.service'

@Controller('orders')
export class OrderController {
    constructor(private readonly orderService: OrderService) {}

    @Post()
    createOrder(@Body() body: CreateOrderDTO): Promise<ReturnResponse> {
        return this.orderService.createOrder(body)
    }
}
