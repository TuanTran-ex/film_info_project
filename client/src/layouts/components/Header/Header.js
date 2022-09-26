import { useEffect } from 'react';
import WebFont from 'webfontloader';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import MovieCreationOutlinedIcon from '@mui/icons-material/MovieCreationOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
const cx = classNames.bind(styles);

function Header({}) {
    function hanleScroll() {
        window.addEventListener('scroll', function () {
            document.getElementById('showScroll').innerHTML =
                window.pageYOffset + 'px';
        });
    }

    useEffect(() => {
        WebFont.load({
            google: {
                families: ['Merriweather'],
            },
        });
    }, []);

    return (
        <header className={cx('wrapper')} onScroll={hanleScroll}>
            <nav className={cx('nav-brand')}>
                <p className={cx('film-icon')}>
                    <MovieCreationOutlinedIcon className={cx('icon')} />
                </p>
                <a href="/" className={cx('brand')}>
                    Xem phim
                </a>
            </nav>

            <div className={cx('nav-menu')}>
                <div className={cx('nav-list')}>
                    <li className={cx('item')}>
                        <SearchOutlinedIcon className={cx('search-icon')} />
                        <a href="/search">Tìm kiếm</a>
                    </li>
                    <li className={cx('item')}>
                        <a href="/">Phim Hot</a>
                    </li>
                    <li className={cx('item')}>
                        <a href="/">Phim Lẻ</a>
                    </li>
                    <li className={cx('item')}>
                        <a href="/">Phim Bộ</a>
                    </li>
                    <li className={cx('item')}>
                        <a href="/">Phim mới</a>
                    </li>
                </div>
                <div className={cx('nav-use')}>
                    <button className={cx('btn-user')}>
                        <a href="/login">Đăng nhập</a>
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;
