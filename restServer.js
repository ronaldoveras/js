var restify = require('restify');

function respond(req, res, next) {
  res.send('hello ' + req.params.name);
  next();
}

var server = restify.createServer();
server.use(restify.bodyParser());
server.use(restify.queryParser());

server.get('/hello/:name', respond);
server.head('/hello/:name', respond);

server.post('/hello', function create(req, res, next) {
   console.log('body = ' + req.body);
   console.log('a = ' + req.params.a);
   console.log('b = ' + req.params.b);
   res.send(201, 'Resposta da Soma: ' + (req.params.a + req.params.b));
   return next();
 });

server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});
