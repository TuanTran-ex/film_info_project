const { errorHandling } = require('../utils/errorHandling');
const FilmRouter = require('./film.route');
const AdminRoute = require('./admin');

function route(app) {
  app.get('/health', (req, res) => {
    res.send('OK');
  });
  AdminRoute(app);

  app.use('/api/films', FilmRouter);
  app.use((err, req, res, next) => {
    errorHandling(err, res);
  });
}
module.exports = route;
