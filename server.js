
const http = require('http');

const server = http.createServer((req, res) => {

    console.log("Requested URL:", req.url);

    res.writeHead(200, {
        'Content-Type': 'text/html'
    });

    if (req.url === '/home') {
        res.end(`
            <h1>Welcome to Home Page</h1>
            <p>This is the Home page of our Node.js application.</p>
        `);
    }
    else if (req.url === '/about') {
        res.end(`
            <h1>About Us</h1>
            <p>This application is developed using Node.js.</p>
        `);
    }
    else {
        res.end(`
            <h1>Welcome to Node.js!</h1>
            <p>Page Not Found</p>
        `);
    }

});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});
