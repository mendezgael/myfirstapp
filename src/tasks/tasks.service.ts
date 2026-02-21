import { Injectable, NotFoundException } from '@nestjs/common';
import { NotFoundError } from 'rxjs';

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

    postTasks(task: any) {
        console.log(task);
        this.tasks.push({
            ...task,
            id: this.tasks.length + 1
        })
        return task
    }

    putTasks(){
        return 'Tarea actualizada';
    }

    deleteTasks(){
        return 'Tarea eliminada';
    }

    patchTasks(){
        return 'Actualizando el estado de la tarea';
    }
    
}