import classNames from 'classnames/bind';
import styles from './SeriesMovie.module.scss';

const cx = classNames.bind(styles);

function SeriesMovie() {
    return <div className={cx('wrapper')}></div>;
}

export default SeriesMovie;
