import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { TaskController } from './task/task.controller';
import { TaskModule } from './task/task.module';
import { TaskService } from './task/task.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import { getConnectionOptions } from 'typeorm';
import { LoggerMiddleware } from './task/logger.middleware';


@Module({
  imports: [TypeOrmModule.forRootAsync({
    useFactory: async () =>
      Object.assign(await getConnectionOptions(), {
        autoLoadEntities: true,
      }),
  }),TaskModule],




  controllers: [TaskController],
  providers: [TaskService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes({ path: 'task', method: RequestMethod.POST });
      //.forRoutes(TaskController);

      /*istisnai durumlarda kullanılır.
      .exclude(
        {path: 'task', method: RequestMethod.POST },
        {path: 'task', method: RequestMethod.POST },
        'task/'

        

        
        Tüm Controller erişimi
      ).forRoutes(TaskController);
      */
  }
}
