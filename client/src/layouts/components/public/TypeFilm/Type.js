import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './Type.module.scss';
import WebFont from 'webfontloader';
// -------LIBRARY---------

const cx = classNames.bind(styles);

function Type() {
    useEffect(() => {
        WebFont.load({
            google: {
                families: ['Oswald', 'sans - serif'],
            },
        });
    }, []);
    return (
        <div className={cx('film-title')}>
            <p>PHIM ĐỀ CỬ</p>
        </div>
    );
}

export default Type;
