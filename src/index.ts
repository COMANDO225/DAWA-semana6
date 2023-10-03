import { app } from "./main";

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
	res.send("Ganas de un chaufita");
});

app.listen(PORT, () => {
	console.log(`Lab corriendo en el http://localhost:${PORT} masnaa!`);
});
