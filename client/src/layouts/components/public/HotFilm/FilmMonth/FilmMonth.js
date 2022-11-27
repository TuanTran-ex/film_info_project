import classNames from 'classnames/bind';
import styles from '../../FilmBlock/FilmBlock.module.scss';
// --- LIBRARY --

import Image from '../../../../../components/image/Images';
import routes from '../../../../../config/routes';
const cx = classNames.bind(styles);

function FilmMonth() {
    const filmData = [
        {
            id: 1,
            nameVn: 'Gia Tộc Rồng',
            nameEn: 'House of the Dragon',
            image: 'https://image.tmdb.org/t/p/w342/1X4h40fcB4WWUmIBK0auT4zRBAV.jpg',
        },

        {
            id: 2,
            nameVn: 'Vệ Binh Dải Ngân Hà: Tập đặc biệt kỳ nghỉ lễ',
            nameEn: 'The Guardians of the Galaxy Holiday Special',
            image: 'https://image.tmdb.org/t/p/w342/wVrfgf4rHU0dHf5iWmtBH9MibB.jpg',
        },
        {
            id: 3,
            nameVn: 'Ký ức của bệnh nhân',
            nameEn: 'Le Patient',
            image: 'https://image.tmdb.org/t/p/w342/wVrfgf4rHU0dHf5iWmtBH9MibB.jpg',
        },
        {
            id: 4,
            nameVn: 'Bodies Bodies Bodies',
            nameEn: 'Bodies Bodies Bodies',
            image: 'https://image.tmdb.org/t/p/w342/glZfjVEzZCJ7oTHWa3m6KefcoRN.jpg',
        },
        {
            id: 5,
            nameVn: 'Gap la yeu',
            nameEn: 'Meet Cute',
            image: 'https://image.tmdb.org/t/p/w342/8NBlso3DuV3frqOzLZ4UYPMTqYu.jpg',
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

export default FilmMonth;
