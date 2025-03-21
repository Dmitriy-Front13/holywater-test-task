import cors from "cors";
import express from "express";
import 'dotenv/config';
import { connectToDB } from "./config/mongoose";
import configurationRouter from "./routes/configuration.route";
import { getMainConfiguration } from "./controllers/configuration.controller";

const port = process.env.PORT || 5000;

const app = express();

app.use(cors({
  origin: process.env.CLIENT_URL
}));
app.use(express.json());
connectToDB();

app.use("/api/configurations", configurationRouter);
app.get("/api/screen", getMainConfiguration);

app.listen(port, () => {
  console.log(`Listening: http://localhost:${port}`);
});