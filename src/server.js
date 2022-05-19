const jsonServer = require("json-server");
const server = jsonServer.create();
const router1 = jsonServer.router("data/people.json")
const router2 = jsonServer.router("data/comments.json")
const router3 = jsonServer.router("data/posts.json")
const middleware = jsonServer.defaults({
    static: './build'
})