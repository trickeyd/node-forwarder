var http = require('http');
var httpProxy = require('http-proxy');

var proxy = httpProxy.createProxyServer();

http.createServer(function(req, res){
    switch(req.headers.host){
        case "kathleenprior.co.uk":
        case "www.kathleenprior.co.uk":
            proxy.web(req, res, { target: 'http://localhost:8083' });
            break;
        case "swannell-portraits.com":
        case "www.swannell-portraits.com":
            proxy.web(req, res, { target: 'http://localhost:8084' });
            break;
        case "jamestrickey.com":
        case "www.jamestrickey.com":
            proxy.web(req, res, { target: 'http://localhost:8085' });
            break;
    }
}).listen(80);