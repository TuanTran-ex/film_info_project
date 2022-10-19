import classNames from 'classnames/bind';
import styles from './Season.module.scss';

const cx = classNames.bind(styles);
function Season() {
    return <div className={cx('wrapper')}></div>;
}

export default Season;
