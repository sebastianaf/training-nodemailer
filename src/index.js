import express from "express";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";
import route from "./routes";
import { errorHandler, logErrors } from "./middlewares/error.handler";
import dotenv from "dotenv"

let app = express();
dotenv.config();

/***
 * Middlewares
 */

app.use(
  cors({
    origin: (origin, callback) => {
      if (`localhost:5000` || !origin) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed"));
      }
    },
  })
);
app.use(express.json());
app.use(helmet());
app.use(
  morgan(
    ":date[iso] :user-agent :remote-addr :method :url :status :res[content-length] - :response-time ms"
  )
);

route(app);

app.use(logErrors);
app.use(errorHandler);

app.listen(process.env.API_PORT, () => {
  console.log(`Running on port ${process.env.API_PORT}`);
});
