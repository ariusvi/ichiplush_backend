import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm"

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

}
