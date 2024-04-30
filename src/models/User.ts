import { BaseEntity, Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, Timestamp } from "typeorm"
import { Role } from "./Role"
import { Address } from "./Address"
import { Order } from "./Order"

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
    createdAt!: Timestamp

    @Column({name:"updated_at"})
    updatedAt!: Timestamp


    @ManyToOne(() => Role, (role) => role.users)
    @JoinColumn({name:"role_id"})
    role!: Role

    @OneToMany(() => Address, (address) => address.user)
    addresses!: Address[]

    @ManyToMany(() => Order)
    orders!: Order[]
}
