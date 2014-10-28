var express = require('express');
var router = express.Router();
var _ = require('underscore');
var url = require('url');

var handleFeedingFactory = function(method) {
  return function(req, res) {
    var info = {};

    info.metodo = method;
    switch (method) {
      case 'GET':
        info.cru = url.parse(req.url).query;
        info.dados = req.query;
        break;
      case 'POST':
        info.cru = _.map(req.body, function(value, key) {
          return key + '=' + value;
        }).join('&');
        info.dados = req.body;
        break;
    }
    info.lista = _.map(info.dados, function(value, key, list) {
      return { nome: key, valor: value };
    });

    res.render('monster', info);
  };
};

var getFeeding = handleFeedingFactory('GET'),
    postFeeding = handleFeedingFactory('POST');

router.get('/', getFeeding);
router.post('/', postFeeding);

module.exports = router;
