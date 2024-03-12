const Kensa = require('../dist/src/index').default;
const {
  testFunction,
  asyncTestFunction,
  errorTestFunction,
} = require('./example.js');

const ks = Kensa('.ks.js test');

ks.test({
  title: '1,Simple Value Test',
  input: testFunction(1, 1),
  expect: 2,
});

ks.test({
  title: '2,Synchronous Test Example',
  input: () => {
    return testFunction(2, 2);
  },
  expect: 4,
});

ks.test({
  title: '3,Asynchronous Test Example',
  input: asyncTestFunction,
  expect: 'async result',
});

ks.test({
  title: '4,Error Expectation Test',
  input: errorTestFunction,
  expect: new Error('Test error'),
});

ks.test({
  title: '5,Asynchronous Test',
  input: asyncTestFunction,
  expect: 'async result',
});

ks.test({
  title: '6,Synchronous Test',
  input: () => testFunction(2, 2),
  expect: 4,
});

exports.result1 = ks.getRunner();
