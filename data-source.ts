import * as path from 'path';
import { DataSource } from 'typeorm';

export const dataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  database: 'study',
  username: 'root',
  password: '',
  entities: [
    path.join(__dirname, 'src/entities/**/*.entity.{js, ts}'),
    path.join(__dirname, 'dist/entities/**/*.entity.{js, ts}'),
  ],
  synchronize: false,
  logging: true,
});
