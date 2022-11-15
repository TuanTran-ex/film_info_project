import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
// -------LIBRARY---------
import searchPageApi from '../../api/searchApi';
import FilmBlock from '../../layouts/components/public/FilmBlock';

const cx = classNames.bind(styles);
function Search() {
    const [filmData, setFilmData] = useState([]);

    useEffect(() => {
        const fetchSearchApi = async () => {
            try {
                const params = {};
                const response = await searchPageApi.getAll(params);
                const { data } = response;
                setFilmData(data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchSearchApi();
    }, []);

    const setFocus = () => {
        document.getElementsByClassName(cx('input')).focus();
        // .focus();
    };

    return (
        //onLoad={() => setFocus()}
        <div className={cx('wrapper')}>
            <div className={cx('search')}>
                <input
                    type="text"
                    className={cx('input')}
                    placeholder="Nhập tên phim..."
                />
            </div>
            <FilmBlock films={filmData} />
        </div>
    );
}

export default Search;
