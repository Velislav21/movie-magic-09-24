import express from "express";

import routes from './routes.js';
import handlebarsInit from "./config/handlebarsInit.js";
import expressInit from "./config/expressInit.js";

const app = express();

handlebarsInit(app);
expressInit(app);

app.use(routes)

app.listen(5000, () => console.log('server is listening on http://localhost:5000'))