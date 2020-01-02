const http = require('http');
const fs = require('fs');
let url = require('url');

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    //let myUrl =  req.headers.host;
    let myUrl = req.url;
    console.log(myUrl)
    let pathName = url.parse(req.url).pathname;


    let noSlash = (str) => {
        console.log(pathName)
        return pathName.startsWith('/') ?
            pathName.slice(1, pathName.length) :
            pathName;
    };
    let content =  `<h1>${noSlash()}</h1>`;

    res.end(content)
})


server.listen(3000, () => {
    console.log('Server listening at port 3000');
})