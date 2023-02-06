import classNames from 'classnames/bind';
import styles from '../../FilmBlock/FilmBlock.module.scss';
// --- LIBRARY --

import Image from '../../../../../components/image/Images';
import routes from '../../../../../config/routes';
const cx = classNames.bind(styles);

function FilmDay({ data }) {
    return (
        <div className={cx('film-block', 'grid')}>
            <div className={cx('row', 'list')}>
                {data.map((item) => (
                    <div
                        key={item.id}
                        className={cx('column', 'l-2-4', 'm-4', 'c-6')}
                    >
                        <div className={cx('item')}>
                            <a
                                href={routes.moviedetails.replace(
                                    ':id',
                                    item.id,
                                )}
                                className={cx('avata')}
                            >
                                <Image
                                    src={
                                        item.image ??
                                        'https://image.tmdb.org/t/p/w342/glZfjVEzZCJ7oTHWa3m6KefcoRN.jpg'
                                    }
                                    alt="image"
                                    className={cx('image')}
                                />
                            </a>
                            <span className={cx('film-name')}>
                                <a
                                    href={routes.moviedetails.replace(
                                        ':id',
                                        item.id,
                                    )}
                                    className={cx('name')}
                                >
                                    {item.name}
                                </a>
                                <a
                                    href={routes.moviedetails.replace(
                                        ':id',
                                        item.id,
                                    )}
                                    className={cx('English-name')}
                                >
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

export default FilmDay;
