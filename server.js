const Hapi  = require("@hapi/hapi")
const routes = require("./routes")

const init = async() =>{
    const server = Hapi.Server({
        port : 4999,
        host : "localhost",
    });

    server.route(routes);

    await server.start();
    console.log("Server berjalan pada ${server.info.uri}");
}

init();