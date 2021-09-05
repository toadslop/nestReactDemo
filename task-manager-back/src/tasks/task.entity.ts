import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Task {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  dueDate: Date;

  @Column()
  title: string;

  @Column()
  assignee: string;

  @Column({ default: false })
  isFinished: boolean;

  @Column()
  comment: string;
}
