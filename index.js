var http = require("http");

let app = http.createServer(function (res, req) {
    
    res.send("Welcome Devs");

});

app.listen(3000, function () {
    
    console.log("server started");
    
})