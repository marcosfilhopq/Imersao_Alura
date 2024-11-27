import 'dotenv/config';
import { ObjectId } from "mongodb";
import conectarAoBanco from "../config/dbConfig.js";
//Conecta ao bando de dados utilizado a string de conexão 
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO_BD)

//Função assìncrona para buscar todos os posts do bando de dados
export async function getTodosPosts() {
    //Seleciona o bando de dados "imersao_instabytes"
    const db = conexao.db("imersao_instabytes");
    //Seleciona a coleção "posts" dentro do bando de dados
    const colecao = db.collection("posts");
    //Retorna um array com todos os documentos da coleção
    return colecao.find().toArray();
}

export async function criarPost(novoPost) {
    const db = conexao.db("imersao_instabytes");
    const colecao = db.collection("posts");
    return colecao.insertOne(novoPost);
}

export async function atualizarPost(id, novoPost) {
    const db = conexao.db("imersao_instabytes");
    const colecao = db.collection("posts");
    const objID = ObjectId.createFromHexString(id);
    return colecao.updateOne({_id: new ObjectId(objID)}, {$set:novoPost});
}


