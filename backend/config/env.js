// src/config/env.js
import dotenv from 'dotenv';
import path from 'path';

const loadEnv = () => {
  dotenv.config({ path: path.resolve(process.cwd(), '.env') });
  if (!process.env.MONGO_URI || !process.env.JWT_SECRET) {
    console.error('Missing required environment variables.');
    process.exit(1);
  }
};

export default loadEnv;
