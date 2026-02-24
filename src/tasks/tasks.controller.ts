import { Query, Body, Controller, Delete, Get, Patch, Post, Put, Param } from '@nestjs/common';
import { TasksService } from './tasks.service';
import type { CreateTaskDto } from './dto/create-task.dto';
import type { UpdateTaskDto } from './dto/update-task.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('/tasks')
@ApiTags('tasks')


    export class TaskController {

        constructor(private tasksService: TasksService) {}

        @Get()
        @ApiOperation({ summary: 'Get all tasks' })
        @ApiResponse({ status: 200, description: 'Return all tasks.' })
        @ApiResponse({ status: 403, description: 'Forbidden.' })
        getAllTasks(@Query() query:any) {
            console.log(query);
            return this.tasksService.getTasks();
        }

        @Get('/:id')
        @ApiOperation({ summary: 'Get a task by ID' })
        getTasks(@Param('id') id: string) {
            return this.tasksService.getTask(parseInt(id));
        }

        @Post()
        @ApiOperation({ summary: 'Create a new task' })
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