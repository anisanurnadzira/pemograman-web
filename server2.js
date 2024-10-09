const http = require('http');
const fs = require('fs');
const url = require('url');

const server = http.createServer((req, res) => {
    let q = url.parse(req.url, true);
    let namaFile = "." + q.pathname;

    fs.readFile('namafile', function(err, data){
            if(err){
        res.statusCode = 400; //halaman tidak tersedia
        res.setHeader('Content-Type', 'text/html');
        res.write(data);
        return res.end();

        }
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.write(data);
        return res.end();


    });

});

server.listen(3000, () => {
    console.log("Server Berhasil di port 3000");
});