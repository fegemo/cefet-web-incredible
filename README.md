# cefet-web-incredible

Página para dar de comida àquele que é incrível, verde, come pedras e que mora
debaixo da terrra.

## Breve descrição

Este sitezinho do monstro verde foi feito usando Node.js e Express. Para
executá-lo localmente, você deve:

1. Clonar ou baixar o repositório em
   http://github.com/fegemo/cefet-web-incredible
1. Na pasta do repositório, instalar as dependências definidas no
   `package.json`:
   ```bash
   npm install
   ```
1. Para executar, é possível fazer de duas formas:
   ```bash
   node app.js
   # ou então node app (sem o .js)
   ```
   ...ou...
   ```bash
   npm start
   # repare que o package.json possui uma propriedade start, que contém os
   # comandos para executar este pacote (projeto) Node.js
   ```

Nesta aplicação Express.js (veja o `app.js` na raiz), há duas rotas:

- `/monster`, que mostra a [página do monstro][monstro]
  - Este conjunto de rotas está descrito em `routes/monster.js`
- `/`, que mostra a [_view_ `index.ejs`][inicial] (apenas para ter uma
    página inicial)
  - Este conjunto de rotas (na verdade, apenas 1) está descrito em
    `routes/index.js`


A pasta `public` contém todos os arquivos estáticos (css, js do _front-end_,
imagens).

[monstro]: http://terrivel.herokuapp.com/monster
[inicial]: http://terrivel.herokuapp.com/
