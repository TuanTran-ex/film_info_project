import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Login.module.scss';
import GoogleIcon from '@mui/icons-material/Google';
//login;
import routes from '../../config/routes';
import authApi from '../../api/authApi';
import { useNavigate } from 'react-router-dom';
const cx = classNames.bind(styles);
function Login() {
    const [userName, setUserName] = useState('');
    const [passWord, setPassWord] = useState('');
    const getUserName = localStorage.getItem('');
    let navigate = useNavigate('account');

    const hanleClickLogin = () => {
        const regex =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (userName === '' || passWord === '') {
            alert('Điền thông tin đăng nhập.');
            console.log('success');
        }
        // else if (!regex.test(userName)) {
        //     alert('Điền đúng userName');
        // }

        const login = async () => {
            try {
                const params = { username: userName, password: passWord };
                console.log(params);
                const response = await authApi.login(params);
                const err = response.data.error;
                if (err) {
                    alert('Thông tin đăng nhập không hợp lệ!');
                } else {
                    //dung ->setItem
                    localStorage.setItem(
                        'account',
                        JSON.stringify({
                            accessToken: response.data.accessToken,
                            username: userName,
                        }),
                    );
                    return navigate('/');
                }
            } catch (error) {
                console.log('Đăng nhập không thành công!', error);
            }
        };
        login();
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('block')}>
                <h2 className={cx('title')}>Đăng nhập</h2>
                <div className={cx('box')}>
                    <div className={cx('field')}>
                        <input
                            type="text"
                            onChange={(e) => setUserName(e.target.value)}
                            className={cx('userName')}
                            placeholder="Ten dang nhap"
                        />
                    </div>
                    <div className={cx('field')}>
                        <input
                            type="password"
                            onChange={(e) => setPassWord(e.target.value)}
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
                    <a href={routes.register} className={cx('register')}>
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
