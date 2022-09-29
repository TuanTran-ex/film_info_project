import classNames from 'classnames/bind';
import styles from './HotMovie.module.scss';

const cx = classNames.bind(styles);

function HotMovie() {
    return <div className={cx('wrapper')}></div>;
}

export default HotMovie;
