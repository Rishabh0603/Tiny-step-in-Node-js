const http = require("http");
const server = http.createServer((req,res) =>{
    // res.end("hello from the other side");
     if(req.url ==""){
     res.end("output ajao");}
     else if(req.url=="/about"){
    res.end("i am in about page");}
   else if(req.url =="/home"){
   res.end("i am in home page");}
   else{
    res.writeHead(404,{"Content-type":"html/text"});
    res.end("<h1>404 error found</h1>");
    
    
   }
});
server.listen(8000,"127.0.0.1",()=>{
    console.log("listening to the port no. 8000");
})
