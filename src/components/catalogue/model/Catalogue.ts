import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, Timestamp } from "typeorm"

@Entity('examples')
export class Catalogue extends BaseEntity {

    @PrimaryGeneratedColumn()
    id!: number

    @Column({name:"title"})
    title!: string

    @Column({name:"description"})
    description!: string

    @Column({name:"image"})
    image!: string

    @Column({name:"created_at"})
    createdAt!: Date

    @Column({name:"updated_at"})
    updatedAt!: Date


}
