import { useEffect, useState } from 'react';
import WebFont from 'webfontloader';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import MovieCreationOutlinedIcon from '@mui/icons-material/MovieCreationOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import config from '../../../config';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Header({}) {
    const [isScroll, setIsScroll] = useState(false);

    function hanleScroll() {
        window.addEventListener('scroll', function () {
            document.getElementById('showScroll').innerHTML =
                window.pageYOffset + 'px';
        });
    }
    // Check nếu scroll (scrollY > 66) thì set lại state
    function changeNavbarBackground() {
        if (window.scrollY >= 66) {
            setIsScroll(true);
        } else {
            setIsScroll(false);
        }
    }
    // Add event scroll
    useEffect(() => {
        changeNavbarBackground();
        window.addEventListener('scroll', changeNavbarBackground);
    });

    useEffect(() => {
        WebFont.load({
            google: {
                families: ['Merriweather'],
            },
        });
    }, []);

    return (
        <header
            className={
                isScroll ? cx('wrapper', 'header-active') : cx('wrapper') // Nếu state isScroll = true thì thêm class header-active
            }
            onScroll={hanleScroll}
        >
            <nav className={cx('nav-brand')}>
                <p className={cx('film-icon')}>
                    <MovieCreationOutlinedIcon className={cx('icon')} />
                </p>
                <Link to={config.routes.home} className={cx('brand')}>
                    Xem phim
                </Link>
            </nav>

            <div className={cx('nav-menu')}>
                <div className={cx('nav-list')}>
                    <li className={cx('item')}>
                        <SearchOutlinedIcon className={cx('search-icon')} />
                        <Link
                            to={config.routes.search}
                            onClick={() => {
                                sessionStorage.removeItem('nowIndex');
                            }}
                        >
                            Tìm kiếm
                        </Link>
                    </li>
                    <li className={cx('item')}>
                        <Link
                            to={config.routes.hotmovie}
                            onClick={() => {
                                sessionStorage.removeItem('nowIndex');
                            }}
                        >
                            Phim Hot
                        </Link>
                    </li>
                    <li className={cx('item')}>
                        <Link
                            to={config.routes.oddmovie}
                            onClick={() => {
                                sessionStorage.removeItem('nowIndex');
                            }}
                        >
                            Phim Lẻ
                        </Link>
                    </li>
                    <li className={cx('item')}>
                        <Link
                            to={config.routes.seriesmovie}
                            onClick={() => {
                                sessionStorage.removeItem('nowIndex');
                            }}
                        >
                            Phim Bộ
                        </Link>
                    </li>
                    <li className={cx('item')}>
                        <Link
                            to={config.routes.newmovie}
                            onClick={() => {
                                sessionStorage.removeItem('nowIndex');
                            }}
                        >
                            Phim mới
                        </Link>
                    </li>
                </div>
                <div className={cx('nav-use')}>
                    <button
                        className={cx('btn-user')}
                        onClick={() => {
                            sessionStorage.removeItem('nowIndex');
                        }}
                    >
                        <Link to={config.routes.login}>Đăng nhập</Link>
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;
