const ADMIN_URL = '/admin/';
const API_URL = '/api/';

const config = {
  admin: {
    Dashboard: ADMIN_URL + 'dashboard',
    Users: ADMIN_URL + 'users',
    Category: ADMIN_URL + 'categories',
    Film: ADMIN_URL + 'films',
    Person: ADMIN_URL + 'persons',
    Genre: ADMIN_URL + 'genres',
    Country: ADMIN_URL + 'countries',
    Account: ADMIN_URL + 'account',
  },
  api: {
    Film: API_URL + 'films',
    Page: API_URL + 'pages',
    Category: API_URL + 'categories',
    Person: API_URL + 'persons',
    Genre: API_URL + 'genres',
    Country: API_URL + 'countries',
  },
};

module.exports = config;
