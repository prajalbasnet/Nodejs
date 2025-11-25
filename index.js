
// REQUEST.URL
//aaba chai req.url ko barema herdai chau hai ta

const http = require("http");
const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/plain");

    if(req.url === "/") {
        res.end("Hello, World!\n");
    } else if(req.url === "/about") {
        res.end("This is the about page.\n");
    } else {
        res.statusCode = 404;
        res.end(" 404 Page not found.\n");
    }
});
server.listen(3000, () => {
console.log("Server running at http://localhost:3000/");
});
