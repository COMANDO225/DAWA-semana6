import bcrypt from "bcrypt";

const numeroDeRondas = 10;

// encriptar contraseña
export const encriptar = async (password: string): Promise<string> => {
	const salt = await bcrypt.genSalt(numeroDeRondas);
	return await bcrypt.hash(password, salt);
};

// comparar contraseña
export const comparar = async (
	password: string,
	passwordEncriptada: string
): Promise<boolean> => {
	return await bcrypt.compare(password, passwordEncriptada);
};
