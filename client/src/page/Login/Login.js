import classNames from 'classnames/bind';
import styles from './Login.module.scss';
import GoogleIcon from '@mui/icons-material/Google';

const cx = classNames.bind(styles);
function Login() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('block')}>
                <h2 className={cx('title')}>Đăng nhập</h2>
                <div className={cx('box')}>
                    <div className={cx('field')}>
                        <input
                            type="email"
                            className={cx('email')}
                            placeholder="Email"
                        />
                    </div>
                    <div className={cx('field')}>
                        <input
                            type="password"
                            className={cx('password')}
                            placeholder="Mat khau"
                        />
                    </div>

                    <div className={cx('field')}>
                        <input
                            type="checkbox"
                            className={cx('checkbox')}
                            placeholder="Mat khau"
                        />
                        <p>Ghi nhớ</p>
                    </div>

                    <div className={cx('submit')}>
                        <button className={cx('btn-submit')}>Đăng nhập</button>
                    </div>
                    <div className={cx('divider')} data-content="HOẶC"></div>
                    <button className={cx('btn-google-login')}>
                        <GoogleIcon className={cx('icon')} />
                        Đăng nhập với Google
                    </button>
                </div>

                <p className={cx('other')}>
                    <a href="/" className={cx('register')}>
                        Đăng ký
                    </a>
                    <a href="/" className={cx('forgot')}>
                        Quên mật khẩu
                    </a>
                </p>
            </div>
        </div>
    );
}

export default Login;
