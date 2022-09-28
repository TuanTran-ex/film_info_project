const { errorHandling } = require('../utils/errorHandling');

const AdminRoute = require('./admin');
const ClientRoute = require('./client');

function route(app) {
  app.get('/health', (req, res) => {
    res.send('OK');
  });
  AdminRoute(app);
  ClientRoute(app);
  app.use((err, req, res, next) => {
    errorHandling(err, res);
  });
}
module.exports = route;
