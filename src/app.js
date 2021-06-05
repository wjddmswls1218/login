import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import dotenv from "dotenv";
dotenv.config();
import bodyParser from "body-parser";

const app = express();
const PORT = process.env.PORT;

app.set("view engine", "pug");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(helmet());
app.use(morgan(`dev`));

app.listen(PORT, () => {
  console.log(`${PORT} Server start`);
});
