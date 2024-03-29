import config from '../config';
import Casts from '../page/Casts/Casts';
import Home from '../page/Home';
import HotMovie from '../page/HotMovie';
import Login from '../page/Login';
import MovieDetails from '../page/MovieDetails';
import NewMovie from '../page/NewMovie';
import OddMovie from '../page/OddMovie';
import Register from '../page/Register';
import Search from '../page/Search';
import SeriesMovie from '../page/SeriesMovie';
import User from '../page/User';
import Watching from '../page/Watching/Watching';
import Collection from '../page/logged/Collection';
import Settings from '../page/logged/Settings';

const publicRoutes = [
    { path: config.routes.collection, component: Collection },
    { path: config.routes.home, component: Home },
    { path: config.routes.user, component: User },
    { path: config.routes.search, component: Search },
    { path: config.routes.login, component: Login },
    { path: config.routes.newmovie, component: NewMovie },
    { path: config.routes.register, component: Register },
    { path: config.routes.hotmovie, component: HotMovie },
    { path: config.routes.oddmovie, component: OddMovie },
    { path: config.routes.seriesmovie, component: SeriesMovie },
    { path: config.routes.settings, component: Settings },

    {
        path: config.routes.moviedetails,
        component: MovieDetails,
        layout: MovieDetails,
    },
    {
        path: config.routes.casts,
        component: Casts,
        layout: Casts,
    },
    {
        path: config.routes.watching,
        component: Watching,
        layout: Watching,
    },
];

const privateRoutes = [];

export { privateRoutes, publicRoutes };
