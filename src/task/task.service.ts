import { Injectable } from '@nestjs/common';
import { ITask } from './task.interface';
import { TaskDTO } from './dto/task.dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class TaskService {
  tasks: ITask[] = [];
  create(TaskDTO: TaskDTO): ITask {
    const task = {
      id: uuidv4(),
      ...TaskDTO,
    };
    this.tasks = [...this.tasks, task];
    return task;
  }
}
