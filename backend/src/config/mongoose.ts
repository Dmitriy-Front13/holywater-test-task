import { connect } from 'mongoose';
import dotenv from 'dotenv';


export const connectToDB = async () => {
  dotenv.config();
  try {
    const db = await connect(process.env.MONGO_DB_URI);
    console.log('MongoDB connected to', db.connection.name);
  } catch (error) {
    console.error(error);
  }
};