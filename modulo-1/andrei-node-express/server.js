const express = require("express");
const app = express();
const PORT = 3000;

// Rota GET para listar todos os produtos
app.get("/produtos", (req, res) => {
    res.json({ message: "Listando todos os produtos", produtos: [] }); // Exemplo com um array vazio de produtos
});

// Rota POST para criar um novo produto
app.post("/produtos", (req, res) => {
    res.json({
        message: "Criando um novo produto",
        produto: { id: Date.now(), nome: "Produto Exemplo" },
    });
});

// Rota PUT para atualizar um produto por ID
app.put("/produtos/:id", (req, res) => {
    const { id } = req.params;
    res.json({
        message: "Atualizando o produto",
        produto: { id: id, nome: "Produto Atualizado" },
    });
});

// Rota DELETE para excluir um produto por ID
app.delete("/produtos/:id", (req, res) => {
    const { id } = req.params;
    res.json({ message: "Excluindo o produto", produtoId: id });
});

// Inicia o servidor e faz com que ele escute na porta definida
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
