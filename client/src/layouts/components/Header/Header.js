import classNames from 'classnames/bind';
import styles from './Header.module.scss';

import MovieCreationOutlinedIcon from '@mui/icons-material/MovieCreationOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
const cx = classNames.bind(styles);

function Header() {
    function Test() {
        const getWrapper = document.getElementsByClassName('wrapper');
        if (document.documentElement.scrollTop > 50) {
            getWrapper.classList.add(cx('test'));
        }
    }

    return (
        <div className={cx('wrapper')} onScroll={() => Test}>
            <nav className={cx('nav-brand')}>
                <p className={cx('film-icon')}>
                    <MovieCreationOutlinedIcon className={cx('icon')} />
                </p>
                <p className={cx('brand')}>Xem phim</p>
            </nav>

            <div className={cx('nav-menu')}>
                <div className={cx('nav-list')}>
                    <li className={cx('item')}>
                        <SearchOutlinedIcon className={cx('search-icon')} />
                        <a href="/">Tìm kiếm</a>
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
                        <a href="/">Đăng nhập</a>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Header;
