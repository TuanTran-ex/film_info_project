import classNames from 'classnames/bind';
import styles from './Register.module.scss';
import GoogleIcon from '@mui/icons-material/Google';
import routes from '../../config/routes';
const cx = classNames.bind(styles);
function Login() {
    const hanleClickLogin = () => {
        const getValueEmail = document.getElementsByClassName(
            cx('email'),
        ).value;
        console.log(getValueEmail);
        const getValuePass = document.getElementsByClassName(
            cx('password'),
        ).value;
        if (getValueEmail === null || getValuePass === null) {
            alert('Điền thông tin đăng nhập.');
            console.log('success');
        }
    };
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
                            // value=
                        />
                    </div>
                    <div className={cx('field')}>
                        <input
                            type="text"
                            className={cx('name')}
                            placeholder="Name"
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
                        <button
                            className={cx('btn-submit')}
                            onClick={() => hanleClickLogin()}
                        >
                            Đăng nhập
                        </button>
                    </div>
                    <div className={cx('divider')} data-content="HOẶC"></div>
                    <a href={routes.account} className={cx('btn-google-login')}>
                        <GoogleIcon className={cx('icon')} />
                        Đăng nhập với Google
                    </a>
                </div>

                <p className={cx('other')}>
                    <a href="/" className={cx('register')}>
                        Đăng nhập
                    </a>
                </p>
            </div>
        </div>
    );
}

export default Login;
