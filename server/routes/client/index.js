const routeName = require('../../configs').routeConfig.api;

const FilmRouter = require('./film.route');
const PageRouter = require('./page.route');

function route(app) {
  app.use(routeName.Film, FilmRouter);
  app.use(routeName.Page, PageRouter);
}

module.exports = route;
