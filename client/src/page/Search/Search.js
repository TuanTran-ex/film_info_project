import classNames from 'classnames/bind';
import styles from './Search.module.scss';
// -------LIBRARY---------

import FilmBlock from '../../layouts/components/public/FilmBlock';

const cx = classNames.bind(styles);
function Search() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('search')}>
                <input
                    type="text"
                    className={cx('input')}
                    placeholder="Nhập tên phim..."
                />
            </div>
            <FilmBlock />
        </div>
    );
}

export default Search;
