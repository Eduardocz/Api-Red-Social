const express = require('express');
const bodyParser = require('body-parser');
const config = require('../config.js');
const user = require('../components/user/network');

const swaggerUi = require('swagger-ui-express');
const app = express();

app.use(bodyParser.json());

const swaggerDoc = require('./swagger.json')

//ROUETER
app.use('/api/user',user);
app.use('/api-docs',swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.listen(config.api,()=>{
    console.log("Api escuchando en el puerto", config.api.port);
});