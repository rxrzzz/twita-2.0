const jsonServer = require("json-server");

const server = jsonServer.create();
const router1 = jsonServer.router("./data/people.json")
const router2 = jsonServer.router("./data/comments.json")
const router3 = jsonServer.router("./data/posts.json")

const middleware = jsonServer.defaults({
    static: './build'
})

const port1 = 7000;
const port2 = 3020;
const port3 = 3010;

server.use(router1)
server.listen(port1);

server.use(router2)
server.listen(port2);

server.use(router3);
server.listen(port3)