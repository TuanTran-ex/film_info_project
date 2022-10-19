import classNames from 'classnames/bind';
import styles from './FilmBlock.module.scss';
// --- LIBRARY --

import Image from '../../../../components/image/Images';
import './14_LIBRARY.css';

const cx = classNames.bind(styles);

function FilmBlock({ films }) {
    return (
        <div className={cx('film-block', 'grid')}>
            <div className={cx('row', 'list')}>
                {films.map((item) => (
                    <div
                        key={item.id}
                        className={cx('column', 'l-2-4', 'm-4', 'c-6')}
                    >
                        <div className={cx('item')}>
                            <a href="/" className={cx('avata')}>
                                <Image
                                    src="https://image.tmdb.org/t/p/w342/vlIYzx7cc4Wvaoh7ShjF2HZG45.jpg"
                                    alt="image"
                                    className={cx('image')}
                                />
                            </a>
                            <span className={cx('film-name')}>
                                <a href="/" className={cx('name')}>
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

export default FilmBlock;
