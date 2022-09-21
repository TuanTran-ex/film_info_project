//--LIBRARY--
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import { publicRoutes } from '../../../routes';
import './14_LIBRARY.css';
import './Responsive.css';

const cx = classNames.bind(styles);

function Header({ category }) {
    return (
        <div className={cx('wrapper', 'grid')}>
            <div className={cx('row', 'block')}>
                <div className={cx('column', 'l-2', 'm-4', 'c-6', 'type')}>
                    <label className={cx('title')}>Loại phim</label>
                    <div className={cx('control')}>
                        <select className={cx('list')}>
                            <option className={cx('item')}>-- Tất cả --</option>
                            {category.map((item, index) => (
                                <option
                                    className={cx('item')}
                                    value={publicRoutes[2].path}
                                    key={index}
                                >
                                    {item}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className={cx('column', 'l-2', 'm-4', 'c-6', 'type')}>
                    <label className={cx('title')}>Loại phim</label>
                    <div className={cx('control')}>
                        <select className={cx('list')}>
                            <option className={cx('item')}>-- Tất cả --</option>
                            {category.map((item, index) => (
                                <option
                                    className={cx('item')}
                                    value={publicRoutes[2].path}
                                    key={index}
                                >
                                    {item}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className={cx('column', 'l-2', 'm-4', 'c-6', 'type')}>
                    <label className={cx('title')}>Loại phim</label>
                    <div className={cx('control')}>
                        <select className={cx('list')}>
                            <option className={cx('item')}>-- Tất cả --</option>
                            {category.map((item, index) => (
                                <option
                                    className={cx('item')}
                                    value={publicRoutes[2].path}
                                    key={index}
                                >
                                    {item}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className={cx('column', 'l-2', 'm-4', 'c-6', 'type')}>
                    <label className={cx('title')}>Loại phim</label>
                    <div className={cx('control')}>
                        <select className={cx('list')}>
                            <option className={cx('item')}>-- Tất cả --</option>
                            {category.map((item, index) => (
                                <option
                                    className={cx('item')}
                                    value={publicRoutes[2].path}
                                    key={index}
                                >
                                    {item}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className={cx('column', 'l-2', 'm-4', 'c-6', 'type')}>
                    <label className={cx('title')}>Loại phim</label>
                    <div className={cx('control')}>
                        <select className={cx('list')}>
                            <option className={cx('item')}>-- Tất cả --</option>
                            {category.map((item, index) => (
                                <option
                                    className={cx('item')}
                                    value={publicRoutes[2].path}
                                    key={index}
                                >
                                    {item}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className={cx('column', 'l-2', 'm-4', 'c-6', 'type')}>
                    <label className={cx('title')}>Loại phim</label>
                    <div className={cx('control')}>
                        <select className={cx('list')}>
                            <option className={cx('item')}>-- Tất cả --</option>
                            {category.map((item, index) => (
                                <option
                                    className={cx('item')}
                                    value={publicRoutes[2].path}
                                    key={index}
                                >
                                    {item}
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
