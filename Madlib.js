// const jsdom = require("jsdom");
// const { JSDOM } = jsdom;
const http = require('http');
const fs = require('fs');
let url = require('url');
let special = require('./names.json');
//const htmlPage = require('./Madlib.html');
const htmlPage = './Madlib.html';
//console.log(htmlPage)
// let myChange = document.querySelector('Test')
// console.log(myChange)

//console.log(testContent)



let friends = [
    {
    name: "David",
    greeting: "Yes sir",
    
},
    {
    name: "Hagrid",
    greeting: "Positive"
    }
]


const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    let myUrl =  req.headers.host;
    let pathName = url.parse(req.url).pathname;

    let noSlash = (str) => {
        return pathName.startsWith('/') ?
            pathName.slice(1, pathName.length) :
            pathName;
    };

    let nameCheck = (str) => {
    if //(str = (friends.some(person => person.name === "David"))) {
        (str === "David") {
        return content = friends[0].greeting;
    
    } else if (str === "Hagrid") {
    //(str = (friends.some(person => person.name === "Joe"))) {
        return content = friends[1].greeting;
    }
    
    else {
        return content =  `<h1>Hello, ${noSlash()}</h1>`;
    
    }
}
let name2 = noSlash(pathName);
console.log(name2)
let end = nameCheck(noSlash());
let testContent = fs.readFileSync(process.cwd() + "/" + htmlPage).toString().replace(`"***Name***", "${name2}"` )
console.log(testContent)
// let dom = new JSDOM(`<!DOCTYPE html><p>${end}</p>`);
// let myElement = dom.window.document.querySelector("p").textContent;
// // console.log(myElement)
// // console.log(end)
// console.log(myElement)
res.end(testContent);


});



server.listen(3000, () => {
    //console.log('Server listening at port 3000');
})