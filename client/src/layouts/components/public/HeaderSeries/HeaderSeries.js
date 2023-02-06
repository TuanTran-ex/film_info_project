import classNames from 'classnames/bind';
import styles from '../Header/Header.module.scss';
import styleSeries from './HeaderSeries.module.scss';
// LIBRARY
import ListIcon from '@mui/icons-material/List';
import AppsIcon from '@mui/icons-material/Apps';
const cx = classNames.bind(styles, styleSeries);

function HeaderSeries({
    listCategory,
    listGender,
    listCountry,
    handleClick,
    isList,
}) {
    return (
        <div className={cx('wrapper', 'grid')}>
            <div className={cx('row', 'block')}>
                <div className={cx('column', 'type', 'm-4', 'c-6')}>
                    <label className={cx('title')}>Loại phim</label>
                    <div className={cx('control')}>
                        <select className={cx('list')}>
                            <option className={cx('item')}>-- Tất cả --</option>
                            {listCategory.map((item, index) => (
                                <option
                                    className={cx('item')}
                                    value={item.name}
                                    key={index}
                                >
                                    {item.name}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className={cx('column', 'type', 'm-4', 'c-6')}>
                    <label className={cx('title')}>Thể loại</label>
                    <div className={cx('control')}>
                        <select className={cx('list')}>
                            <option className={cx('item')}>-- Tất cả --</option>
                            {listGender.map((item, index) => (
                                <option
                                    className={cx('item')}
                                    value={item.name}
                                    key={index}
                                >
                                    {item.name}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className={cx('column', 'type', 'm-4', 'c-6')}>
                    <label className={cx('title')}>Quốc gia</label>
                    <div className={cx('control')}>
                        <select className={cx('list')}>
                            <option className={cx('item')}>-- Tất cả --</option>
                            {listCountry.map((item, index) => (
                                <option
                                    className={cx('item')}
                                    value={item.name}
                                    key={index}
                                >
                                    {item.name}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className={cx('column', 'type', 'm-4', 'c-6')}>
                    <label className={cx('title')}>Năm</label>
                    <div className={cx('control')}>
                        <select className={cx('list')}>
                            <option className={cx('item')}>-- Tất cả --</option>
                            <option value="2022" className={cx('item')}>
                                2022
                            </option>
                            <option value="2021" className={cx('item')}>
                                2021
                            </option>
                            <option value="2020" className={cx('item')}>
                                2020
                            </option>
                            <option value="2019" className={cx('item')}>
                                2019
                            </option>
                            <option value="2018" className={cx('item')}>
                                2018
                            </option>
                            <option value="2017" className={cx('item')}>
                                2017
                            </option>
                            <option value="2016" className={cx('item')}>
                                2016
                            </option>
                            <option value="2015" className={cx('item')}>
                                2015
                            </option>
                            <option value="before-2015" className={cx('item')}>
                                Trước 2015
                            </option>
                        </select>
                    </div>
                </div>
                <div className={cx('column', 'type', 'm-4', 'c-6')}>
                    <label className={cx('title')}>Sắp xếp</label>
                    <div className={cx('control')}>
                        <select className={cx('list')}>
                            <option className={cx('item')}>
                                Ngày cập nhật
                            </option>
                            <option value="movie" className={cx('item')}>
                                Ngày phát hành
                            </option>
                            <option value="movie" className={cx('item')}>
                                Điểm đánh giá
                            </option>
                        </select>
                    </div>
                </div>

                <div className={cx('display', 'column')}>
                    <p>Hiển thị</p>
                    <div className={cx('field')}>
                        <button
                            className={
                                isList ? cx('list') : cx('list', 'disable')
                            }
                            onClick={() => handleClick(true)}
                        >
                            <ListIcon className={cx('icon')} />
                        </button>
                        <button
                            className={
                                !isList ? cx('app') : cx('app', 'disable')
                            }
                            onClick={() => handleClick(false)}
                        >
                            <AppsIcon className={cx('icon-app')} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeaderSeries;
