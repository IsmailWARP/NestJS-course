import { TaskStatus } from "./task-status.enum";
import { CreateTaskDto } from "./dto/create-task.dto";
import { GetTasksFilterDto } from "./dto/get-tasks-filter.dto";
import { TasksRepository } from "./tasks.repository";
import { Task } from "./task.entity";
export declare class TasksService {
    private tasksRepository;
    constructor(tasksRepository: TasksRepository);
    getTaskById(id: string): Promise<Task>;
    getTasks(filterDto: GetTasksFilterDto): Promise<Task[]>;
    createTask(createTaskDto: CreateTaskDto): Promise<Task>;
    updateTaskStatus(id: string, status: TaskStatus): Promise<Task>;
    deleteTask(id: string): Promise<void>;
}
