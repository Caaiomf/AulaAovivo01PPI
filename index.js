import express from 'express';

const host = '0.0.0.0';
const porta = 3000;

const server = express(); //oferencendo ao desenvolvedor um servidor http expresso

server.listen(porta,host, () =>{
    console.log(`servidor escutando em http:// ${host}:${porta}`);
});