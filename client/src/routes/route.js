import config from '../config';

//Cau hinh router
import Home from '../page/Home';
import Search from '../page/Search';
import User from '../page/User';
import Login from '../page/Login';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.user, component: User },
    { path: config.routes.login, component: Login},
    { path: config.routes.search, component: Search },
];

//Dang nhap: Login
const privateRoutes = [];

export { privateRoutes, publicRoutes };
