import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './FilmBlock.module.scss';
import WebFont from 'webfontloader';
import Picture2 from '../../../components/image/picture2.jpg';
import Picture3 from '../../../components/image/picture3.jpg';
import Image from '../../../components/image/Images';

// --- LIBRARY --

import './14_LIBRARY.css';

const cx = classNames.bind(styles);

function FilmBlock() {
    useEffect(() => {
        WebFont.load({
            google: {
                families: ['Oswald', 'sans - serif'],
            },
        });
    }, []);
    return (
        <div className={cx('film-block', 'grid')}>
            <div className={cx('film-title')}>
                <p>PHIM ĐỀ CỬ</p>
            </div>
            {/* <div className={cx('row', 'block')}> */}
            <div className={cx('row', 'list')}>
                <div className={cx('column', 'l-2-4', 'm-4', 'c-6')}>
                    <div className={cx('item')}>
                        <a href="/" className={cx('avata')}>
                            <Image
                                src="https://image.tmdb.org/t/p/w342/gJDvYUJcPEDJzB3SnQokifPUtRF.jpg"
                                alt="image"
                                className={cx('image')}
                            />
                        </a>
                        <span className={cx('film-name')}>
                            <a href="/" className={cx('name')}>
                                Sự trỗi dậy của Gru
                            </a>
                            <a href="/" className={cx('English-name')}>
                                English
                            </a>
                        </span>
                    </div>
                </div>
                <div className={cx('column', 'l-2-4', 'm-4', 'c-6')}>
                    <div className={cx('item')}>
                        <a href="/" className={cx('avata')}>
                            <Image
                                src="https://image.tmdb.org/t/p/w342/vH50lq31h8GlDgRnHKrW5x0aHUK.jpg"
                                alt="image"
                                className={cx('image')}
                            />
                        </a>
                        <span className={cx('film-name')}>
                            <a href="/" className={cx('name')}>
                                Sự trỗi dậy của Gru
                            </a>
                            <a href="/" className={cx('English-name')}>
                                English
                            </a>
                        </span>
                    </div>
                </div>
                <div className={cx('column', 'l-2-4', 'm-4', 'c-6')}>
                    <div className={cx('item')}>
                        <a href="/" className={cx('avata')}>
                            <Image
                                src="https://image.tmdb.org/t/p/w342/i6TRDlVuuEXMyLSlIkDd8YhBN0r.jpg"
                                alt="image"
                                className={cx('image')}
                            />
                        </a>
                        <span className={cx('film-name')}>
                            <a href="/" className={cx('name')}>
                                Adventure Vũ Điệu Dòng Sông: Cuộc Phiêu Lưu Hoạt
                                Hình (2021)
                            </a>
                            <a href="/" className={cx('English-name')}>
                                Riverdance: The Animated Adventure
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
                                src="https://image.tmdb.org/t/p/w342/gJDvYUJcPEDJzB3SnQokifPUtRF.jpg"
                                alt="image"
                                className={cx('image')}
                            />
                        </a>
                        <span className={cx('film-name')}>
                            <a href="/" className={cx('name')}>
                                Adventure Vũ Điệu Dòng Sông: Cuộc Phiêu Lưu Hoạt
                                Hình (2021)
                            </a>
                            <a href="/" className={cx('English-name')}>
                                Riverdance: The Animated Adventure
                            </a>
                        </span>
                    </div>
                </div>
            </div>
            {/* </div> */}
        </div>
    );
}

export default FilmBlock;
