import { BaseEntity, Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { User } from "../../user/model/User"
import { Budget } from "../../budget/model/Budget"
import { Review } from "../../review/model/Review"

@Entity('orders')
export class Order extends BaseEntity {

    @PrimaryGeneratedColumn()
    id!: number

    @Column({name:"user_id"})
    userId!: number

    @Column({name:"budget_id"})
    budgetId!: number

    @Column({name:"status"})
    status!: string

    @ManyToMany(() => User)
    @JoinTable({
        name: "users_orders",
        joinColumn: {
            name: "order_id",
            referencedColumnName: "id"
        },
        inverseJoinColumn: {
            name: "user_id",
            referencedColumnName: "id"
        }
    })
    users!: User[]

    @ManyToMany(() => Budget, budget => budget.orders)
    @JoinTable({
        name: "budget_orders",
        joinColumn: {
            name: "order_id",
            referencedColumnName: "id"
        },
        inverseJoinColumn: {
            name: "budget_id",
            referencedColumnName: "id"
        }
    })
    budgets!: Budget[]

    @OneToMany(() => Review, (review) => review.order)
    reviews!: Review[]

}
