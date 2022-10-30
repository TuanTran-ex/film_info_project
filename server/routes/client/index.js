const routeName = require('../../configs').routeConfig.api;

const FilmRouter = require('./film.route');
const PageRouter = require('./page.route');
const CategoryRouter = require('./category.route');

function route(app) {
  app.use(routeName.Film, FilmRouter);
  app.use(routeName.Page, PageRouter);
  app.use(routeName.Category, CategoryRouter);
}

module.exports = route;
