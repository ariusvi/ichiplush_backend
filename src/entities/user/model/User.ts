import { BaseEntity, Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, Timestamp } from "typeorm"
import { Role } from "../../role/model/Role"
import { Address } from "../../address/model/Address"
import { Order } from "../../orders/model/Order"
import { Review } from "../../review/model/Review"

@Entity('users')
export class User extends BaseEntity{

    @PrimaryGeneratedColumn()
    id!: number

    @Column({name:"user_name"})
    userName!: string

    @Column({name:"role_id"})
    roleId!: number

    @Column({name:"password"})
    password!: string

    @Column({name:"email"})
    email!: string
    
    @Column({name:"is_active"})
    isActive!: boolean

    @Column({name:"created_at"})
    createdAt!: Date

    @Column({name:"updated_at"})
    updatedAt!: Date


    @ManyToOne(() => Role, (role) => role.users)
    @JoinColumn({name:"role_id"})
    role!: Role

    @OneToMany(() => Address, (address) => address.user)
    addresses!: Address[]

    @ManyToMany(() => Order)
    orders!: Order[]

    @OneToMany(()=> Review, (review) => review.user)
    reviews!: Review[]
}
