import { Query, Body, Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('/tasks')


    export class TaskController {

        constructor(private tasksService: TasksService) {}

        @Get()
        getAllTasks(@Query() query:any) {
            console.log(query);
            return this.tasksService.getTasks();
        }

        @Post()
        createTasks(@Body() task: any) {
            return this.tasksService.postTasks(task);
        }

        @Put()
        updateTasks() {
            return this.tasksService.putTasks();
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