import classNames from 'classnames/bind';
import styles from './FoundSimilar.module.scss';
import Image from '../../../../components/image/Images';

const cx = classNames.bind(styles);

function FoundSimilar() {
    // toi da 5 phan tu
    const data = [
        {
            id: 1,
            image: 'https://image.tmdb.org/t/p/w342/tVxDe01Zy3kZqaZRNiXFGDICdZk.jpg',
            name: 'Bullet Train',
        },
        {
            id: 2,
            image: 'https://image.tmdb.org/t/p/w342/tVxDe01Zy3kZqaZRNiXFGDICdZk.jpg',
            name: 'Bullet Train',
        },
        // {
        //     id: 3,
        //     image: 'https://image.tmdb.org/t/p/w342/tVxDe01Zy3kZqaZRNiXFGDICdZk.jpg',
        //     name: 'Bullet Train',
        // },
        // {
        //     id: 4,
        //     image: 'https://image.tmdb.org/t/p/w342/tVxDe01Zy3kZqaZRNiXFGDICdZk.jpg',
        //     name: 'Bullet Train',
        // },
        // {
        //     id: 5,
        //     image: 'https://image.tmdb.org/t/p/w342/tVxDe01Zy3kZqaZRNiXFGDICdZk.jpg',
        //     name: 'Bullet Train',
        // },
    ];
    return (
        <div className={cx('wrapper')}>
            <div className={cx('main')}>
                <h3 className={cx('title')}>PHIM TƯƠNG TỰ</h3>
                <ul className={cx('list')}>
                    {data.map((item) => (
                        <li key={item.id} className={cx('item')}>
                            <a href="/">
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    className={cx('image')}
                                />
                                <p className={cx('name')}>{item.name}</p>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default FoundSimilar;
