import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, Timestamp } from "typeorm"
import { Role } from "./Role"

@Entity('users')
export class User {

    @PrimaryGeneratedColumn()
    id!: number

    @Column({name:"user_name"})
    userName!: string

    @Column({name:"role"})
    role!: number

    @Column({name:"password"})
    password!: string

    @Column({name:"email"})
    email!: string

    @Column({name:"created_at"})
    createdAt!: Timestamp

    @ManyToOne(() => Role, (role) => role.users)
    @JoinColumn({name:"role"})
    role!: Role

}
