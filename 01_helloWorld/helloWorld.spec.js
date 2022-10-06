const helloWorld = require('./helloWorld'); //specify poio arxeio thelw na testarw

describe('Hello World', function() {
  test('says "Hello, World!"', function() {
    expect(helloWorld()).toEqual('Hello, World!');
  });
});
