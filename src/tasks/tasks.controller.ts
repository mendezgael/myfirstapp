import { Query, Body, Controller, Delete, Get, Patch, Post, Put, Param } from '@nestjs/common';
import { TasksService } from './tasks.service';
import type { CreateTaskDto } from './dto/create-task.dto';
import type { UpdateTaskDto } from './dto/update-task.dto';

@Controller('/tasks')


    export class TaskController {

        constructor(private tasksService: TasksService) {}

        @Get()
        getAllTasks(@Query() query:any) {
            console.log(query);
            return this.tasksService.getTasks();
        }

        @Get('/:id')
        getTasks(@Param('id') id: string) {
            return this.tasksService.getTask(parseInt(id));
        }

        @Post()
        createTasks(@Body() task: CreateTaskDto) {
            return this.tasksService.postTasks(task);
        }

        @Put()
        updateTasks(@Body() task: UpdateTaskDto) {
            return this.tasksService.putTasks(task);
        }

        @Delete()
        deleteTasks() {
            return this.tasksService.deleteTasks();
        }

        @Patch()
        updateTasksStatus() {
            return this.tasksService.patchTasks();
        }
    }