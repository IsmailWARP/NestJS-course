import { DataSource, Repository } from "typeorm";
import { Task } from "./task.entity";
export declare class TasksRepository extends Repository<Task> {
    private dataSource;
    constructor(dataSource: DataSource);
}
