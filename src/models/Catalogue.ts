import { Column, Entity, PrimaryColumn } from "typeorm"

@Entity('catalogue')
export class Catalogue {

    @PrimaryColumn()
    id!: number

    @Column({name:"title"})
    title!: string

    @Column({name:"description"})
    description!: string

    @Column({name:"image"})
    image!: string

}
