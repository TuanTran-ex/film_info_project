import classNames from 'classnames/bind';
import styles from './FilmHome.module.scss';
// --- LIBRARY --

import Image from '../../../../components/image/Images';
import './14_LIBRARY.css';

const cx = classNames.bind(styles);

function FilmHome({ listFilm }) {
    console.log(listFilm);
    return (
        <div className={cx('film-block', 'grid')}>
            <div className={cx('row', 'list')}>
                {listFilm.map((item, index) => (
                    <div
                        key={index}
                        className={cx('column', 'l-2-4', 'm-4', 'c-6')}
                    >
                        <div className={cx('item')}>
                            <a href="/" className={cx('avata')}>
                                <Image
                                    src="https://image.tmdb.org/t/p/w342/vH50lq31h8GlDgRnHKrW5x0aHUK.jpg"
                                    alt={item.name}
                                    className={cx('image')}
                                />
                            </a>
                            <span className={cx('film-name')}>
                                <a href="/moviedetails" className={cx('name')}>
                                    {item.name}
                                </a>
                                <a href="/" className={cx('English-name')}>
                                    {item.englishName}
                                </a>
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FilmHome;
