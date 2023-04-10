import { useState } from 'react';
import './signIn.scss';
import { AiOutlineEyeInvisible } from 'react-icons/ai';
import { AiOutlineEye } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import formikValidate from '../../config/formikValidate';
import { useDispatch } from 'react-redux';
import { ACTION_TYPES } from '../../constants/actionTypes';

const SingIn = () => {
    const [isShowPassword, setIsShowPassword] = useState(false);
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: formikValidate,
        onSubmit: (values) => {
            dispatch({ type: ACTION_TYPES.USER_LOGIN, payload: values });
        },
    });
    return (
        <div>
            <div className="sign-in">
                <div className="sign-in-title">
                    <h3>Sign in for faster checkout.</h3>
                </div>

                <form className="sign-in-form" onSubmit={formik.handleSubmit}>
                    <h3>Sign in to Apple Store</h3>

                    {formik.errors.email && formik.touched.email && (
                        <div className="sign-in-form-error">{formik.errors.email}</div>
                    )}
                    <div className="sign-in-form-control">
                        <input
                            type="text"
                            name="email"
                            placeholder="Apple ID"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                    </div>
                    {formik.errors.password && formik.touched.password && (
                        <div className="sign-in-form-error">{formik.errors.password}</div>
                    )}
                    <div className="sign-in-form-control">
                        <input
                            type={!isShowPassword ? 'password' : 'text'}
                            placeholder="Password"
                            name="password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                        />
                        {isShowPassword ? (
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
                        <button className="button" type="submit">
                            Sign in
                        </button>
                    </div>

                    <div className="sign-in-form-checkbox">
                        <input type="checkbox" id="remember" />
                        <label htmlFor="remember">Remember me</label>
                    </div>

                    <div className="sign-in-form-item">
                        <Link to="/forgot">Forgot Apple ID or password?</Link>
                    </div>
                    <p className="sign-in-form-item">
                        Don’t have an Apple ID? <Link to="/sign-up"> Create yours now.</Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default SingIn;
