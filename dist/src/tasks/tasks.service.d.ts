import { CreateTaskDto } from "./dto/create-task.dto";
import { GetTasksFilterDto } from "./dto/get-tasks-filter.dto";
import { TasksRepository } from "./tasks.repository";
import { Task } from "./task.entity";
export declare class TasksService {
    private tasksRepository;
    constructor(tasksRepository: TasksRepository);
    getTasks(filterDto: GetTasksFilterDto): Promise<Task[]>;
    getTaskById(id: string): Promise<Task>;
    createTask(createTaskDto: CreateTaskDto): Promise<Task>;
}
