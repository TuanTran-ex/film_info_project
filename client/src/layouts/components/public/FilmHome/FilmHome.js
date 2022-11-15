import React from 'react';
import { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import classNames from 'classnames/bind';
// --- LIBRARY --
import routes from '../../../../config/routes';
import './14_LIBRARY.css';
import MovieDetails from '../../../../page/MovieDetails';
import styles from './FilmHome.module.scss';
import Image from '../../../../components/image/Images';

const cx = classNames.bind(styles);

function FilmHome({ listFilm }) {
    const useViewport = () => {
        const [width, setWidth] = React.useState(window.innerWidth);

        React.useEffect(() => {
            const handleWindowResize = () => setWidth(window.innerWidth);
            window.addEventListener('resize', handleWindowResize);
            return () =>
                window.removeEventListener('resize', handleWindowResize);
        }, []);

        return { width };
    };
    // const viewPort = useViewport();
    // const NotDesktop = viewPort.width >= 740 && viewPort.width <= 1023;
    // const [array, setArray] = useState();
    // console.log('array: ', array);

    // useEffect(() => {
    //     if (NotDesktop && array === undefined) setArray(listFilm.slice(0, 8));
    // }, [viewPort.width]);

    return (
        <div className={cx('film-block', 'grid')}>
            <div className={cx('row', 'list')}>
                {listFilm.map((item, index) => (
                    <div
                        key={index}
                        className={cx('column', 'l-2-4', 'm-3', 'c-6')}
                    >
                        <div className={cx('item')}>
                            <a
                                href={routes.moviedetails.replace(
                                    ':id',
                                    item.id,
                                )}
                                className={cx('avata')}
                            >
                                <Image
                                    src="https://image.tmdb.org/t/p/w342/vH50lq31h8GlDgRnHKrW5x0aHUK.jpg"
                                    alt={item.name}
                                    className={cx('image')}
                                />
                            </a>
                            <span className={cx('film-name')}>
                                <a
                                    href={routes.moviedetails.replace(
                                    ':id',
                                    item.id,
                                )}
                                    className={cx('name')}
                                >
                                    {item.name}
                                </a>
                                <a
                                    href={routes.moviedetails.replace(
                                    ':id',
                                    item.id,
                                )}
                                    className={cx('English-name')}
                                >
                                    {item.englishName}
                                </a>
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FilmHome;
