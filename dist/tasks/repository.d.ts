import { DataSource } from "typeorm";
import { Task } from "./task.entity";
export declare class Repositories {
    private dataSource;
    constructor(dataSource: DataSource);
    get tasksRepository(): import("typeorm").Repository<Task> & {
        getAllTasks(): any;
    };
}
