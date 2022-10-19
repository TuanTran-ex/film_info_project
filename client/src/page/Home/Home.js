import { useState, useEffect } from 'react';
import axios from 'axios';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
// --- LIBRARY --

import homePageApi from '../../api/homeApi';
import './14_LIBRARY.css';
import Header from './Header';
import FilmHome from '../../layouts/components/public/FilmHome';
import Type from '../../layouts/components/public/TypeFilm';
import config from '../../config';

const cx = classNames.bind(styles);
function Home() {
    const [listCategory, setListCategory] = useState([]);
    const [listFilm, setListFilm] = useState([]);
    const [listGender, setListGenre] = useState([]);
    const [listCountry, setlistCountry] = useState([]);

    useEffect(() => {
        const fetchHomeApi = async () => {
            try {
                const params = {};
                const response = await homePageApi.getAll(params);
                console.log('Fetch products successfully: ', response);
                const { categories, films, countries, genres } = response.data;
                setListCategory(categories);
                setListFilm(films);
                setListGenre(genres);
                setlistCountry(countries);
            } catch (error) {
                console.log('Failed to fetch product list: ', error);
            }
        };
        fetchHomeApi();
    }, []);

    return (
        <div className={cx('wrapper')}>
            <Header
                listCategory={listCategory}
                listGender={listGender}
                listCountry={listCountry}
            />
            <div className={cx('content')}>
                <Type />
                <FilmHome listFilm={listFilm} />
                <Type />
                <FilmHome listFilm={listFilm} />
                <Type />
                <FilmHome listFilm={listFilm} />
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
