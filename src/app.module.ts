import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DataSource } from "typeorm";
import { TasksModule } from "./tasks/tasks.module";

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
      synchronize: true, //use only in development mode, otherwise you will lose production data.
    }),
  ],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
