const express = require("express");
const app = express();
const PORT = 3000;

// Middleware de log para todas as requisições
app.use((req, res, next) => {
    console.log(`${req.method} - ${req.url}`);
    next(); // Passa para o próximo middleware ou rota
});

// Rota para a página inicial
app.get("/", (req, res) => {
    res.json({ message: "Página inicial" });
});

// Rota para a página "sobre"
app.get("/sobre", (req, res) => {
    res.json({ message: "Página sobre" });
});

// Inicia o servidor e faz com que ele escute na porta definida
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
