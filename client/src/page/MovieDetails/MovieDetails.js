import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './MovieDetails.module.scss';

// --LIBRARY--
import Image from '../../components/image/Images';
import Header from '../../layouts/components/HeaderDefault';
import Season from '../../layouts/components/public/Season/Season';
import FoundSimilar from '../../layouts/components/public/FoundSimilar/FoundSimilar';
import Footer from '../../layouts/components/Footer';
// --ICON
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import FacebookIcon from '@mui/icons-material/Facebook';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import 'animate.css';
import { useMediaQuery } from 'react-responsive';
import React from 'react';
import routes from '../../config/routes';
const cx = classNames.bind(styles);

function MovieDetails({ item }) {
    const { id } = useParams();

    const castData = [
        {
            id: 1,
            image: 'https://image.tmdb.org/t/p/w138_and_h175_face/xXODQ5AX6pG4my8ieeEIuiAREXs.jpg',
            name: 'Frank Weller',
            character: 'Scooby-Doo / Fred / Interviewer (voice)',
        },
        {
            id: 2,
            image: 'https://image.tmdb.org/t/p/w138_and_h175_face/59kecPxxPIO8uwzaRZAOSDE1l80.jpg',
            name: 'Casey Kasem',
            character: 'Shaggy (voice)',
        },
        {
            id: 3,
            image: 'https://image.tmdb.org/t/p/w138_and_h175_face/anib3yRL9GyUvTkYNHWxQPlXLUH.jpg',
            name: 'Mindy Cohn',
            character: 'Velma(voice)',
        },
        {
            id: 4,
            image: 'https://image.tmdb.org/t/p/w138_and_h175_face/xr2GSp8Pm6fT5VGm0I9tsWVcZ8q.jpg',
            name: 'Mindy Cohn',
            character: 'Velma(voice)',
        },
        {
            id: 5,
            image: 'https://image.tmdb.org/t/p/w138_and_h175_face/qkOP1LnoOrQBMKrqmhrhrKiyxSj.jpg',
            name: 'Mindy Cohn',
            character: 'Velma(voice)',
        },
        {
            id: 6,
            image: 'https://image.tmdb.org/t/p/w138_and_h175_face/AfXRP33ncRunR83JPehZ06Kgh8e.jpg',
            name: 'Rhys Ifans',
            character: 'Otto Highttoew',
        },
        {
            id: 7,
            image: 'https://image.tmdb.org/t/p/w138_and_h175_face/wLXCCBQ6f456K2mQtbY8vgiOJoK.jpg',
            name: 'Rhys Ifans',
            character: 'Elanor',
        },
        {
            id: 8,
            image: 'https://image.tmdb.org/t/p/w138_and_h175_face/1Ocb9v3h54beGVoJMm4w50UQhLf.jpg',
            name: 'Joseph',
            character: 'Oren',
        },
        {
            id: 9,
            image: 'https://image.tmdb.org/t/p/w138_and_h175_face/rVc9M8pojcY7aHyKpx3iCZKWYIs.jpg',
            name: 'Rhys Ifans',
            character: 'Otto Highttoew',
        },
        {
            id: 10,
            image: 'https://image.tmdb.org/t/p/w138_and_h175_face/opKzRsU5iGJ8GDKO5HwC7ze5KHv.jpg',
            name: 'Rhys Ifans',
            character: 'Otto Highttoew',
        },
        {
            id: 11,
            image: 'https://image.tmdb.org/t/p/w138_and_h175_face/rVc9M8pojcY7aHyKpx3iCZKWYIs.jpg',
            name: 'Rhys Ifans',
            character: 'Otto Highttoew',
        },
        {
            id: 12,
            image: 'https://image.tmdb.org/t/p/w138_and_h175_face/opKzRsU5iGJ8GDKO5HwC7ze5KHv.jpg',
            name: 'Rhys Ifans',
            character: 'Otto Highttoew',
        },
        {
            id: 13,
            image: 'https://image.tmdb.org/t/p/w138_and_h175_face/rVc9M8pojcY7aHyKpx3iCZKWYIs.jpg',
            name: 'Rhys Ifans',
            character: 'Ottoh Highttoew',
        },
    ];

    const trailer = [
        {
            image: 'https://img.youtube.com/vi/s0vtbxLa-N8/mqdefault.jpg',
        },

        {
            image: 'https://img.youtube.com/vi/G-T2VsD4qnc/mqdefault.jpg',
        },
        {
            image: 'https://img.youtube.com/vi/ZpD8ik-fHMU/mqdefault.jpg',
        },
        {
            image: 'https://img.youtube.com/vi/i_mAWKyfj6c/mqdefault.jpg',
        },
        {
            image: 'https://img.youtube.com/vi/G-T2VsD4qnc/mqdefault.jpg',
        },
        {
            image: 'https://img.youtube.com/vi/ZpD8ik-fHMU/mqdefault.jpg',
        },
        {
            image: 'https://img.youtube.com/vi/i_mAWKyfj6c/mqdefault.jpg',
        },
    ];

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
    const isTablet = viewPort.width <= 1024; //bool //768
    const inTheMiddle = viewPort.width >= 1025 && viewPort.width <= 1200;

    let a2 = 4;
    //1024 - 1216

    // const [value, setValue] = useState(isTablet ? 4 : inTheMiddle ? 5 : 6);
    const [value, setValue] = useState(() => {
        let tam;
        if (isTablet) tam = 4;
        else if (!isTablet && inTheMiddle) tam = 5;
        else tam = 6;
        return tam;
    });
    const [valueofT, setValueofT] = useState(() => {
        let n;
        if (isTablet) n = 2;
        else if (!isTablet && inTheMiddle) n = 2;
        else n = 4;
        return n;
    });

    const [number, setNumber] = useState(0);
    const [array, setArray] = useState(castData.slice(number, value));
    const [index, setIndex] = useState(0);
    const [array2, setArray2] = useState(trailer.slice(index, valueofT));
    const [season, setSeason] = useState(true); //display : Season or FoundSimilar

    useEffect(() => {
        if (isTablet && value !== 4) {
            if (number === 0 || number === 5) {
                setArray(castData.slice(0, 4));
                setNumber(0);
            } else if (number % 4 === 0) {
                setArray(castData.slice(number, number + 4));
                setNumber(number);
            } else if (number % 4 === 2) {
                const temp = number - 2;
                setArray(castData.slice(temp, temp + 4));
                setNumber(temp);
            } else if (number % 4 !== 2) {
                //15 -25
                const a = number % 4;
                const temp = number - a;
                setArray(castData.slice(temp - 4, temp)); //8-12
                setNumber(temp);
            }

            setValue(4);
        } else if (!isTablet && inTheMiddle && value !== 5) {
            if (number === 0 || number === 4) {
                setArray(castData.slice(0, 5));
                setNumber(0);
            } else {
                if (number % 5 === 0) {
                    setArray(castData.slice(number, number + 5));
                    setNumber(number);
                } else if (number % 5 !== 0) {
                    const a = number % 5;
                    const temp = number - a;
                    setArray(castData.slice(temp, temp + 5));
                    setNumber(temp);
                }
            }
            setValue(5);
        } else if (!isTablet && !inTheMiddle && value !== 6) {
            if (number === 0) {
                setArray(castData.slice(0, 6));
            } else {
                if (number % 6 === 0) {
                    setArray(castData.slice(number, number + 6));
                    setNumber(number);
                } else if (number % 6 === 2) {
                    const temp = number - 2;
                    setArray(castData.slice(temp, temp + 6));
                    setNumber(temp);
                } else if (number % 6 === 4) {
                    const temp = number - 4;
                    setArray(castData.slice(temp, temp + 6));
                    setNumber(temp);
                } else if (number % 6 !== 2 && number % 6 !== 4) {
                    const a = number % 6;
                    const temp = number - a;
                    setArray(castData.slice(temp, temp + 6));
                    setNumber(temp);
                }
            }

            setValue(6);
        }
    }, [isTablet, viewPort.width]);

    useEffect(() => {
        if (isTablet && valueofT !== 2) {
            setArray2(trailer.slice(0, 2));
            setIndex(0);
            setValueofT(2);
        } else if (!isTablet && valueofT !== 4) {
            setArray2(trailer.slice(0, 4));
            setIndex(0);
            setValueofT(4);
        }
    }, [isTablet, viewPort.width]);

    const handleNext = () => {
        const nowIndex = number + value; //6
        setNumber(nowIndex);
        //sau khi set -> chay het ffc nay moi re-render Comp App -> number = nowIndex
        nowIndex + value <= castData.length //6 + 6 = 12
            ? setArray(castData.slice(nowIndex, nowIndex + value)) //cd new array = 6;
            : setArray(castData.slice(nowIndex, castData.length)); // cd  new array < 6
    };

    // nowIndex + a -> khi tru luon cho ket qua  number % 6 = 0 ->
    const handlePrev = () => {
        const nowIndex = number - value;
        setNumber(nowIndex);
        setArray(castData.slice(nowIndex, number));
    };

    //-- TRAILER
    const handleTrailerNext = () => {
        const nowIndex = index + valueofT;
        setIndex(nowIndex);
        nowIndex + valueofT <= trailer.length
            ? setArray2(trailer.slice(nowIndex, nowIndex + valueofT))
            : setArray2(trailer.slice(nowIndex, trailer.length));
    };

    const handleTrailerPrev = () => {
        const nowIndex = index - valueofT;
        setIndex(nowIndex);
        setArray2(trailer.slice(nowIndex, index));
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <Header />
            </div>

            <div className={cx('background')}>
                <Image
                    src="https://image.tmdb.org/t/p/original/5UaBZlO6RCKug49N4IA9yfztZJP.jpg"
                    alt="image"
                    className={cx('image')}
                />
            </div>

            <div className={cx('content')}>
                <div className={cx('container')}>
                    <div className={cx('details')}>
                        <div className={cx('column-left')}>
                            <div className={cx('film-image')}>
                                <Image
                                    src="https://image.tmdb.org/t/p/w342/wZccw4Hj9ZF1yimnfPsX9rl3HvB.jpg"
                                    // src={item.image}
                                    alt="image"
                                    className={cx('image')}
                                />
                            </div>
                            <a
                                href={routes.watching}
                                className={cx('button-play')}
                            >
                                <svg
                                    className={cx('icon')}
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 448 512"
                                >
                                    <path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path>
                                </svg>
                                <p className={cx('text')}>XEM PHIM </p>
                            </a>
                        </div>
                        <div className={cx('column-right')}>
                            <h3 className={cx('title')}>
                                Trick or Treat Scooby-Doo!
                            </h3>
                            <span className={cx('subtitle')}>
                                <p className={cx('sub')}>
                                    Trick or Treat Scooby-Doo!
                                </p>
                                <p className={cx('year')}> (2022)</p>
                            </span>

                            <span className={cx('meta', 'Imdh')}>
                                <svg
                                    className={cx('icon')}
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 48 48"
                                >
                                    <path
                                        d="M44 13H4c-2.2 0-4 1.8-4 4v16c0 2.2 1.8 4 4 4h40c2.2 0 4-1.8 4-4V17c0-2.2-1.8-4-4-4z"
                                        fill="#ffc107"
                                    ></path>
                                    <path
                                        d="M28.102 18h-3.704v13.102h3.704c2 0 2.796-.403 3.296-.704.602-.398.903-1.097.903-1.796v-7.903c0-.898-.403-1.699-.903-2-.796-.5-1.097-.699-3.296-.699zm.699 10.3c0 .598-.7.598-1.301.598V20c.602 0 1.3 0 1.3.602zM33.8 18v13.3h2.802s.199-.902.398-.698c.398 0 1.5.597 2.2.597.698 0 1.1 0 1.5-.199.6-.398.698-.7.698-1.3v-7.802c0-1.097-1.097-1.796-2-1.796-.898 0-1.796.597-2.199.898v-3zm3.598 4.2c0-.4 0-.598.403-.598.199 0 .398.199.398.597v6.602c0 .398 0 .597-.398.597-.2 0-.403-.199-.403-.597zM22.7 31.3V18h-4.4l-.8 6.3-1.102-6.3h-4v13.3h2.903v-7.402l1.3 7.403h2l1.297-7.403v7.403zM7.602 18h3.097v13.3H7.602z"
                                        fill="#263238"
                                    ></path>
                                </svg>
                                8.9
                            </span>
                            <div className={cx('genres')}>
                                <div className={cx('left')}>
                                    <a href="/" className={cx('item', 'share')}>
                                        <FacebookIcon className={cx('icon')} />
                                        Chia sẻ
                                    </a>

                                    <button className={cx('item', 'album')}>
                                        <AddOutlinedIcon
                                            className={cx('icon')}
                                        />
                                        <p className={cx('text')}>Bộ sưu tập</p>
                                    </button>
                                </div>
                                <div className={cx('right')}>
                                    <a href="/" className={cx('item')}>
                                        Kinh dị
                                    </a>
                                    <a href="/" className={cx('item')}>
                                        Hài hước - giật gân
                                    </a>

                                    <a href="/" className={cx('item')}>
                                        Ngôn tình
                                    </a>
                                </div>
                            </div>
                            <div className={cx('info')}>
                                <span className={cx('establish')}>
                                    <p> SÁNG LẬP</p>
                                    <a href="/">George R. R. Martin</a>,
                                    <a href="/">Ryan Condal</a>
                                </span>
                                <span className={cx('country')}>
                                    <p> QUỐC GIA</p>
                                    <a href="/">Mỹ</a>
                                </span>
                                <span className={cx('premiere')}>
                                    <p>KHỞI CHIẾU</p>
                                    <p className={cx('time')}>8/01/2022</p>
                                </span>
                            </div>
                            <div className={cx('description')}>
                                Sau 16 năm Batman và Scooby- Doo mới lại có cơ
                                hội lên film gặp lại nhau. Lần này Batman cùng
                                Plastic Man, Black Canary, Martian Manhunter,
                                The Question, Aquaman và Câu lạc bộ Bí ẩn sẽ hợp
                                tác cùng nhau chống lại lũ tội phạm Gotham và
                                điều tra về con quái vật "Khăn Quàng Đỏ"
                            </div>
                            <div className={cx('cast')}>
                                <span className={cx('intro')}>
                                    <p className={cx('header')}> DIỄN VIÊN</p>
                                    <p className={cx('icon')}>
                                        <KeyboardArrowLeftIcon
                                            className={
                                                castData.length <= value
                                                    ? cx('none')
                                                    : number === 0 //(cast.length > 6 and if(number = 0, dk dung) -> disable)
                                                    ? cx('disable', 'icon-left')
                                                    : cx('icon-left')
                                            }
                                            onClick={() => {
                                                if (number > 0) handlePrev();
                                            }}
                                        />
                                        <KeyboardArrowRightIcon
                                            className={
                                                castData.length <= value
                                                    ? cx('none')
                                                    : number + value >=
                                                      castData.length
                                                    ? cx(
                                                          'disable',
                                                          'icon-right',
                                                      )
                                                    : cx('icon-right')
                                            }
                                            onClick={() => {
                                                if (
                                                    number + value <
                                                    castData.length
                                                )
                                                    handleNext();
                                            }}
                                        />
                                    </p>
                                </span>
                                <div
                                    className={cx(
                                        'list',
                                        'animate__animated',
                                        'animate__slideInRight',
                                    )}
                                    key={number}
                                    //number thay doi -> array add new element -> add animation
                                >
                                    {array.map((item, key) => (
                                        <div key={key} className={cx('item')}>
                                            <a
                                                href={routes.casts.replace(
                                                    ':id',
                                                    item.id,
                                                )}
                                                className={cx('person')}
                                            >
                                                <figure>
                                                    <Image
                                                        src={item.image}
                                                        alt={item.name}
                                                        className={cx('image')}
                                                    />
                                                </figure>
                                            </a>
                                            <span>
                                                <a
                                                    href={routes.casts.replace(
                                                        ':id',
                                                        item.id,
                                                    )}
                                                    className={cx('name')}
                                                >
                                                    {item.name}
                                                </a>
                                                <p className={cx('character')}>
                                                    {item.character}
                                                </p>
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className={cx('trailer')}>
                                <span className={cx('intro')}>
                                    <p className={cx('header')}> TRAILER</p>
                                    <p className={cx('icon')}>
                                        <KeyboardArrowLeftIcon
                                            className={
                                                trailer.length <= valueofT
                                                    ? cx('none')
                                                    : index === 0
                                                    ? cx('disable', 'icon-left')
                                                    : cx('icon-left')
                                            }
                                            onClick={() => {
                                                if (index > 0)
                                                    handleTrailerPrev();
                                            }}
                                        />
                                        <KeyboardArrowRightIcon
                                            className={
                                                trailer.length <= valueofT
                                                    ? cx('none')
                                                    : index + valueofT >=
                                                      trailer.length
                                                    ? cx(
                                                          'disable',
                                                          'icon-right',
                                                      )
                                                    : cx('icon-right')
                                            }
                                            onClick={() => {
                                                if (
                                                    index + valueofT <
                                                    trailer.length
                                                )
                                                    handleTrailerNext();
                                            }}
                                        />
                                    </p>
                                </span>
                                <div
                                    className={cx(
                                        'list-trailer',
                                        'animate__animated',
                                        'animate__slideInRight',
                                    )}
                                    key={index}
                                    //index thay doi -> array2 add new element -> add animation
                                >
                                    {array2.map((item, index) => (
                                        <div
                                            key={index}
                                            className={cx('item-trailer')}
                                        >
                                            <div className={cx('clip')}>
                                                <Image
                                                    src={item.image}
                                                    className={cx(
                                                        'image-trailer',
                                                    )}
                                                />
                                                <a
                                                    href={routes.watching}
                                                    className={cx(
                                                        'button-play',
                                                    )}
                                                >
                                                    <svg
                                                        className={cx('icon')}
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 448 512"
                                                    >
                                                        <path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path>
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            {season === true ? <Season /> : <FoundSimilar />}
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('footer')}>
                <Footer />
            </div>
        </div>
    );
}

export default MovieDetails;
