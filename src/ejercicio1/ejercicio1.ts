interface TaskInfo {
    /**Cantidad de tareas totales*/
    countTasks: number
    /**Cantidad de tareas completadas*/
    countCompleted: number
    /**Cantidad de tareas no completadas*/
    countUncompleted: number
    /**Título de tarea con mayor cantidad de caracteres*/
    longestTitle: string
}

/**
 Llamar al endpoint https://jsonplaceholder.typicode.com/todos para obtener un listado de tareas para hacer.
 Con la información obtenida, se debe devolver un objeto con la información de cantidad de tareas totales, la cantidad
 de tareas completadas, la cantidad de tareas no completadas y el título de la tarea que tenga la mayor cantidad de caracteres
 */
export const getTaskInfo = async (): Promise<TaskInfo> => {

     return {
         countTasks: 0,
         countCompleted: 0,
         countUncompleted: 0,
         longestTitle: ''
     }
}