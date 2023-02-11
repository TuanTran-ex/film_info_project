const express = require('express');
const helmet = require('helmet');
const compression = require('compression');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const expressLayouts = require('express-ejs-layouts');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
require('./utils/prototype');
const route = require('./routes');
const { allowedDomains } = require('./configs');
const app = express();

app.set('view engine', 'ejs');
app.set('layout', './admin/layout/_layout');
app.set('layout extractScripts', true);

app.use(
  cors({
    methods: ['GET', 'PATCH', 'PUT', 'POST', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
  })
);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(expressLayouts);
app.use(compression());
app.use(helmet());

// API document
const swaggerDocument = YAML.load('./swagger.yaml');
app.use(
  '/api-docs',
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument, { explorer: true })
);

// API route
route(app);

module.exports = app;
