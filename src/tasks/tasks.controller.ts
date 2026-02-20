import { Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller({})


    export class TaskController {

        constructor(private tasksService: TasksService) {}

        @Get('/tasks')
        getAllTasks() {
            return this.tasksService.getTasks();
        }

        @Post('/tasks')
        createTasks() {
            return this.tasksService.postTasks();
        }

        @Put('/tasks')
        updateTasks() {
            return this.tasksService.putTasks();
        }

        @Delete('/tasks')
        deleteTasks() {
            return this.tasksService.deleteTasks();
        }

        @Patch('/tasks')
        updateTasksStatus() {
            return this.tasksService.patchTasks();
        }
    }