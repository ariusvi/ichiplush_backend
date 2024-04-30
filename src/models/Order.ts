import { BaseEntity, Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm"
import { User } from "./User"
import { Budget } from "./Budget"

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
        name: "users",
        joinColumn: {
            name: "id",
            referencedColumnName: "user_id"
        },
        inverseJoinColumn: {
            name: "id",
            referencedColumnName: "budget_id"
        }
    })
    users!: User[]

    @ManyToMany(() => Budget)
    @JoinTable({
        name: "budget",
        joinColumn: {
            name: "id",
            referencedColumnName: "budget_id"
        },
        inverseJoinColumn: {
            name: "id",
            referencedColumnName: "user_id"
        }
    })
    budgets!: Budget[]
}
