//--LIBRARY--
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import { publicRoutes } from '../../../routes';
import './14_LIBRARY.css';
import './Responsive.css';

const cx = classNames.bind(styles);

function Header({ listCategory, listGender, listCountry }) {
    
    return (
        <div className={cx('wrapper', 'grid')}>
            <div className={cx('row', 'block')}>
                <div className={cx('column', 'l-2', 'm-4', 'c-6', 'type')}>
                    <label className={cx('title')}>Loại phim</label>
                    <div className={cx('control')}>
                        <select className={cx('list')}>
                            <option className={cx('item')}>-- Tất cả --</option>
                            {listCategory.map((item, index) => (
                                <option
                                    className={cx('item')}
                                    value={publicRoutes[2].path}
                                    key={index}
                                >
                                    {item.name}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className={cx('column', 'l-2', 'm-4', 'c-6', 'type')}>
                    <label className={cx('title')}>Thể loại</label>
                    <div className={cx('control')}>
                        <select className={cx('list')}>
                            <option className={cx('item')}>-- Tất cả --</option>
                            {listGender.map((item, index) => (
                                <option
                                    className={cx('item')}
                                    value={publicRoutes[2].path}
                                    key={index}
                                >
                                    {item.name}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className={cx('column', 'l-2', 'm-4', 'c-6', 'type')}>
                    <label className={cx('title')}>Quốc gia</label>
                    <div className={cx('control')}>
                        <select className={cx('list')}>
                            <option className={cx('item')}>-- Tất cả --</option>
                            {listCountry.map((item, index) => (
                                <option
                                    className={cx('item')}
                                    value={publicRoutes[2].path}
                                    key={index}
                                >
                                    {item.name}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className={cx('column', 'l-2', 'm-4', 'c-6', 'type')}>
                    <label className={cx('title')}>Năm</label>
                    <div className={cx('control')}>
                        <select className={cx('list')}>
                            <option className={cx('item')}>-- Tất cả --</option>
                            {listCategory.map((item, index) => (
                                <option
                                    className={cx('item')}
                                    value={publicRoutes[2].path}
                                    key={index}
                                >
                                    {item.name}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className={cx('column', 'l-2', 'm-4', 'c-6', 'type')}>
                    <label className={cx('title')}>Thời lượng</label>
                    <div className={cx('control')}>
                        <select className={cx('list')}>
                            <option className={cx('item')}>-- Tất cả --</option>
                            {listCategory.map((item, index) => (
                                <option
                                    className={cx('item')}
                                    value={publicRoutes[2].path}
                                    key={index}
                                >
                                    {item.name}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className={cx('column', 'l-2', 'm-4', 'c-6', 'type')}>
                    <label className={cx('title')}>Sắp xếp</label>
                    <div className={cx('control')}>
                        <select className={cx('list')}>
                            <option className={cx('item')}>-- Tất cả --</option>
                            {listCategory.map((item, index) => (
                                <option
                                    className={cx('item')}
                                    value={publicRoutes[2].path}
                                    key={index}
                                >
                                    {item.name}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
