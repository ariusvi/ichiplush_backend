import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, Timestamp } from "typeorm"
import { User } from "../../user/model/User"
import { Order } from "../../orders/model/Order"

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
    createdAt!: Date

    @ManyToOne(() => User, (user) => user.reviews)
    @JoinColumn({ name: 'user_id' }) 
    user!: User

    @ManyToOne(() => Order, (order) => order.reviews)
    @JoinColumn({ name: 'order_id' }) 
    order!: Order
}
