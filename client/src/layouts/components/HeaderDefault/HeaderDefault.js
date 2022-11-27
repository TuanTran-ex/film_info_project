import { useEffect, useState } from 'react';
import React from 'react';
import WebFont from 'webfontloader';
import classNames from 'classnames/bind';
import styles from './HeaderDefault.module.scss';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import routes from '../../../config/routes';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { Divider } from '@mui/material';
const cx = classNames.bind(styles);

function Header({}) {
    const [isScroll, setIsScroll] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [isShow, setIsShow] = useState(false);
    const [isHide, setIsHide] = useState(true);
    const getValueUser = localStorage.getItem('account');

    function hanleScroll() {
        window.addEventListener('scroll', function () {
            document.getElementById('showScroll').innerHTML =
                window.pageYOffset + 'px';
        });
    }
    // Check nếu scroll (scrollY > 66) thì set lại state
    function changeNavbarBackground() {
        if (window.scrollY >= 66) {
            setIsScroll(true);
        } else {
            setIsScroll(false);
        }
    }
    // Add event scroll
    useEffect(() => {
        changeNavbarBackground();
        window.addEventListener('scroll', changeNavbarBackground);
    });

    //Add font-family
    useEffect(() => {
        WebFont.load({
            google: {
                families: ['Merriweather', 'Zen Antique Soft'],
            },
        });
    }, []);

    //Hanle resposive
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

    const viewPort = useViewport();
    const Mobile = viewPort.width <= 768;
    //Set navbar-menu in mobile
    useEffect(() => {
        if (Mobile) {
            setIsMobile(true); //chua toi uu
        } else {
            setIsMobile(false);
        }
    }, [viewPort.width]);

    //Click Icon menu
    const handleClickIconMenu = () => {
        if (isShow) {
            setIsShow(false);
        } else setIsShow(true);
    };

    const handleClickList = () => {};
    return (
        <header
            className={
                isScroll ? cx('wrapper', 'header-active') : cx('wrapper') // Nếu state isScroll = true thì thêm class header-active
            }
            onScroll={hanleScroll}
        >
            <div className={cx('nav-left')}>
                <div className={cx('brand')}>
                    {isMobile === true ? (
                        <p className={cx('icon')}>
                            <MenuIcon
                                className={cx('menu-icon')}
                                onClick={() => handleClickIconMenu()}
                            />
                        </p>
                    ) : (
                        ''
                    )}
                    <nav className={cx('nav-brand')}>
                        <Link
                            to={routes.home}
                            className={cx('brand-link')}
                            onClick={() => {
                                setIsShow(false);
                            }}
                        >
                            Xem phim
                        </Link>
                    </nav>
                </div>

                <Link
                    to={routes.search}
                    onClick={() => {
                        sessionStorage.removeItem('nowIndex');
                    }}
                    className={cx('search')}
                >
                    <span>
                        <SearchOutlinedIcon className={cx('search-icon')} />

                        <div className={cx('search-item')}>Tìm kiếm</div>
                    </span>
                </Link>
            </div>
            <div
                className={
                    isMobile && isShow ? cx('nav-menu') : cx('nav-menu', 'hide')
                }
            >
                <div
                    className={cx('nav-list')}
                    onClick={() => handleClickList()}
                >
                    <li className={cx('item')}>
                        <Link
                            to={routes.hotmovie}
                            onClick={() => {
                                sessionStorage.removeItem('nowIndex');
                                setIsShow(false);
                            }}
                        >
                            Phim Hot
                        </Link>
                    </li>
                    <li className={cx('item')}>
                        <Link
                            to={routes.oddmovie}
                            onClick={() => {
                                sessionStorage.removeItem('nowIndex');
                                setIsShow(false);
                            }}
                        >
                            Phim Lẻ
                        </Link>
                    </li>
                    <li className={cx('item')}>
                        <Link
                            to={routes.seriesmovie}
                            onClick={() => {
                                sessionStorage.removeItem('nowIndex');
                                setIsShow(false);
                            }}
                        >
                            Phim Bộ
                        </Link>
                    </li>
                    <li className={cx('item')}>
                        <Link
                            to={routes.newmovie}
                            onClick={() => {
                                sessionStorage.removeItem('nowIndex');
                                setIsShow(false);
                            }}
                        >
                            Phim mới
                        </Link>
                    </li>
                </div>

                <div className={cx('nav-user')}>
                    {!getValueUser ? (
                        <div
                            className={cx('btn-user')}
                            onClick={() => {
                                sessionStorage.removeItem('nowIndex');
                                setIsShow(false);
                            }}
                        >
                            <Link to={routes.login}>Đăng nhập</Link>
                        </div>
                    ) : (
                        JSON.parse(getValueUser).username
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header;
