let http = require('http');
let fs = require('fs');

let server = http.createServer(function (req, res) {

    const DB_PATH = __dirname + '/../public/items';

    console.log(req.method);
    if (req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'});
        let body = fs.readFileSync(DB_PATH, {encoding:'utf8', flag:'r'}); 
        console.log(body);
        res.end(body);
    } else if (req.method === 'POST') {
        console.log('POST');
        let body = '';
        req.on('data', function (chunk) {
            body += chunk;
        });

        req.on('end', function(){
            // console.log(body, req.body);
            fs.writeFileSync(DB_PATH, body); // async might give 200 and fs fails later ?
            res.writeHead(200, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'});
            res.end(body);
        });
    } else if (req.method === 'OPTIONS') {
        res.writeHead(200, {'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers': '*'});
        res.end();
    }

}).listen(8000);