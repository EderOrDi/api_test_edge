const express = require("express");
const { API_VERSION, PORT } = require('./config');
const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const app = express();
const path = require("path")


const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "API Library",
            version: "1.0.0",
            description: "Edge test API"
        },
        servers: [
            {
                url: `http://localhost:${PORT}/api/${API_VERSION}/`
            }
        ]
    },
    apis: [`${path.join(__dirname,"./users.js")}`]
}

const specs = swaggerJsDoc(options);
const userRoutes = require('./users.js')
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs))
app.use(express.json())
app.use(`/api/${API_VERSION}/users`, userRoutes)
app.listen(PORT, () => console.log(`Server runing on http://localhost:${PORT}/api-docs/`))

module.exports = app;

