import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {

    private tasks:any = [];

    getTasks(){
        return this.tasks
    }

    postTasks(task: any) {
        console.log(task);
        this.tasks.push(task)
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