import classNames from 'classnames/bind';
import styles from '../../FilmBlock/FilmBlock.module.scss';
// --- LIBRARY --

import Image from '../../../../../components/image/Images';
import routes from '../../../../../config/routes';
const cx = classNames.bind(styles);

function FilmYear() {
    const filmData = [
        {
            id: 1,
            nameVn: 'Bodies Bodies Bodies',
            nameEn: 'Bodies Bodies Bodies',
            image: 'https://image.tmdb.org/t/p/w342/glZfjVEzZCJ7oTHWa3m6KefcoRN.jpg',
        },

        {
            id: 2,
            nameVn: 'BrodLes',
            nameEn: 'BrodLes',
            image: 'https://image.tmdb.org/t/p/w342/vH50lq31h8GlDgRnHKrW5x0aHUK.jpg',
        },
        {
            id: 3,
            nameVn: 'Adventure Vũ Điệu Dòng Sông: Cuộc Phiêu Lưu Hoạt Hình (2021)',
            nameEn: ' Riverdance: The Animated Adventure',
            image: 'https://image.tmdb.org/t/p/w342/i6TRDlVuuEXMyLSlIkDd8YhBN0r.jpg',
        },
        {
            id: 4,
            nameVn: 'Bodies Bodies Bodies',
            nameEn: 'Bodies Bodies Bodies',
            image: 'https://image.tmdb.org/t/p/w342/glZfjVEzZCJ7oTHWa3m6KefcoRN.jpg',
        },
        {
            id: 5,
            nameVn: 'Bodies Bodies Bodies',
            nameEn: 'Bodies Bodies Bodies',
            image: 'https://image.tmdb.org/t/p/w342/glZfjVEzZCJ7oTHWa3m6KefcoRN.jpg',
        },
        {
            id: 6,
            nameVn: 'Bodies Bodies Bodies',
            nameEn: 'Bodies Bodies Bodies',
            image: 'https://image.tmdb.org/t/p/w342/hYD06ezIZ5dhySVAgxK68y8Z3w3.jpg',
        },
        {
            id: 7,
            nameVn: 'Bodies Bodies Bodies',
            nameEn: 'Bodies Bodies Bodies',
            image: 'https://image.tmdb.org/t/p/w342/yzkgx79vj1KsZBzxFBIsQBwBkPE.jpg',
        },
    ];
    return (
        <div className={cx('film-block', 'grid')}>
            <div className={cx('row', 'list')}>
                {filmData.map((item) => (
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
                                    src={item.image}
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
                                    {item.nameVn}
                                </a>
                                <a
                                    href={routes.moviedetails.replace(
                                        ':id',
                                        item.id,
                                    )}
                                    className={cx('English-name')}
                                >
                                    {item.nameEn}
                                </a>
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FilmYear;
