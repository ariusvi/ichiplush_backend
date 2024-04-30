import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { User } from "./User"

@Entity('roles')
export class Role extends BaseEntity{

    @PrimaryGeneratedColumn()
    id!: number

    @Column({name:"name"})
    name!: string

    @Column({name:"description"})
    description!: string

    @Column({name:"created_at"})
    createdAt!: Date

    @Column({name:"updated_at"})
    updatedAt!: Date

    @OneToMany(() => User, (user) => user.role)
    users!: User[]
}
