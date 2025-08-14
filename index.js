import express from 'express'

const app = express()
const PORT = 3000

let usuarios = [];
let contador = 1;

app.use(express.json())

//ROTA DE TESTE
app.get("/status", (req, res) => {
  res.json({message: "API Online"})
})

//ROTA GET listar usuarios
app.get("usuarios",(red,res)=>{
  res.json(usuarios)
})
//ROTA POST criar novo usuario 
app.post("/usuarios",(req,res) => {
  const {nome} = red.body;

  const novoUsuario = {
    id: contador++,
    nome
  };

  usuarios.push(novoUsuario);
  res.status(201).json(novoUsuario);
})

//ROTA PUT atualiza usuarios por ID
app.put("/usuarios/:id", (req,res) => {
  const usuario = usuarios.find((i) => i.id === id);

  if (!usuario) {
    return res.status(404).json({ erro: "Usuario não encontrado"});
  }

  usuario.nome = nome;
  res.json(usuario);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`)
})