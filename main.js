const http= require('http');
const fs=require('fs');

let server=http.createServer((req,res)=>{
    fs.readFile('index.html','utf-8',(err,data)=>{
        if(err){
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end("404 Not Found");
        }else{
            let name='Tuân';
            data=data.replace('{name}',name)
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write(data);
            return res.end();
        }
    })
});
server.listen(8080,()=>{
    console.log('localhost 8080');
})