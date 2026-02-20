import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
    getTasks(){
        return ['task1', 'task2', 'task3'];
    }

    postTasks(){
        return 'Tarea creada';
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