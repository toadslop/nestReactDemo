import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './task.entity';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private taskRepository: Repository<Task>,
  ) {}

  findAll(): Promise<Task[]> {
    return this.taskRepository.find();
  }

  findOne(id: Task['id']): Promise<Task> {
    return this.taskRepository.findOne(id);
  }

  async upsert(newTask: Task): Promise<Task> {
    return this.taskRepository.save(newTask);
  }

  async remove(id: Task['id']): Promise<void> {
    await this.taskRepository.delete(id);
  }
}
