import { Injectable } from '@nestjs/common';
import { ITask } from './task.interface';
import { TaskDTO } from './dto/task.dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class TaskService {
  tasks: ITask[] = [];

  create(taskDTO: TaskDTO): ITask {
    const task = {
      id: uuidv4(),
      ...taskDTO,
    };
    this.tasks = [...this.tasks, task];
    return task;
  }

  findAll(): ITask[] {
    return this.tasks;
  }

  findOne(id: string): ITask {
    return this.tasks.find((task) => task.id === id);
  }

  update(id: string, taskDTO: TaskDTO): ITask {
    const newTask = { id, ...taskDTO };
    this.tasks = this.tasks.map((t) => (t.id === id ? newTask : t));
    return newTask;
  }

  delete(id: string) {
    this.tasks = this.tasks.filter((t) => t.id !== id);
    return 'Tarea eliminada';
  }
}
