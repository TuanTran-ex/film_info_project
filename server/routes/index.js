const errorHandling = require('../utils/errorHandling');

function route(app) {
  app.get('/health', (req, res) => {
    res.send('OK');
  });

  app.use((err, req, res, next) => {
    errorHandling(err, res);
  });
}
module.exports = route;
