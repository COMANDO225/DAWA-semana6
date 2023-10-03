import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import mongito from "./database";
import { rutas } from "./router";

export const app = express();
mongito();
dotenv.config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

rutas(app);
