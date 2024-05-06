import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, Timestamp } from "typeorm"
import { User } from "../../user/model/User"

@Entity('address')
export class Address extends BaseEntity{

    @PrimaryGeneratedColumn()
    id!: number

    @Column({name:"user_id"})
    userId!: number

    @Column({name:"name"})
    name!: string

    @Column({name:"surname"})
    surname!: string

    @Column({name:"phone"})
    phone!: number

    @Column({name:"street"})
    street!: string

    @Column({name:"city"})
    city!: string

    @Column({name:"state"})
    state!: string

    @Column({name:"country"})
    country!: string

    @Column({name:"postal_code"})
    postalCode!: number

    @Column({name:"is_active"})
    isActive!: boolean

    @Column({name:"created_at"})
    createdAt!: Date

    @Column({name:"updated_at"})
    updatedAt!: Date

    @Column({name:"title"})
    title!: string


    @ManyToOne(() => User, (user) => user.addresses)
    @JoinColumn({ name: "user_id" }) 
    user!: User
}
