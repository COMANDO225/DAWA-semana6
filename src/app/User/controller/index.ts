import { Request, Response } from "express";
import Usuario from "../model/user.model";
import { encriptar } from "../../../utils/handleBcrypt";

export const getAllUsers = async (req: Request, res: Response) => {
	try {
		// buscar todos los usuarios
		const usuarios = await Usuario.find();
		res.status(200).json({ ok: true, data: usuarios });
	} catch (error) {
		console.log(error);
	}
};

export const getUser = (req: Request, res: Response) => {
	const { id } = req.params;
	try {
		const usuario = Usuario.findById(id);
		if (!usuario) {
			return res
				.status(404)
				.json({ ok: false, message: "Usuario no encontrado" });
		}
		res.status(200).json({ ok: true, data: usuario });
	} catch (error) {
		console.log(error);
	}
};

export const createUser = async (req: Request, res: Response) => {
	const { nombre, email, password } = req.body;
	const camposRequeridos = ["nombre", "email", "password"];
	try {
		const campoVacio = camposRequeridos.find((campo) => {
			const valor = req.body[campo];
			return !valor;
		});
		if (campoVacio) {
			return res.status(400).json({
				ok: false,
				message: `El campo ${campoVacio} es obligatorio`,
			});
		}
		const matchEmail = await Usuario.findOne({ email });
		if (matchEmail) {
			return res.status(400).json({
				ok: false,
				message: "El usuario ya existe",
			});
		}

		const contraEncriptada = await encriptar(password);
		const newUsuario = new Usuario({
			nombre,
			email,
			password: contraEncriptada,
		});
		await newUsuario.save();

		res.status(200).json({ data: "usuario creado" });
	} catch (error) {
		console.log(error);
	}
};

export const updateUser = (req: Request, res: Response) => {
	try {
		res.status(200).json({ data: "usuario actualizado" });
	} catch (error) {
		console.log(error);
	}
};

export const deleteUser = (req: Request, res: Response) => {
	try {
		res.status(200).json({ data: "usuario eliminado" });
	} catch (error) {
		console.log(error);
	}
};
