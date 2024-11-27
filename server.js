import express from "express";
import routes from "./src/routes/postsRoutes.js";


const posts = [
    {
        id: 1,
        descrição:"Descrição teste",
        imagem:"https://placecats.com/millie/300/150",
    },
    {   
        id: 2,
        descrição: "Segundo post sobre gatos fofos",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: 3,
        descrição: "Um post sobre paisagens",
        imagem: "https://placecats.com/millie/300/150"
    }
];

const app = express();
app.use(express.static("uploads"))
routes(app)


app.listen(3000, () => {
    console.log("Servido escutando...")
});

// Função assíncrona para obter todos os posts do banco de dados


// function buscarPostsPorID(id) {
//     return posts.findIndex((post) => {
//         return post.id === Number(id)
//     })
    
// }

// app.get("/posts/:id", (req,res) => {
//     const index = buscarPostsPorID(req.params.id)
//     res.status(200).json(posts[index]);
// });

// So pra ver se ta funcionando mesmo!!!!!