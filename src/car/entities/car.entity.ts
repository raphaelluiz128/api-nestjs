/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Car {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 30 })
    name: string;

    @Column({ length: 15 })
    model: string;

    @Column()
    status: boolean;
}