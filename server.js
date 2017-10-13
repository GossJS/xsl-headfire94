const express = require('express');
const app = express();
const path = __dirname + '/public/';
app.set('port', (process.env.PORT || 5007));

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET,POST,DELETE',
  'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers'
};

app.use(express.static(__dirname + '/public'));
app.use((req, res, next) => res.set(CORS) && next());

app.get('/', function(request, response) {
  response.sendFile(`${path}index.html`);
});
app.get('/xml', function(request, response) {
  response.sendFile(`${path}Task.xml`);
});
app.get('/author', function(request, response) {
  response.send('Егор Водопьянов');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
