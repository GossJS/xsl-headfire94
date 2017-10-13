const {spawn} = require('child_process');
const request = require('request');

// Start the app
const env = Object.assign({}, process.env, {PORT: 5007});


test('respond to request', (done) => {
  expect.assertions(1)
  const child = spawn('node', ['server.js'], {env});
  child.stdout.on('data', _ => {
    request('http://127.0.0.1:5007', (error, response, body) => {
      expect(body.indexOf('<h4 id="author" title="GossJS">Иван Иванов</h4>')).not.toBe(-1);
      done();
      child.kill();
    })
  });
})
test('respond to xml request', (done) => {
  expect.assertions(1)
  const child = spawn('node', ['server.js'], {env});
  child.stdout.on('data', _ => {
    request('http://127.0.0.1:5007/xml', (error, response, body) => {
      expect(body.indexOf('<?xml')).not.toBe(-1);
      done()
      child.kill();
    })
  });
})
test('respond to author request', (done) => {
  expect.assertions(1)
  const child = spawn('node', ['server.js'], {env});
  child.stdout.on('data', _ => {
    request('http://127.0.0.1:5007/author', (error, response, body) => {
      expect(body).toBe('Егор Водопьянов');
      done()
      child.kill();
    })
  });
})