const {spawn} = require('child_process');
const request = require('request');

// Start the app
const env = Object.assign({}, process.env, {PORT: 5000});


test('respond to request', (done) => {
  expect.assertions(1)
  const child = spawn('node', ['server.js'], {env});
  child.stdout.on('data', _ => {
    request('http://127.0.0.1:5000', (error, response, body) => {
      expect(body.indexOf('<?xml')).not.toBe(-1);
      done()
    })
  });
})