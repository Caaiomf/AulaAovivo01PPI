import express from 'express';

const host = '0.0.0.0';
const porta = 3000;

const server = express();

// Rota principal
server.get('/', (requisicao, resposta) => {
  resposta.send(`
    <!DOCTYPE html>
    <html lang="pt-br">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Primeiro Programa para a internet usando Node + Express</title>
    </head>
    <body>
      <h2>Nova Aplicação</h2>
      <p><a href="/horaAtual">Ver hora atual</a></p>
    </body>
    </html>
  `);
});

// Rota de hora atual
server.get('/horaAtual', (requisicao, resposta) => {
  const horaAtual = new Date();
  const hora = `${horaAtual.getHours()}:${horaAtual.getMinutes()}:${horaAtual.getSeconds()}`;

  resposta.send(`
    <!DOCTYPE html>
    <html lang="pt-br">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Horário do Servidor</title>
    </head>
    <body>
      <h1>Agora são ${hora}</h1>
      <p><a href="/">Voltar</a></p>
    </body>
    </html>
  `);
});

// Iniciar servidor
server.listen(porta, host, () => {
  console.log(`Servidor escutando em http://${host}:${porta}`);
});
