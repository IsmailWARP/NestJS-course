import { CreateTaskDto } from "./dto/create-task.dto";
import { TasksRepository } from "./tasks.repository";
import { Task } from "./task.entity";
export declare class TasksService {
    private tasksRepository;
    constructor(tasksRepository: TasksRepository);
    getTaskById(id: string): Promise<Task>;
    createTask(createTaskDto: CreateTaskDto): Promise<Task>;
}
