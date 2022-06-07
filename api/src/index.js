import "dotenv/config"

import heroicontroller from './controller/heroicontroller.js'
import express from "express"
import cors from 'cors'

const server = express();
server.user(cors());
server.user(express.json());

server.user (heroicontroller);
server.listen(process.env.PORT,()=>
console.log(`api online na porta ${process.env.PORT}`)); 