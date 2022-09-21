import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TelegramIcon from '@mui/icons-material/Telegram';
// --LIBRARY
const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('wrapper')}>
            <span className={cx('compare')}>
                Phim chất lượng cao online của <a href="/">XemPhim</a> khác gì
                so với các trang phim khác?
            </span>
            <ul className={cx('list')}>
                <li className={cx('item')}>
                    Là phim bluray (reencoded), có độ phân giải thấp nhất là
                    Full HD (1080p), trong khi hầu hết các trang phim khác chỉ
                    có tới độ phân giải HD (720p) là cao nhất
                </li>
                <li className={cx('item')}>
                    Chất lượng cao, lượng dữ liệu trên giây (bitrate) gấp từ 5 -
                    10 lần phim online thông thường - đây là yếu tố quyết định
                    độ nét của phim (thậm chí còn quan trọng hơn độ phân giải)
                </li>
                <li className={cx('item')}>
                    Âm thanh 5.1 (6 channel) thay vì stereo (2 channel) như các
                    trang phim khác (kể cả Youtube)
                </li>
                <li className={cx('item')}>
                    Phù hợp để xem trên màn hình TV, máy tính, laptop có độ phân
                    giải cao
                </li>
                <li className={cx('item')}>
                    Nếu không hài lòng với phụ đề có sẵn, bạn có thể tự upload
                    phụ đề của riêng mình để xem online
                </li>
                <li className={cx('item')}>
                    Có lựa chọn hiện phụ đề song ngữ (tức hiện đồng thời cả
                    tiếng Anh & tiếng Việt), phù hợp với những người muốn học
                    tiếng Anh qua phụ đề phim
                </li>
            </ul>

            <div className={cx('contact')}>
                <a href="/" className={cx('icon')}>
                    <EmailOutlinedIcon className={cx('email')} />
                </a>
                <a href="/" className={cx('icon')}>
                    <FacebookRoundedIcon className={cx('fb')} />
                </a>
                <a href="/" className={cx('icon')}>
                    <TelegramIcon className={cx('telegram')} />
                </a>
            </div>
        </div>
    );
}

export default Footer;
