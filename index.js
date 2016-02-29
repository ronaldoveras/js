// index.js
var falcorExpress = require('falcor-express');
var Router = require('falcor-router');

var express = require('express');
var app = express();

var data = {
  names: [
    {name: 'a'},
    {name: 'b'},
    {name: 'c'}
  ],
  local: 'Recife'
}

app.use('/model.json', falcorExpress.dataSourceRoute(function (req, res) {
  // create a Virtual JSON resource with single key ("greeting")
  return new Router([
  
    { route: "opaquebeleza",
      get: function() {
        return {path:["opaquebeleza"], value: "Hello World 2"};
      }
    },
    { route: "local",
      get: function() {
        return {path:["local"], value: data.local};
      }
    }    
  ]);
}));

// serve static files from current directory
app.use(express.static(__dirname + '/'));

var server = app.listen(3000);
