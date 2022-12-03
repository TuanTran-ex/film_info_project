import classNames from 'classnames/bind';
import styles from './Settings.module.scss';

const cx = classNames.bind(styles);

function Settings() {
    const getUserName = localStorage.getItem('account');
    // const getEmail = localStorage.getItem('register');

    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <h2 className={cx('username')}>
                    {JSON.parse(getUserName).username}
                </h2>
                <div className={cx('info')}>
                    <div className={cx('date-joined')}>
                        Ngày gia nhập:
                        <p className={cx('date')}>14/11/2022 19:14</p>
                    </div>
                    <div className={cx('field-email')}>
                        <span className={cx('email')}>
                            Email: <p>{JSON.parse(getUserName).userEmail}</p>
                        </span>
                        <span className={cx('settings-email')}>
                            <a href="#" className={cx('change-email')}>
                                Đổi email
                            </a>
                            <a href="#" className={cx('change-password')}>
                                Đổi mật khẩu
                            </a>
                        </span>
                    </div>
                </div>
                <div className={cx('field')}>
                    <label className={cx('checkbox')}>
                        <input type="checkbox" name="censorSubtitle"></input>
                        <a href="#">Bật chế độ kiểm duyệt phụ đề</a>
                    </label>
                    <div className={cx('help')}>
                        Những từ ngữ tục, chửi thề... trong phụ đề sẽ được thay
                        bằng ký tự lạ
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Settings;
