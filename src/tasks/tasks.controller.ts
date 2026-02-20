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
            return 'Tarea creada';
        }

        @Put('/tasks')
        updateTasks() {
            return 'Tarea actualizada';
        }

        @Delete('/tasks')
        deleteTasks() {
            return 'Tarea eliminada';
        }

        @Patch('/tasks')
        updateTasksStatus() {
            return 'Actualizando el estado de la tarea';
        }
    }