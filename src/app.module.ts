import { Module } from "@nestjs/common";
import { TasksController } from "./tasks/tasks.controller";
import { TasksModule } from "./tasks/tasks.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TasksService } from "./tasks/tasks.service";
import { DataSource } from "typeorm";
import { TasksRepository } from "./tasks/tasks.repository";
@Module({
  imports: [
    TasksModule,
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "postgres",
      password: "postgres",
      database: "task-management",
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
  controllers: [TasksController],
  providers: [TasksService, TasksRepository],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}

