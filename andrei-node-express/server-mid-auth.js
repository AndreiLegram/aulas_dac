const express = require("express");
const app = express();
const PORT = 3000;

// Middleware para verificar autenticação
const checkAuth = (req, res, next) => {
    const autenticado = true; // Altere para `false` para simular um usuário não
    autenticado
    if (autenticado) {
        next(); // Usuário autenticado, continua para o próximo middleware ou rota
    } else {
        res.status(401).json({ message: "Acesso negado" }); // Usuário não autenticado, responde com erro 401 em JSON
    }
};

// Rota com middleware específico
app.get("/dashboard", checkAuth, (req, res) => {
    res.json({ message: "Bem-vindo ao painel" }); // Responde com JSON
});

// Inicia o servidor e faz com que ele escute na porta definida
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
