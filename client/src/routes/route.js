import config from '../config';

//Cau hinh router
import Home from '../page/Home';
import Search from '../page/Search';
import User from '../page/User';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.user, component: User },
    { path: config.routes.search, component: Search },
];

//Dang nhap: Login
const privateRoutes = [];

export { privateRoutes, publicRoutes };
