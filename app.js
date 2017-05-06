// módulo 'path', da plataforma node.js com utilitários para lidar com
// caminhos de arquivos
let path = require('path');

// coisas do Express (ele mesmo, um logger e um cara pra receber
// dados de formulário)
let express = require('express');
let logger = require('morgan');
let bodyParser = require('body-parser');

// separei as rotas no arquivo 'routes/index' e 'routes/monster'
// essa é uma ótima prática para sites maiorzinhos
let indexRoutes = require('./routes/index');
let monsterRoutes = require('./routes/monster');

let app = express();

// configura as views usando ejs como templating engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// usa um pacote chamado morgan para logar todas as requisições feitas
// ao express
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static(path.join(__dirname, 'public')));

// configura as rotas, usando dois "roteadores"
app.use('/', indexRoutes);
app.use('/monster', monsterRoutes);

// requisições para URLs diferentes de "/" e "/monster" serão 404
app.use(function(req, res, next) {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler geral, que imprime a stacktrace no terminal
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    // renderiza um template chamado 'error.ejs' (dentro de '/views')
    res.render('error', {
        message: err.message,
        error: err,
        title: 'error'
    });
});



// abre (executa) o servidor
app.set('port', process.env.PORT || 3000);

let server = app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + server.address().port);
});
