/*
dependencies
*/
const express = require("express");
/*
    config - express
*/

const app = express();
/*
 endpoint
*/

app.get("/posts", (request, response) => {
    let posts = [
        {
            caption: "Golden Gate Bridge",
            location: "San Francisco",
        },
        {
            caption: "London",
            location: "Kigali",
        },
    ];
    response.send(posts);
});

/*
  listen
 */
app.listen(3000);
