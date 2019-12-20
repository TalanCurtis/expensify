console.log('promises ran')

const promise = new Promise(( resolve, reject )=>{
  setTimeout(() => {
    resolve('This is my resolved data');
    // reject('something went wrong');
  }, 2000);

});
console.log('before');
/*
promise.then((data)=>{
  console.log(data);
}).catch((error)=>{
  console.log('error', error)
});

console.log('after');

// promise chaining
promise.then((data)=>{
  console.log(data);
  return "this can be passed"
}).then((whatGotPassed)=>{
  console.log('this is the chained promise then', whatGotPassed)
}).catch((error)=>{
  console.log('error', error)
});
//*/


// promise chaining with another promise
promise.then((data)=>{
  console.log(data);
  return new Promise(( resolve, reject )=>{
    setTimeout(() => {
      resolve('This is my resolved data: this is from another promise');
    }, 2000);
  
  });
}).then((whatGotPassed)=>{
  console.log('this is the chained promise then', whatGotPassed)
})
