
const http = require("http");
const fs = require("fs");
const url = require("url");// video 8 url handaling

const express = require("express");

// video 7 http server basics
/*
const myServer = http.createServer((req,res) =>{
    //console.log("New request rec.");
    //console.log(req.headers); 
    Server Started output of req.headers from client site
{
  host: 'localhost:8000',
  'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:133.0) Gecko/20100101 Firefox/133.0',    
  accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,
  'accept-language': 'en-US,en;q=0.5',
  'accept-encoding': 'gzip, deflate, br, zstd',
  connection: 'keep-alive',
  'upgrade-insecure-requests': '1',
  'sec-fetch-dest': 'document',
  'sec-fetch-mode': 'navigate',
  'sec-fetch-site': 'none',
  'sec-fetch-user': '?1',
  priority: 'u=0, i'
}
    const log = `${Date.now()} ${req.url} the new user Received\n`; //log file it contais all info 
    fs.appendFile("./log.txt", log, (error, data) =>{
        //res.end("Hello from the server");

        switch(req.url){
            case "/":
                res.end("Home Page");
                break;
            case "/about":
                res.end("hii my name is Akash");
                break;
            default:
                res.end("Error 404!!");
                break;

        }
    })
    //res.end("hello from the server");
})



//video 8 URL handling
const log = `${Date.now()} ${req.url} the new user Received\n`; //log file it contais all info 
    const myUrl = url.parse(req.url,true);
    console.log(myUrl);
    fs.appendFile("./log.txt", log, (error, data) =>{
        //res.end("Hello from the server");
        switch(myUrl.pathname){
            case "/":
                res.end("Home Page");
                break;
            case "/about": // as you see when we call about?myName=Akash it will print whole in the log file it does not seperate the query from the url request
            //so for this we use URL module in npm package from google
                res.end("hii my name is Akash");//http://localhost:8000/about?myName=Akash&a=2
                break;
            case "/search":
                const search = myUrl.query.search_query; // this is search query
                res.end(`Here is your recommended search ` + search); /*
                Url {
                    protocol: null,
                    slashes: null,
                    auth: null,
                    host: null,
                    port: null,
                    hostname: null,
                    hash: null,
                    search: '?search_query=javascript',
                    query: [Object: null prototype] { search_query: 'javascript' },
                    pathname: '/search',
                    path: '/search?search_query=javascript',
                    href: '/search?search_query=javascript'
                }
                
                break;
            default:
                res.end("Error 404!!");
                break;

        }
    })
    //res.end("hello from the server");
})


//video 9 http methods
//get , post , punch , put , delete (all you u can say those all are the CRUD operation)
//get : it is use for when we want a request/data from the server
//post: when we want to add or manipulate the data in your server or DB
//punch: update the existing data
//put: upload a file or photo into your server
//delete : when you want to delete the server 
const log = `${Date.now()} ${req.method} ${req.url} the new user Received\n`; //log file it contais all info 
    if(req.url === "/favicon.ico") return res.end();
    const myUrl = url.parse(req.url,true);
    //console.log(myUrl);
    fs.appendFile("./log.txt", log, (error, data) =>{
        //res.end("Hello from the server");
        switch(myUrl.pathname){
            case "/":
                res.end("Home Page");
                break;
            case "/about": 
                res.end("hii my name is Akash");
                break;
            case "/signup":
                if(req.method === "GET") return res.end("this is the signup page");
                else if(req.method === "POST"){
                    //DB Query
                    res.end("Success");
                }
                break;
            case "/search":
                const search = myUrl.query.search_query; // this is search query
                res.end(`Here is your recommended search ` + search); 
                
                break;
            default:
                res.end("Error 404!!");
                break;

        }
    })
    //res.end("hello from the server");
})

})
*/

//video 10 work with express

const app = express();

app.get("/", (req,res) =>{
    return res.end("Hello from the Home page");
})

app.get("/about", (req,res) =>{
    return res.end(`Hii ${req.query.name}`); //http://localhost:8000/about?name=Akash
})

function myHandler(req,res){
    const log = `${Date.now()} ${req.method} ${req.url} the new user Received\n`; //log file it contais all info 
    if(req.url === "/favicon.ico") return res.end();
    const myUrl = url.parse(req.url,true);
    //console.log(myUrl);
    fs.appendFile("./log.txt", log, (error, data) =>{
        //res.end("Hello from the server");
        switch(myUrl.pathname){
            case "/":
                res.end("Home Page");
                break;
            case "/about": 
                res.end("hii my name is Akash");
                break;
            case "/signup":
                if(req.method === "GET") return res.end("this is the signup page");
                else if(req.method === "POST"){
                    //DB Query
                    res.end("Success");
                }
                break;
            case "/search":
                const search = myUrl.query.search_query; // this is search query
                res.end(`Here is your recommended search ` + search); 
                
                break;
            default:
                res.end("Error 404!!");
                break;

        }
    })
    //res.end("hello from the server");
}

const myServer = http.createServer(app);



myServer.listen(8000, () => console.log("Server Started"));