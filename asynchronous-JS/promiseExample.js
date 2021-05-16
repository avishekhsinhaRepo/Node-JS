const promiseObj = new Promise((resolve,reject)=>{
    resolve({id:2});
})

promiseObj.then((result)=>{
    console.log(result);
}).catch(error =>{
    console.log(error);
});

const promiseFn = () =>  {
    return new Promise((resolve,reject)=>{
        resolve({id:1});
})};

promiseFn().then((result)=>{
    console.log(result);
}).catch(error =>{
    console.log(error);
});