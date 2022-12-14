import React from 'react';
import { FiArrowRight } from "react-icons/fi";
import './index.scss';

function Register() {
  return (
    <div className='register'>
        <div className="container">
            <div className="register-left">
                <img src="https://s3-alpha-sig.figma.com/img/a047/4723/bccd8a0346d8564e060842b0b4b62f80?Expires=1669593600&Signature=AgV1Ub1KYMi5jvHxWZMPb5s1YIp4IaatiTS2fTEuIgXXvKkKddJUDaaV5Am6MoBB1rcT8wq2GsluFb3FrvgeZ4aObhibcRKWcW0xWMNAK0QmAddTL-W~l70rebR92xsoUVa2GvEsdaZxfKPahQrprR6184-Li1063UP0v5IzhEOmsjdI3Z5ROTjhl5vpW05DQbgK6CfMS8PAMzfm6-u4VwnW31dm1otttV~uq843BpV2UCKe~s6-5x0ebWQKiVuZnh9phtfiH5UEOrOEx-E8P2o4GxNC49O4pzKkJbcjjh-vfevgV4eyFMog-ShW70c32X~KFkVY4i7qgP4-AemZiQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="" />
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
                            <button type='submit'>Đăng ký</button>
                            <div className="register-bottom-login">
                                <button>Đăng nhập</button>
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