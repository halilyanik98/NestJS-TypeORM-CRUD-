import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  age:number;

  @Column()
  mail:string;

  @Column()
  password:string;

  @Column({ default: true })
  newTask: string;
}