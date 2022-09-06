import path from 'path';
require('dotenv').config({ path: path.join(__dirname, '../../.env') });

const customConfig: {
  port: number;
  dbUri: string;
} = {
  port: 8000,
  dbUri: process.env.DATABASE_URL as string,
};

export default customConfig;
