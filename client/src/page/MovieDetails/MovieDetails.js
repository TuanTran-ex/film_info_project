import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './MovieDetails.module.scss';

// --LIBRARY--
import Image from '../../components/image/Images';
import Header from '../../layouts/components/Header';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import FacebookIcon from '@mui/icons-material/Facebook';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const cx = classNames.bind(styles);
function MovieDetails() {
    const castData = [
        {
            image: 'https://image.tmdb.org/t/p/w138_and_h175_face/xXODQ5AX6pG4my8ieeEIuiAREXs.jpg',
            name: 'Frank Weller',
            character: 'Scooby-Doo / Fred / Interviewer (voice)',
        },
        {
            image: 'https://image.tmdb.org/t/p/w138_and_h175_face/59kecPxxPIO8uwzaRZAOSDE1l80.jpg',
            name: 'Casey Kasem',
            character: 'Shaggy (voice)',
        },
        {
            image: 'https://image.tmdb.org/t/p/w138_and_h175_face/anib3yRL9GyUvTkYNHWxQPlXLUH.jpg',
            name: 'Mindy Cohn',
            character: 'Velma(voice)',
        },
        {
            image: 'https://image.tmdb.org/t/p/w138_and_h175_face/xr2GSp8Pm6fT5VGm0I9tsWVcZ8q.jpg',
            name: 'Mindy Cohn',
            character: 'Velma(voice)',
        },
        {
            image: 'https://image.tmdb.org/t/p/w138_and_h175_face/qkOP1LnoOrQBMKrqmhrhrKiyxSj.jpg',
            name: 'Mindy Cohn',
            character: 'Velma(voice)',
        },
        {
            image: 'https://image.tmdb.org/t/p/w138_and_h175_face/AfXRP33ncRunR83JPehZ06Kgh8e.jpg',
            name: 'Rhys Ifans',
            character: 'Otto Highttoew',
        },
        {
            image: 'https://image.tmdb.org/t/p/w138_and_h175_face/wLXCCBQ6f456K2mQtbY8vgiOJoK.jpg',
            name: 'Rhys Ifans',
            character: 'Elanor',
        },
        {
            image: 'https://image.tmdb.org/t/p/w138_and_h175_face/1Ocb9v3h54beGVoJMm4w50UQhLf.jpg',
            name: 'Joseph',
            character: 'Oren',
        },
        {
            image: 'https://image.tmdb.org/t/p/w138_and_h175_face/rVc9M8pojcY7aHyKpx3iCZKWYIs.jpg',
            name: 'Rhys Ifans',
            character: 'Otto Highttoew',
        },
        {
            image: 'https://image.tmdb.org/t/p/w138_and_h175_face/opKzRsU5iGJ8GDKO5HwC7ze5KHv.jpg',
            name: 'Rhys Ifans',
            character: 'Otto Highttoew',
        },
        {
            image: 'https://image.tmdb.org/t/p/w138_and_h175_face/rVc9M8pojcY7aHyKpx3iCZKWYIs.jpg',
            name: 'Rhys Ifans',
            character: 'Otto Highttoew',
        },
        {
            image: 'https://image.tmdb.org/t/p/w138_and_h175_face/opKzRsU5iGJ8GDKO5HwC7ze5KHv.jpg',
            name: 'Rhys Ifans',
            character: 'Otto Highttoew',
        },
        {
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

    const [number, setNumber] = useState(0);
    const [array, setArray] = useState(castData.slice(number, 6));
    const [index, setIndex] = useState(0);
    const [array2, setArray2] = useState(trailer.slice(index, 4));

    const handleNext = () => {
        const nowIndex = number + 6;
        setNumber(nowIndex);
        console.log('now: ', nowIndex);
        nowIndex + 6 <= castData.length
            ? setArray(castData.slice(nowIndex, nowIndex + 6))
            : setArray(castData.slice(nowIndex, castData.length));
    };

    // nowIndex luon + 6 -> khi tru luon cho ket qua  number % 6 = 0 ->
    console.log('number: ', number);
    const handlePrev = () => {
        const nowIndex = number - 6;
        setNumber(nowIndex);
        setArray(castData.slice(nowIndex, number));
    };

    //useState: sau khi duoc goi thi setState -> render lai comp

    // TRAILER

    const handleTrailerNext = () => {
        const nowIndex = index + 4;
        setIndex(nowIndex);
        console.log('now-trailer: ', nowIndex);
        nowIndex + 4 <= trailer.length
            ? setArray2(trailer.slice(nowIndex, nowIndex + 4))
            : setArray2(trailer.slice(nowIndex, trailer.length));
    };

    const handleTrailerPrev = () => {
        const nowIndex = index - 4;
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
                    <div className={cx('column-1')}>
                        <div className={cx('film-image')}>
                            <Image
                                src="https://image.tmdb.org/t/p/w342/wZccw4Hj9ZF1yimnfPsX9rl3HvB.jpg"
                                alt="image"
                                className={cx('image')}
                            />
                        </div>
                        <a href="/" className={cx('button-play')}>
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
                    <div className={cx('column-2')}>
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
                            5.6
                        </span>
                        <div className={cx('genres')}>
                            <div className={cx('left')}>
                                <a href="/" className={cx('item', 'share')}>
                                    <FacebookIcon className={cx('icon')} />
                                    Chia sẻ
                                </a>

                                <button className={cx('item', 'album')}>
                                    <AddOutlinedIcon className={cx('icon')} />
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
                            Sau 16 năm Batman và Scooby- Doo mới lại có cơ hội
                            lên film gặp lại nhau. Lần này Batman cùng Plastic
                            Man, Black Canary, Martian Manhunter, The Question,
                            Aquaman và Câu lạc bộ Bí ẩn sẽ hợp tác cùng nhau
                            chống lại lũ tội phạm Gotham và điều tra về con quái
                            vật "Khăn Quàng Đỏ"
                        </div>
                        <div className={cx('cast')}>
                            <span className={cx('intro')}>
                                <p className={cx('header')}> DIỄN VIÊN</p>
                                <p className={cx('icon')}>
                                    <KeyboardArrowLeftIcon
                                        className={cx('icon-left')}
                                        onClick={() => handlePrev()}
                                    />
                                    <KeyboardArrowRightIcon
                                        className={cx('icon-right')}
                                        onClick={() => handleNext()}
                                    />
                                </p>
                            </span>
                            <div className={cx('list')}>
                                {array.map((item, key) => (
                                    <div key={key} className={cx('item')}>
                                        <a
                                            href="/cast"
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
                                            <a href="/" className={cx('name')}>
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
                                        className={cx('icon-left')}
                                        onClick={() => handleTrailerPrev()}
                                    />
                                    <KeyboardArrowRightIcon
                                        className={cx('icon-right')}
                                        onClick={() => handleTrailerNext()}
                                    />
                                </p>
                            </span>
                            <div className={cx('list-trailer')}>
                                {array2.map((item, index) => (
                                    <div
                                        key={index}
                                        className={cx('item-trailer')}
                                    >
                                        <div className={cx('clip')}>
                                            <Image
                                                src={item.image}
                                                className={cx('image-trailer')}
                                            />
                                            <a
                                                href="/"
                                                className={cx('button-play')}
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
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MovieDetails;
