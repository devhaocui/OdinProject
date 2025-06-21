const helloWorld = require('./helloWorld');

describe('Hello World', function() {
  test('says "Hello, World!"', function() {
    expect(helloWorld()).toEqual('Hello, World!');
  });
});


describe('Hello World', function() {
  test('Description of test', function() {
    expect(helloWorld()).toEqual('Hello?');
  });
});
