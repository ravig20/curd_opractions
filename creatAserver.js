const http = require("http");
http.createServer((res,resp)=>{
    resp.write("hello moto");
    resp.end();
}

).listen(4500);
