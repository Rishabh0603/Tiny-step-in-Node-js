const fs = require('fs');
const profile={
name : "Rishabh",
branch : "ECE",
rollNo : 1901220310083,
}

//console.log(profile);

const JSONfile = JSON.stringify(profile);
console.log(JSONfile);
//fs.writeFile("StoreData.json",JSONfile,(err)=>{console.log("File created and data saved")})
//fs.readFile("Json.js",(err)=>{console.log(JSONfile)})
// const objectFile = JSON.parse(JSONfile);
// console.log(objectFile);
fs.readFile("StoreData.json","utf-8",(err,data)=>{console.log(data)})