import config from '../config';

//Cau hinh router
import Home from '../page/Home';
import Search from '../page/Search';
import User from '../page/User';
import Login from '../page/Login';
import HotMovie from '../page/HotMovie';
import OddMovie from '../page/OddMovie';
import SeriesMovie from '../page/SeriesMovie';
import NewMovie from '../page/NewMovie';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.user, component: User },
    { path: config.routes.search, component: Search },
    { path: config.routes.login, component: Login },
    { path: config.routes.hotmovie, component: HotMovie },
    { path: config.routes.oddmovie, component: OddMovie },
    { path: config.routes.seriesmovie, component: SeriesMovie },
    { path: config.routes.newmovie, component: NewMovie },
];

//Dang nhap: Login
const privateRoutes = [];

export { privateRoutes, publicRoutes };
