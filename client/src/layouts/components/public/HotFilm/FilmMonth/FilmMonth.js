import classNames from 'classnames/bind';
import styles from '../../FilmBlock/FilmBlock.module.scss';
// --- LIBRARY --

import Image from '../../../../../components/image/Images';
const cx = classNames.bind(styles);

function FilmMonth() {
    return (
        <div className={cx('film-block', 'grid')}>
            <div className={cx('row', 'list')}>
                <div className={cx('column', 'l-2-4', 'm-4', 'c-6')}>
                    <div className={cx('item')}>
                        <a href="/" className={cx('avata')}>
                            <Image
                                src="https://image.tmdb.org/t/p/w342/jvIVl8zdNSOAJImw1elQEzxStMN.jpg"
                                alt="image"
                                className={cx('image')}
                            />
                        </a>
                        <span className={cx('film-name')}>
                            <a href="/" className={cx('name')}>
                                Bodies Bodies Bodies
                            </a>
                            <a href="/" className={cx('English-name')}>
                                Bodies Bodies Bodies
                            </a>
                        </span>
                    </div>
                </div>
                <div className={cx('column', 'l-2-4', 'm-4', 'c-6')}>
                    <div className={cx('item')}>
                        <a href="/" className={cx('avata')}>
                            <Image
                                src="https://image.tmdb.org/t/p/w342/6hgEe1w0An5fKi3ZqIUBwOyIN2y.jpg"
                                alt="image"
                                className={cx('image')}
                            />
                        </a>
                        <span className={cx('film-name')}>
                            <a href="/" className={cx('name')}>
                                Chú rồng của cha tôi
                            </a>
                            <a href="/" className={cx('English-name')}>
                                My Father's Dragon
                            </a>
                        </span>
                    </div>
                </div>
                <div className={cx('column', 'l-2-4', 'm-4', 'c-6')}>
                    <div className={cx('item')}>
                        <a href="/" className={cx('avata')}>
                            <Image
                                src="https://image.tmdb.org/t/p/w342/ifRFLx83Xk1DcwAS3OScgI6HmWO.jpg"
                                alt="image"
                                className={cx('image')}
                            />
                        </a>
                        <span className={cx('film-name')}>
                            <a href="/" className={cx('name')}>
                                Hang ổ
                            </a>
                            <a href="/" className={cx('English-name')}>
                                The Lair
                            </a>
                        </span>
                    </div>
                </div>
                <div className={cx('column', 'l-2-4', 'm-4', 'c-6')}>
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
                                Linh hồn đổi xác
                            </a>
                            <a href="/" className={cx('English-name')}>
                                Altered Carbon: Resleeved
                            </a>
                        </span>
                    </div>
                </div>
                <div className={cx('column', 'l-2-4', 'm-4', 'c-6')}>
                    <div className={cx('item')}>
                        <a href="/" className={cx('avata')}>
                            <Image
                                src="https://image.tmdb.org/t/p/w342/h7kaQG5MbraSLibOuTpo0gtMxRz.jpg"
                                alt="image"
                                className={cx('image')}
                            />
                        </a>
                        <span className={cx('film-name')}>
                            <a href="/" className={cx('name')}>
                                Hạ Cánh Khẩn Cấp
                            </a>
                            <a href="/" className={cx('English-name')}>
                                Emergency Declaration
                            </a>
                        </span>
                    </div>
                </div>

                <div className={cx('column', 'l-2-4', 'm-4', 'c-6')}>
                    <div className={cx('item')}>
                        <a href="/" className={cx('avata')}>
                            <Image
                                src="https://image.tmdb.org/t/p/w342/hJfI6AGrmr4uSHRccfJuSsapvOb.jpg"
                                alt="image"
                                className={cx('image')}
                            />
                        </a>
                        <span className={cx('film-name')}>
                            <a href="/" className={cx('name')}>
                                Thực thi công lý
                            </a>
                            <a href="/" className={cx('English-name')}>
                                The Enfocer
                            </a>
                        </span>
                    </div>
                </div>
                <div className={cx('column', 'l-2-4', 'm-4', 'c-6')}>
                    <div className={cx('item')}>
                        <a href="/" className={cx('avata')}>
                            <Image
                                src="https://image.tmdb.org/t/p/w342/yzkgx79vj1KsZBzxFBIsQBwBkPE.jpg"
                                alt="image"
                                className={cx('image')}
                            />
                        </a>
                        <span className={cx('film-name')}>
                            <a href="/" className={cx('name')}>
                                The Movie Chú thuật hồi chiến
                            </a>
                            <a href="/" className={cx('English-name')}>
                                Jujutsu Kaisen 0: The Movie
                            </a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FilmMonth;
