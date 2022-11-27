import classNames from 'classnames/bind';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Register.module.scss';
import GoogleIcon from '@mui/icons-material/Google';
import routes from '../../config/routes';
///register
import authApi from '../../api/authApi';

const cx = classNames.bind(styles);
function Login() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    let navigate = useNavigate();
    const hanleClickLogin = () => {
        // const regex =
        // /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        //   const regex =
        const getValueEmail = document.getElementsByClassName(
            cx('email'),
        ).value;
        const getValueName = document.getElementsByClassName(cx('name')).value;
        const getValuePass = document.getElementsByClassName(
            cx('password'),
        ).value;

        // if (!regex.test(getValueEmail) || !regex.test(getValueName)) {
        //     alert('Dien thong tin hop le!');
        // }
        // console.log('ketqua: ', regex.test(getValueEmail));

        if (
            getValueEmail === undefined ||
            getValuePass === undefined ||
            getValueName === undefined
        ) {
            alert('Điền thông đầy đủ thông tin đăng ký');
            return;
        }

        //
        const register = async () => {
            try {
                const params = { email, username: name, password };
                console.log('param:', params);
                //kiem tra password, email
                if (
                    params.password.length <= 6 ||
                    params.password.length >= 50
                ) {
                    alert('Mat khau phai lon hon 6 ki tu ');
                    return;
                }

                const response = await authApi.register(params);
                const err = response.data.error; //err in resposive
                if (err) {
                    alert('Thông tin đăng ký không hợp lệ!');
                } else {
                    return navigate('/login');
                }
            } catch (error) {
                console.log('đăng ký không thành công', error);
            }
        };
        register();
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('block')}>
                <h2 className={cx('title')}>Đăng ký</h2>
                <div className={cx('box')}>
                    <form className={cx('field')} autoComplete="off">
                        <input
                            autoFocus
                            className={cx('email')}
                            onChange={(e) => setEmail(e.target.value)}
                            name="email"
                            required
                            placeholder="Email"
                            type="email"
                        />
                    </form>
                    <form className={cx('field')} autoComplete="off">
                        <input
                            className={cx('name')}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Ten"
                            required
                            type="text"
                        />
                    </form>
                    <form className={cx('field')} autoComplete="off">
                        <input
                            className={cx('password')}
                            onChange={(e) => setPassword(e.target.value)}
                            min={6}
                            max={20}
                            placeholder="Mat khau"
                            required
                            type="password"
                        />
                    </form>

                    <div className={cx('field')}>
                        <input type="checkbox" className={cx('checkbox')} />
                        <p>Đăng ký nhận thông báo về trang web</p>
                    </div>

                    <div className={cx('submit')}>
                        <button
                            className={cx('btn-submit')}
                            onClick={() => hanleClickLogin()}
                        >
                            Đăng ký
                        </button>
                    </div>
                    <div className={cx('divider')} data-content="HOẶC"></div>
                    <a href={routes.account} className={cx('btn-google-login')}>
                        <GoogleIcon className={cx('icon')} />
                        Đăng nhập với Google
                    </a>
                </div>

                <p className={cx('other')}>
                    <a href={routes.login} className={cx('register')}>
                        Đăng nhập
                    </a>
                </p>
            </div>
        </div>
    );
}

export default Login;
