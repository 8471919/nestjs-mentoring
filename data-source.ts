import * as path from 'path';
import { DataSource } from 'typeorm';

console.log(path.join(__dirname, 'src/entities/**/*.entity.ts'));

export const dataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  database: 'study',
  username: 'root',
  password: '',
  entities: [
    path.join(__dirname, 'src/entities/**/*.entity.ts'),
    path.join(__dirname, 'dist/entities/**/*.entity.js'),
  ],
  synchronize: false,
  logging: true,
});
