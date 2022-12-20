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
                            <button type='submit'>Đăng nhập</button>
                            <div className="login-bottom-register">
                                <p>Đăng ký</p>
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
                <img src="https://s3-alpha-sig.figma.com/img/a047/4723/bccd8a0346d8564e060842b0b4b62f80?Expires=1672617600&Signature=GZF9dstqN-r4DnEThgMdSiSNlcXtccOAxECu1BfXbJGmEuKUZO6OB7MQHj~rXuv0g3QKAMV1HgC~SN-9kKYamF7JO4ptpcv2oxmjfQEqgkc~flNB6httD17ZhsYcsor9WMvUkH6qiuOeCx0RE1NcgF54VgyuFdo2wHyoa2Kzn1xGsb-F4usQEXzej4spklFqwcuxA4fzafd60azXk4~DuAt0w~rAG7DShavXb3w1-mr20Ch64nzUgUEzENQGZL-EIOhkN6KvMFB7IENLrYoRVrJozXyozdBgjHLy2uIZOpOTo0qRAmJ87VTa1KCWHuScLINX1NoUY80l9SJy5X3zzw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Login