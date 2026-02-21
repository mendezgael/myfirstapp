import { Injectable, NotFoundException } from '@nestjs/common';
import { NotFoundError } from 'rxjs';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TasksService {

    private tasks:any = [];

    getTasks(){
        return this.tasks
    }

    getTask(id: number){
        const taskFound = this.tasks.find(task => task.id === id);
        if (!taskFound) {
            throw new NotFoundException (`Task with id ${id} not found`);
        }
        return taskFound;
    }

    postTasks(task: CreateTaskDto) {
        console.log(task);
        this.tasks.push({
            ...task,
            id: this.tasks.length + 1
        })
        return task
    }

    putTasks(task: UpdateTaskDto){
        console.log(task);
        return 'Tarea actualizada';
    }

    deleteTasks(){
        return 'Tarea eliminada';
    }

    patchTasks(){
        return 'Actualizando el estado de la tarea';
    }
    
}