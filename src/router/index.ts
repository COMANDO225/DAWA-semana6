import { Application, Router } from "express";
import { userRouter } from "../app";

const listRoutes: [string, Router][] = [
	["/user", userRouter],
	// ...
];

export const rutas = (app: Application) => {
	for (const [path, ruta] of listRoutes) {
		try {
			app.use(path, ruta);
		} catch (error) {
			console.error(`Error al cargar las rutas de ${path}: ${error}`);
		}
	}
};
