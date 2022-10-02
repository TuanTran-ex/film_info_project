const routeName = require('../../configs').routeConfig.api;

const FilmRouter = require('./film.route');

function route(app) {
  app.use(routeName.Film, FilmRouter);
}

module.exports = route;
