import { Schema, model } from "mongoose";

export interface User {
	nombre: string;
	email: string;
	password: string;
	avatar: string;
	role: string;
}

const userSchema = new Schema<User>(
	{
		nombre: {
			type: String,
			required: [true, "El nombre es obligatorio"],
			trim: true,
		},
		email: {
			type: String,
			required: [true, "El email es obligatorio"],
			trim: true,
			unique: true,
		},
		password: {
			type: String,
			required: [true, "La contraseña es obligatoria"],
			trim: true,
		},
		avatar: {
			type: String,
			default:
				"https://res.cloudinary.com/dro4ur0kq/image/upload/f_auto,q_auto/v1675441683/facebook/user/default_pic_zswxlq.png",
		},
		role: {
			type: String,
			default: "USER",
		},
	},
	{
		timestamps: true,
	}
);

const Usuario = model("Usuario", userSchema);

export default Usuario;
