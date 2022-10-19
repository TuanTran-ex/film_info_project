import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './HotMovie.module.scss';
import FilmDay from '../../layouts/components/public/HotFilm/FilmDay';
import FilmMonth from '../../layouts/components/public/HotFilm/FilmMonth';
import FilmYear from '../../layouts/components/public/HotFilm/FilmYear';
const cx = classNames.bind(styles);

function HotMovie() {
    const [isList, setIsList] = useState('day');

    const handleClick = (param) => {
        setIsList(param);
        console.log(isList);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <h1 className={cx('title')}>Top phim được xem nhiều nhất</h1>
                <div className={cx('classify')}>
                    <button
                        onClick={() => handleClick('day')}
                        className={
                            isList === 'day'
                                ? cx('tab-item', 'day', 'active')
                                : cx('tab-item', 'day')
                        }
                    >
                        NGÀY
                    </button>
                    <button
                        onClick={() => handleClick('month')}
                        className={
                            isList === 'month'
                                ? cx('tab-item', 'month', 'active')
                                : cx('tab-item', 'month')
                        }
                    >
                        THÁNG
                    </button>
                    <button
                        onClick={() => handleClick('year')}
                        className={
                            isList === 'year'
                                ? cx('tab-item', 'year', 'active')
                                : cx('tab-item', 'year')
                        }
                    >
                        NĂM
                    </button>
                </div>
            </div>

            {isList === 'day' ? (
                <FilmDay />
            ) : isList === 'month' ? (
                <FilmMonth />
            ) : (
                <FilmYear />
            )}
        </div>
    );
}

export default HotMovie;
