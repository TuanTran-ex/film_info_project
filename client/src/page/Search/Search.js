import classNames from 'classnames/bind';
import styles from './Search.module.scss';
// -------LIBRARY---------

import FilmBlock from '../../layouts/components/public/FilmBlock';

const cx = classNames.bind(styles);
function Search() {
    const filmData = [
        {
            nameVi: 'Section 8',
            nameEn: 'Section 8',
            image: 'https://image.tmdb.org/t/p/w342/3G1wHQNITyfiABp2fgytpiFMHf9.jpg',
        },
        {
            nameVi: 'Mortal Kombat Legends: Snow Blind',
            nameEn: 'Mortal Kombat Legends: Snow Blind',
            image: 'https://image.tmdb.org/t/p/w342/xvjCiv1xNlK1kNnoe1nul899vIp.jpg',
        },
        {
            nameVi: 'Thực Thi Công Lý',
            nameEn: 'The Enforcer',
            image: 'https://image.tmdb.org/t/p/w342/pXC8JJbfnRWtbD8i2yKFqqWEO4X.jpg',
        },
        {
            nameVi: 'Hoàng hậu Elisabeth',
            nameEn: 'The Empress',
            image: 'https://image.tmdb.org/t/p/w342/9AWkNkZHwNLuM6H5u6dToioHMAI.jpg',
        },
        {
            nameVi: 'Quán Cà Phê Luật',
            nameEn: 'The Law Cafe',
            image: 'https://image.tmdb.org/t/p/w342/vN0rKik0oCSfFmMFoH7qicPhcHj.jpg',
        },
        {
            nameVi: 'Hợp Đồng Tình Yêu',
            nameEn: 'Love in Contract',
            image: 'https://image.tmdb.org/t/p/w342/91diI2TKjaWMqKmjlcQeSnImg5n.jpg',
        },
    ];
    return (
        <div className={cx('wrapper')}>
            <div className={cx('search')}>
                <input
                    type="text"
                    className={cx('input')}
                    placeholder="Nhập tên phim..."
                />
            </div>
            <FilmBlock filmData={filmData} />
        </div>
    );
}

export default Search;
