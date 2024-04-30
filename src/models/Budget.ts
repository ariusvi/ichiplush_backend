import { BaseEntity, Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn, Timestamp } from "typeorm"
import { Order } from "./Order"


@Entity('budget')
export class Budget extends BaseEntity {

    @PrimaryGeneratedColumn()
    id!: number

    @Column({name:"reference"})
    reference!: string

    @Column({name:"email"})
    email!: string

    @Column({name:"quantity"})
    quantity!: number

    @Column({name:"base_body"})
    baseBody!: number

    @Column({name:"without_face"})
    withoutFace!: boolean

    @Column({name:"animal_ears"})
    animalEars!: boolean

    @Column({name:"wings"})
    wings!: boolean

    @Column({name:"total_price"})
    totalPrice!: number

    @Column({name: "is_active"})
    isActive!: boolean

    @Column({name: "created_at"})
    createdAt!: Timestamp

    @Column({name: "updated_at"})
    updatedAt!: Timestamp

    @ManyToMany(() => Order)
    orders!: Order[]


}
