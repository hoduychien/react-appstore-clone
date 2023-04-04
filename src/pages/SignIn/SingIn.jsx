import { useState } from 'react';
import './signIn.scss';
import { AiOutlineEyeInvisible } from 'react-icons/ai';
import { AiOutlineEye } from 'react-icons/ai';
const SingIn = () => {
    const [isShowPassword, setIsShowPassword] = useState(false);
    return (
        <div>
            <div className="sign-in">
                <div className="sign-in-title">
                    <h3>Sign in for faster checkout.</h3>
                </div>

                <form className="sign-in-form">
                    <h3>Sign in to Apple Store</h3>
                    <div className="sign-in-form-error">Lorem ipsum dolor sit amet.</div>
                    <div className="sign-in-form-control">
                        <input type="text" placeholder="Apple ID" />
                    </div>
                    <div className="sign-in-form-error">Lorem ipsum dolor sit amet.</div>
                    <div className="sign-in-form-control">
                        <input type={isShowPassword ? 'password' : 'text'} placeholder="Password" />
                        {!isShowPassword ? (
                            <AiOutlineEyeInvisible
                                className="sign-in-form-icon"
                                onClick={() => {
                                    setIsShowPassword(!isShowPassword);
                                }}
                            />
                        ) : (
                            <AiOutlineEye
                                className="sign-in-form-icon"
                                onClick={() => {
                                    setIsShowPassword(!isShowPassword);
                                }}
                            />
                        )}
                    </div>
                    <div className="sign-in-form-action">
                        <button className="button ">Sign in</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SingIn;
