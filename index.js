const server = require("./api/server.js");

// heroku will add the PORT variable to the environment

const process = {
  env: { // the OS/computer where the app is executing
    PORT: 
  }
}

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});
