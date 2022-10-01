import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './HotMovie.module.scss';
import FilmDay from '../../layouts/components/public/HotFilm/FilmDay';
import FilmMonth from '../../layouts/components/public/HotFilm/FilmMonth';
import FilmYear from '../../layouts/components/public/HotFilm/FilmYear';
const cx = classNames.bind(styles);

function HotMovie() {
    const [isList, setIsList] = useState('day');

    const handleClick = (param) => {
        const tam = param.toString();
        console.log('tam: ' + tam);
        const getClass = document.getElementsByClassName(tam);
        setIsList(param);
        getClass.classList.add(cx('active'));
        console.log(getClass);
    };
    //
    // const $ = document.querySelector.bind(document); //sd lấy ra 1 ptu
    // const $$ = document.querySelectorAll.bind(document); // ptu lay ra nhiều ptu
    // const tabActive = document.querySelector(cx('.active'));
    // console.log(tabActive);

    // const line = $(cx('.line')); //get line
    // console.log(line);
    // line.style.left = tabActive.offsetLeft + 'px';
    // console.log(' tabActive.offsetLeft: ' + tabActive.offsetLeft); //449px;

    // line.style.width = tabActive.offsetWidth + 'px';
    // console.log('tabActive.offsetWidth: ' + tabActive.offsetWidth);

    // const tabs = $$(cx('.tab-item'));
    // console.log(tabs);
    // tabs.forEach((tab, index) => {
    //     tab.onClick = function () {
    //         tabActive.classList.remove(cx('active'));
    //         this.classList.add(cx('active'));
    //         line.style.left = this.offsetLeft + 'px';
    //         line.style.width = this.offsetWidth + 'px';
    //     };
    // });

    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <h1 className={cx('title')}>Top phim được xem nhiều nhất</h1>
                <div className={cx('classify')}>
                    <button
                        onClick={() => handleClick('day')}
                        className={cx('tab-item', 'day')}
                    >
                        NGÀY
                    </button>
                    <button
                        onClick={() => handleClick('month')}
                        className={cx('tab-item', 'month')}
                    >
                        THÁNG
                    </button>
                    <button
                        onClick={() => handleClick('year')}
                        className={cx('tab-item', 'year')}
                    >
                        NĂM
                    </button>
                    <div className={cx('line')}></div>
                </div>
            </div>

            {isList === 'day' ? (
                <FilmDay />
            ) : isList === 'month' ? (
                <FilmMonth />
            ) : (
                <FilmYear />
            )}
        </div>
    );
}

export default HotMovie;
