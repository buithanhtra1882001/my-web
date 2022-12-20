import React from 'react';
import { FiArrowRight } from "react-icons/fi";
import './index.scss';

function Register() {
  return (
    <div className='register'>
        <div className="container">
            <div className="register-left">
                <img src="https://s3-alpha-sig.figma.com/img/a047/4723/bccd8a0346d8564e060842b0b4b62f80?Expires=1672617600&Signature=GZF9dstqN-r4DnEThgMdSiSNlcXtccOAxECu1BfXbJGmEuKUZO6OB7MQHj~rXuv0g3QKAMV1HgC~SN-9kKYamF7JO4ptpcv2oxmjfQEqgkc~flNB6httD17ZhsYcsor9WMvUkH6qiuOeCx0RE1NcgF54VgyuFdo2wHyoa2Kzn1xGsb-F4usQEXzej4spklFqwcuxA4fzafd60azXk4~DuAt0w~rAG7DShavXb3w1-mr20Ch64nzUgUEzENQGZL-EIOhkN6KvMFB7IENLrYoRVrJozXyozdBgjHLy2uIZOpOTo0qRAmJ87VTa1KCWHuScLINX1NoUY80l9SJy5X3zzw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
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
                                <p>Đăng nhập</p>
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