import cors from "cors";
import express, { Application } from "express";
import config from "./app/config";
const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(config.port, () => {
  console.log(`Example app listening on port ${config.port}`);
});

export default app;
