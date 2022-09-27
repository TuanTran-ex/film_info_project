const routeName = require('../../configs').routeConfig.admin;

const CategoryRouter = require('./category.route');
const DashboardRouter = require('./dashboard.route');
const UserRouter = require('./user.route');
const FilmRouter = require('./film.route');
const GenreRouter = require('./genre.route');
const PersonRouter = require('./person.route');
const CountryRouter = require('./country.route');

function route(app) {
  app.use(routeName.Dashboard, DashboardRouter);
  app.use(routeName.Users, UserRouter);
  app.use(routeName.Category, CategoryRouter);
  app.use(routeName.Film, FilmRouter);
  app.use(routeName.Genre, GenreRouter);
  app.use(routeName.Person, PersonRouter);
  app.use(routeName.Country, CountryRouter);
}

module.exports = route;
