import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
  Req,
} from '@nestjs/common';
import { Request } from 'express';
import { TaskDTO } from './dto/task.dto';
import { TaskService } from './task.service';

@Controller('api/v1/task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  create(@Body() TaskDTO: TaskDTO) {
    return this.taskService.create(TaskDTO);
  }
  //   @Post()
  //   method(@Body() body: any) {
  //     return body;
  //   }
  //   @Post()
  //   method(@Query() query: any) {
  //     return { query };
  //   }
  //   @Post()
  //   method(
  //     @Query('id') id: number,
  //     @Query('description') description: string,
  //     @Query('isdone') isdone: boolean,
  //   ) {
  //     return { id, description, isdone };
  //   }
  //   @Post(':id/description/:description/isdone/:isdone')
  //   method(
  //     @Param('id') id: number,
  //     @Param('description') description: string,
  //     @Param('isdone') isdone: boolean,
  //   ) {
  //     return { id, description, isdone };
  //   }
  //   @Post(':id')
  //   method(@Param('id') id: string) {
  //     return `id ${id}`;
  //   }
  //   @Post()
  //   method(@Req() req: Request) {
  //     return `method ${req.method}`;
  //   }
  //   @Get()
  //   method(@Req() req: Request) {
  //     return `method ${req.method}`;
  //   }
  //   @Put()
  //   method(@Req() req: Request) {
  //     return `method ${req.method}`;
  //   }
  //   @Patch()
  //   method(@Req() req: Request) {
  //     return `method ${req.method}`;
  //   }
  //   @Delete()
  //   method(@Req() req: Request) {
  //     return `method ${req.method}`;
  //   }
}
