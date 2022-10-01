import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './NewMovie.module.scss';
import homePageApi from '../../api/homeApi';
// --LIBRARY
import Header from '../../layouts/components/public/Header';
import FilmBlock from '../../layouts/components/public/FilmBlock';
import ListFilm from '../../layouts/components/public/ListFilm';
import Title from '../../layouts/components/public/Title';

const cx = classNames.bind(styles);
function NewMovie() {
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
    const title = 'Phim mới';

    return (
        <div className={cx('wrapper')}>
            <Title title={title} />
            <div className="header-nav">
                <Header
                    listCategory={listCategory}
                    listGender={listGender}
                    listCountry={listCountry}
                    handleClick={handleClick}
                    isList={isList}
                />
            </div>
            {!isList ? <FilmBlock /> : <ListFilm />}
        </div>
    );
}

export default NewMovie;
