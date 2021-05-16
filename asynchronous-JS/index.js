const fs = require("fs");
const superagent = require('superagent');

const readFromFile = file =>{
    debugger;
    return new Promise((resolve,reject) =>{
        fs.readFile(`${__dirname}/dog.txt`,'utf-8',(err,data) =>{
            if(err) reject(err.message);
            resolve(data);
        });
    });
}

const writeInFile = (data) =>{
    debugger;
    return new Promise((resolve,reject) =>{
        fs.writeFile(`${__dirname}/dogImage.txt`,data.message,(err)=>{
            if(err) reject(err.message);
            resolve("Data Dumbed in File");
        });
    });
}
const getDogData= (data) => {
    debugger;
    console.log(data);
    return new Promise((resolve, reject) =>{
    superagent.get(`https://dog.ceo/api/breed/${data}/images/random`,(err,data) => {
        if(err) reject(err);
        resolve(data.body);
    });
})};

readFromFile()
    .then(data1 => getDogData(data1)
    .then(data2 => writeInFile(data2)
    .then(data3 => console.log(data3))));