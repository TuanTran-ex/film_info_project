import { useState, useRef, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './Pagination.module.scss';

const cx = classNames.bind(styles);

function Pagination({ handleClickPage, nowIndex }) {
    //1 //nowIndex = 6
    const totalPage = 35;
    const [page, setPage] = useState(1);
    const [count, setCount] = useState(nowIndex);
    const tmp = [];
    for (let i = nowIndex; i <= nowIndex + 3 && i <= totalPage; i++) {
        tmp.push(i);
    }
    const [array, setArray] = useState(tmp);
    const prevPage = useRef(count);

    const handleClick = (index) => {
        handleClickPage(index);
        setPage(index); //page thay doi
        setCount(index); //count thay doi theo index
    };

    //3. chay sau moi lan render comp
    useEffect(() => {
        prevPage.current = count;
    });

    const handleClickNextPage = () => {
        setCount((prev) => prev + 1);
        const nextNumber = count + 1;
        if (nextNumber >= 5 && count % 4 === 0) {
            //điều kiện hiển thị 4 item sau
            const tmp = [];
            for (let i = count + 1; i <= count + 4; i++) {
                if (i <= totalPage) tmp.push(i);
            }
            setArray(tmp);
        }
        setPage(nextNumber); //setPage -> active
        handleClickPage(nextNumber); // lay count + 1 -> render sang trang tiep theo
    };

    const handleClickPrevPage = () => {
        setCount((prev) => prev - 1);
        const prevNumber = count - 1;
        //hien thi 4 item trước
        if (prevNumber % 4 === 0)
            setArray([count - 4, count - 3, count - 2, count - 1]);
        setPage(prevNumber); //setPage -> active
        handleClickPage(prevNumber);
    };
    // const temp = array;

    //2.useEffect: render xong -> useEffect thuc thi
    return (
        <div className={cx('wrapper')}>
            <ul className={cx('list')}>
                {array.map((item, index) => (
                    <li key={index} className={cx('item')}>
                        <button
                            onClick={() => handleClick(item)}
                            className={nowIndex === item ? cx('active') : ''}
                        >
                            {item}
                        </button>
                    </li>
                ))}
                {totalPage !== 35 ? <li className={cx('doc')}>...</li> : ''}
            </ul>

            <div className={cx('box')}>
                <button
                    className={cx('prev-page')}
                    onClick={() => {
                        if (count > 1) handleClickPrevPage();
                    }}
                >
                    Trang trước
                </button>
                <button
                    className={cx('next-page')}
                    onClick={() => {
                        if (count < 35) handleClickNextPage();
                    }}
                >
                    Trang sau
                </button>
            </div>
        </div>
    );
}

export default Pagination;
