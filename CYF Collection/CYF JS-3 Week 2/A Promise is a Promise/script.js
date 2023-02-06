// my solution

function promiseHelloWorld() {
  const resolvedPromise = Promise.resolve('Hello World!');

  try {
    return resolvedPromise.then(value => value);
  } 
  catch (error) {
    
    return error;
  }
}


// other solutions

async function promiseHelloWorld() {
  return 'Hello World!';
}

//

const promiseHelloWorld = () => Promise.resolve('Hello World!');

//

function promiseHelloWorld() {
  // replace this nonsense with your Promise
  return new Promise((resolve, reject) => {
    return resolve('Hello World!')
    });
}



// test

describe('Basic Test', () => {
  it('Hello World!', () => {
    promiseHelloWorld().then(response => Test.assertEquals(response, 'Hello World!', 'Simple Single call test'));
  });
});