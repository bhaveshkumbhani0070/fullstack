import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookModule } from './book/book.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'books',
      entities: [__dirname + '/**/*.entity{.ts,.js}'], // Use __dirname to specify the correct path
      synchronize: true,
    }),
    BookModule,
  ],
})
export class AppModule {}
