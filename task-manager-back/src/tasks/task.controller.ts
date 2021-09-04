import { Controller, Get, Delete } from '@nestjs/common';
import { TaskService } from './task.service';
import { Task } from './task.entity';

@Controller('task')
export class TaskController {
  constructor(private taskService: TaskService) {}

  @Get()
  async findAll(): Promise<Task[]> {
    return this.taskService.findAll();
  }

  @Get(':id')
  async findOne(id: string): Promise<Task> {
    return this.taskService.findOne(id);
  }

  @Delete(':id')
  async remove(id: string): Promise<void> {
    await this.taskService.remove(id);
  }
}
