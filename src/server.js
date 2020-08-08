const express = require('express')
const server = express();
const nunjucks = require("nunjucks");
const { pageLanding, pageStudy, pageGiveClasses, saveClasses } = require('./pages');

nunjucks.configure('src/views', {
    express: server,
    noCache: true,
});


try {
    server
        .use(express.urlencoded({ extended: true }))
        .use(express.static("public"))
        .get("/", pageLanding)
        .get("/study", pageStudy)
        .get("/give-classes", pageGiveClasses)
        .post("/save-classes", saveClasses)
        .listen(5500);
    console.log("Server running port 5500");
} catch (error) {
    console.log(error);
}