import React from 'react';
import { FiArrowRight } from "react-icons/fi";
import { Link } from 'react-router-dom';
import './index.scss';
import register from "../../assets/images/Login.jpeg"

function Register() {
  return (
    <div className='register'>
        <div className="container">
            <div className="register-left">
                <img src={register} alt="1" />
            </div>
            <div className="register-right">
                <div className="register-header">
                    <h1>Đăng ký</h1>
                </div>
                <form className="register-form">
                    <div className="register-form-content">
                        <div className="form-item">
                            <label htmlFor="name">Họ và tên</label>
                            <input type="text" name="" id="name" />
                        </div>
                        <div className="form-item">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="" id="email" />
                        </div>
                        <div className="form-item">
                            <label htmlFor="password">Mật khẩu</label>
                            <input type="password" name="" id="password" />
                        </div>
                        <div className="form-item">
                            <label htmlFor="confirm-password">Xác nhận mật khẩu</label>
                            <input type="password" name="" id="confirm-password" />
                        </div>
                        <div className="register-bottom">
                            <button type='submit'>
                            <Link to="/register" style={{ textDecoration: 'none', color: 'white' }}>Đăng ký</Link>
                            </button>
                            <div className="register-bottom-login">
                                <Link to="/login" style={{ textDecoration: 'none', color: 'black' }}><p>Đăng nhập</p></Link>
                                <FiArrowRight />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Register