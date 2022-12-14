import React from 'react';
import { FiArrowRight } from "react-icons/fi";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import './index.scss';

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
                            <input type="text" name="" id="email" />
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
                            <button type='submit'>Đăng nhập</button>
                            <div className="login-bottom-register">
                                <spam>Đăng ký</spam>
                                <FiArrowRight />
                            </div>
                        </div>
                    </div>
                    <span>or</span> 
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
                <img src="https://s3-alpha-sig.figma.com/img/a047/4723/bccd8a0346d8564e060842b0b4b62f80?Expires=1669593600&Signature=AgV1Ub1KYMi5jvHxWZMPb5s1YIp4IaatiTS2fTEuIgXXvKkKddJUDaaV5Am6MoBB1rcT8wq2GsluFb3FrvgeZ4aObhibcRKWcW0xWMNAK0QmAddTL-W~l70rebR92xsoUVa2GvEsdaZxfKPahQrprR6184-Li1063UP0v5IzhEOmsjdI3Z5ROTjhl5vpW05DQbgK6CfMS8PAMzfm6-u4VwnW31dm1otttV~uq843BpV2UCKe~s6-5x0ebWQKiVuZnh9phtfiH5UEOrOEx-E8P2o4GxNC49O4pzKkJbcjjh-vfevgV4eyFMog-ShW70c32X~KFkVY4i7qgP4-AemZiQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Login