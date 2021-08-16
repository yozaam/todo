let http = require('http');
let fs = require('fs');
const fsExtra = require('fs-extra');

let server = http.createServer(function (req, res) {

    const DB_PATH = __dirname + '/../public/items';
    fsExtra.ensureFileSync(DB_PATH);

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

/* 
Note:
oc get route todo-backend -o yaml | grep "host:" | awk 'END{print $2}'

this command will find the 'route' URL that needs to be supplied to frontend

now to create a map with the route, 
oc create configmap backend-url-config --from-literal=backend.url=`oc get route todo-backend -o yaml | grep "host:" | awk 'END{print $2}'`

*/