import conexionDB from "../config/mongo";

const mongito = async () => {
	try {
		await conexionDB();
		console.log("Conectado a la base de datos");
	} catch (error) {
		console.log(error);
		console.log("Error al conectar a la base de datos");
	}
};

export default mongito;
