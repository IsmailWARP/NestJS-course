"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const tasks_controller_1 = require("./tasks/tasks.controller");
const tasks_module_1 = require("./tasks/tasks.module");
const typeorm_1 = require("@nestjs/typeorm");
const tasks_service_1 = require("./tasks/tasks.service");
const typeorm_2 = require("typeorm");
const tasks_repository_1 = require("./tasks/tasks.repository");
let AppModule = class AppModule {
    constructor(dataSource) {
        this.dataSource = dataSource;
    }
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            tasks_module_1.TasksModule,
            typeorm_1.TypeOrmModule.forRoot({
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
        controllers: [tasks_controller_1.TasksController],
        providers: [tasks_service_1.TasksService, tasks_repository_1.TasksRepository],
    }),
    __metadata("design:paramtypes", [typeorm_2.DataSource])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map