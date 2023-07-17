import dotenv from 'dotenv';

dotenv.config();
export const {
  PORT = 3000,
  DB_URI = 'mongodb://127.0.0.1:27017/mestodb',
  SECRET_KEY = 'some-secret-key',
} = process.env;
