import { Injectable } from '@nestjs/common'
import { EventEmitter2 } from '@nestjs/event-emitter'

@Injectable()
export class OrderService {
    constructor(private eventEmitter: EventEmitter2) {}
}
