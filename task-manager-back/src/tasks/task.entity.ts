import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  dueDate: Date;

  @Column()
  asignee: string;

  @Column({ default: false })
  isFinished: boolean;

  @Column()
  comment: string;
}
