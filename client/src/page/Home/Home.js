import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import Footer from '../../layouts/components/Footer/Footer';

// --- LIBRARY --

import './14_LIBRARY.css';
import Header from '../../layouts/public/Header';
import FilmBlock from '../../layouts/public/FilmBlock/FilmBlock';

const cx = classNames.bind(styles);
function Home() {
    const [category, setCategory] = useState(['Phim bộ', 'Phim lẻ']);

    return (
        <div className={cx('wrapper')}>
            <Header category={category} />
            <div className={cx('content')}>
                <FilmBlock />
                <FilmBlock />
                <FilmBlock />
            </div>
            <div className={cx('new-film')}>
                <div className={cx('title')}>Phim mới đăng (chờ xử lý)</div>
                <div className={cx('list-film-name')}>
                    <a href="/" className={cx('item')}>
                        Looop Lapeta
                    </a>
                    <p>(2022),</p>
                    <a href="/" className={cx('item')}>
                        Maîtresse
                    </a>
                    <p>(1976),</p>
                    <a href="/" className={cx('item')}>
                        Kaiji 2: The Ultimate Gambler
                    </a>
                    <p>(2011),</p>
                    <a href="/" className={cx('item')}>
                        Pure Art / Mortal Affair
                    </a>
                    <p>(2016),</p>
                </div>
            </div>
        </div>
    );
}

export default Home;
