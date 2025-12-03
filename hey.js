const http = require('http')
const fs = require('fs')
const url = require('url')

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html')

    if (req.url === '/') {
        res.write('<h1>Welcome to Login page</h1>')
        res.write(`
            <form action="/details" method="get">
                <input type="text" name="username" placeholder="username">
                <input type="password" name="password" placeholder="password">
                <button type="submit">Login</button>
            </form>
        `)
        return res.end()
    }

    else if (req.url.startsWith('/details')) {

        const { username, password } = url.parse(req.url, true).query

        const data = `username: ${username}, password: ${password}`

        fs.writeFileSync('info.txt', data)

        res.end('Details saved successfully')
    }
else {
        res.write('<h1>404 Not Found</h1>')
        res.end()
    }

})

const port = 3001
server.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
})
