import cors from "cors";
import express, { json } from "express";
import "express-async-errors";
import helmet from "helmet";
import { globalErrors } from "./errors";
import { apiRouter } from "./routes";

// INSTANCIA EXPRESS
const app = express();

app.use(helmet());
app.use(cors());
app.use(json());

// ROTAS PÚBLICAS
app.use("", apiRouter);

// ERROS
app.use(globalErrors);

export default app;
