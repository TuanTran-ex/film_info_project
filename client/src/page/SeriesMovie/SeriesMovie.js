import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './SeriesMovie.module.scss';
import homePageApi from '../../api/homeApi';
import FilmBlock from '../../layouts/components/public/FilmBlock';
import ListFilm from '../../layouts/components/public/ListFilm';
import Title from '../../layouts/components/public/Title';
import HeaderSeries from '../../layouts/components/public/HeaderSeries/HeaderSeries';
const cx = classNames.bind(styles);

function SeriesMovie() {
    const title = 'Phim bộ';
    const [listCategory, setListCategory] = useState([]);
    const [listGender, setListGenre] = useState([]);
    const [listCountry, setlistCountry] = useState([]);
    const [isList, setIsList] = useState(false);

    useEffect(() => {
        const fetchHomeApi = async () => {
            try {
                const params = {};
                const response = await homePageApi.getAll(params);
                console.log('Fetch products successfully: ', response);
                const { categories, countries, genres } = response.data;
                setListCategory(categories);
                setListGenre(genres);
                setlistCountry(countries);
            } catch (error) {
                console.log('Failed to fetch product list: ', error);
            }
        };
        fetchHomeApi();
    }, []);
    const handleClick = (param) => {
        setIsList(param);
    };

    return (
        <div className={cx('wrapper')}>
            <Title title={title} />
            <HeaderSeries
                listCategory={listCategory}
                listGender={listGender}
                listCountry={listCountry}
                handleClick={handleClick}
                isList={isList}
            />
            {!isList ? <FilmBlock /> : <ListFilm />}
        </div>
    );
}

export default SeriesMovie;
