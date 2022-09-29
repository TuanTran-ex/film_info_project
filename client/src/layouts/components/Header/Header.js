import { useEffect, useState } from 'react';
import WebFont from 'webfontloader';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import MovieCreationOutlinedIcon from '@mui/icons-material/MovieCreationOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import config from '../../../config';

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
                <a href={config.routes.home} className={cx('brand')}>
                    Xem phim
                </a>
            </nav>

            <div className={cx('nav-menu')}>
                <div className={cx('nav-list')}>
                    <li className={cx('item')}>
                        <SearchOutlinedIcon className={cx('search-icon')} />
                        <a href={config.routes.search}>Tìm kiếm</a>
                    </li>
                    <li className={cx('item')}>
                        <a href={config.routes.hotmovie}>Phim Hot</a>
                    </li>
                    <li className={cx('item')}>
                        <a href={config.routes.oddmovie}>Phim Lẻ</a>
                    </li>
                    <li className={cx('item')}>
                        <a href={config.routes.seriesmovie}>Phim Bộ</a>
                    </li>
                    <li className={cx('item')}>
                        <a href={config.routes.newmovie}>Phim mới</a>
                    </li>
                </div>
                <div className={cx('nav-use')}>
                    <button className={cx('btn-user')}>
                        <a href={config.routes.login}>Đăng nhập</a>
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;
