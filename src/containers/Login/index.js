import React from 'react';
import { FiArrowRight } from "react-icons/fi";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import './index.scss';
import { Link } from 'react-router-dom';
import login from "../../assets/images/Login.jpeg"

function Login() {
  return (
    <div className="login">
        <div className="container">
            <div className="login-left">
                <div className="login-header">
                    <h1>Đăng nhập</h1>
                </div>
                <form className="login-form">
                    <div className="login-form-content">
                        <div className="form-item">
                            <label htmlFor="email">Email</label>
                            <input type="text" name="" id="email"/>
                        </div>
                        <div className="form-item">
                            <label htmlFor="password">Mật khẩu</label>
                            <input type="password" name="" id="password" />
                        </div>
                        <div className="form-item">
                            <div className="forgot-password">
                                <a href="#">Quên mật khẩu?</a>
                            </div>
                        </div>
                        <div className="login-bottom">
                            <button>
                                <Link to="/*" style={{ textDecoration: 'none', color: 'white' }}>Đăng nhập</Link>
                            </button>
                            <div className="login-bottom-register">
                                <Link to="/register" style={{ textDecoration: 'none', color: 'black' }}><p>Đăng ký</p></Link>
                                <FiArrowRight />
                            </div>
                        </div>
                    </div>
                    <div className="or">or</div> 
                    <div className="login-form-footer">
                        <a href="#">
                            <BsFacebook className='fb'/>
                            Facebook
                        </a>
                        <a href="#">
                            <FcGoogle/>
                            Google
                        </a>
                    </div>
                </form>
            </div>
            <div className="login-right">
                <img src={login} alt="1" />
            </div>
        </div>
    </div>
  )
}

export default Login