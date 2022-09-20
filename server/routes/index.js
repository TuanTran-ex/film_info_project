const { errorHandling } = require('../utils/errorHandling');
const FilmRouter = require('./film.route');

function route(app) {
  app.get('/health', (req, res) => {
    res.send('OK');
  });

  app.use('/api/films', FilmRouter);
  app.use((err, req, res, next) => {
    errorHandling(err, res);
  });
}
module.exports = route;
