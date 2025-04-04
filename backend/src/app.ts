import cors from "cors";
import express from "express";
import "dotenv/config";
import { connectToDB } from "./config/mongoose";
import configurationRouter from "./routes/configuration.route";
import { getMainConfiguration } from "./controllers/configuration.controller";
import seriesRouter from "./routes/series.route";

const port = process.env.PORT || 5000;
const app = express();
console.log("CORS ORIGIN:", process.env.CLIENT_URL);

app.use(express.json());
app.use(
  cors({
    origin: process.env.CLIENT_URL,
  })
);
app.options("*", cors({ origin: process.env.CLIENT_URL }));

connectToDB();

app.use("/api/configurations", configurationRouter);
app.use("/api/series", seriesRouter);
app.get("/api/screen", getMainConfiguration);

app.listen(port, () => {
  console.log(`Listening: http://localhost:${port}`);
});
