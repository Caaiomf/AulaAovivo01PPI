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
    </body>
    </html>
  `);
});

//criar um metodo que aceita parametro
server.get('/tabuada', (requisicao, resposta) =>{
    //tabuada de qual numero e até qual sequencia? 
    const numero = requisicao.query.numero;
    const sequencia = requisicao.query.sequencia;
    if(!numero || !sequencia) {
        resposta.send(`<!DOCTYPE html>
                    <html lang="pt-br">
                <head>
                    <meta charset="UTF-8">
                    <meta http-equiv="X-UA-Compatible" content="ie=edge">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>tabuada</title>
                </head>
                <body>
                    <h1>Tabuada</h1>
                    <h2>Por favor, Informe o número e a sequencia na URL</h2>
                    <h3>Exemplo: http://localhost:3000/tabuada?numero=5&sequencia=10</h3>
                    <p><a href="/">Voltar</a></p>
                </body>
                </html>
            `);
    } else{
        resposta.write(`<!DOCTYPE html>
                    <html lang="pt-br">
                <head>
                    <meta charset="UTF-8">
                    <meta http-equiv="X-UA-Compatible" content="ie=edge">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>tabuada</title>
                </head>
                <body>
                    <h1>Tabuada do ${numero} até a sequencia ${sequencia}</h1>
                    <ul>
            `);
            for( let i=0; i<=sequencia ;i++){
                resposta.write(`<li>${i} x ${numero} = ${i*numero}</li>`);
            }

            resposta.write(`
                    </ul>
                </body>
                </html>
                `);
        resposta.end(); // finaliza e envia
    }

    console.log("requisição tabuada");

});

// Iniciar servidor
server.listen(porta, host, () => {
  console.log(`Servidor escutando em http://${host}:${porta}`);
});
