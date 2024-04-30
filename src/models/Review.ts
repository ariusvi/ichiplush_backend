import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn, Timestamp } from "typeorm"
import { User } from "./User"
import { Order } from "./Order"

@Entity('reviews')
export class Review extends BaseEntity{

    @PrimaryGeneratedColumn()
    id!: number
    
    @Column ({name: "user_id"})
    userId!: number

    @Column ({name: "order_id"})
    orderId!: number

    @Column ({name: "text"})
    text!: string

    @Column ({name: "rating"})
    rating!: number

    @Column ({name: "created_at"})
    createdAt!: Timestamp

    @ManyToOne(() => User, (user) => user.reviews)
    user!: User

    @ManyToOne(() => Order, (order) => order.reviews)
    order!: Order
}
