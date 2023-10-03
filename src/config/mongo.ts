import "dotenv/config";
import { connect } from "mongoose";

const DB_URL = <string>process.env.DB_URL;

const conexionDB = async () => {
	await connect(DB_URL);
};

export default conexionDB;
