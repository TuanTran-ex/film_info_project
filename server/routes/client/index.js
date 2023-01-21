const routeName = require('../../configs').routeConfig.api;

const FilmRouter = require('./film.route');
const PageRouter = require('./page.route');
const CategoryRouter = require('./category.route');
const CountryRouter = require('./country.route');
const AuthRouter = require('./account.route');
const PersonRouter = require('./person.route');

function route(app) {
  app.use(routeName.Film, FilmRouter);
  app.use(routeName.Page, PageRouter);
  app.use(routeName.Category, CategoryRouter);
  app.use(routeName.Country, CountryRouter);
  app.use(routeName.Base, AuthRouter);
  app.use(routeName.Person, PersonRouter);
}

module.exports = route;
