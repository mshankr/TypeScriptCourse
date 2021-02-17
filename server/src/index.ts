import bodyParser from "body-parser";
import express, { Request, Response } from "express";
import { router } from "./routes/loginRoutes";
import cookieSession from "cookie-session";

const app = express();

app.use(cookieSession({ keys: ["sdzfklasj"] }));
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(router);
app.listen(3000, () => console.log("listening on port 3000"));
