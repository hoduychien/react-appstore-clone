import { Link } from 'react-router-dom';
import './signUp.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useFormik } from 'formik';
import { SignUpformikValidate } from '../../config/formikValidate';
import { toast } from 'react-toastify';

const SignUp = () => {
    const [countries, setCountries] = useState([]);
    const [users, setUsers] = useState([]);

    const handleCreateUser = async (data) => {
        const response = await axios.post(`${process.env.REACT_APP_BACKEND_API}/users`, data);
        if (response && response.status == 201) {
            toast.success('Create account success ~', {
                position: 'bottom-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'light',
            });
        }
    };
    useEffect(() => {
        const getCountry = async () => {
            const response = await axios.get('https://restcountries.com/v3.1/all?fields=name');
            setCountries(response.data);
        };
        const getAllUsers = async () => {
            const user = await axios.get(`${process.env.REACT_APP_BACKEND_API}/users`);
            const data = user.data.data;
            setUsers(data);
        };
        getCountry();
        getAllUsers();
    }, []);

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            birthday: '',
            password: '',
            confirmPassword: '',
            image: '',
            country: '',
            phone: '',
            role: 'user',
        },
        validate: async (values) => {
            const errors = {};

            const userCheck = users.find((user) => user.email === values.email);
            if (userCheck) {
                errors.email = 'Email already exists !';
            }

            if (values.password !== undefined) {
                if (values.password !== values.confirmPassword) {
                    errors.confirmPassword = 'Passwords do not match !';
                }
            }
            return errors;
        },
        validationSchema: SignUpformikValidate,
        onSubmit: (values) => {
            const { firstName, lastName, email, birthday, password, confirmPassword, country, phone, role } = values;
            const data = {
                firstName,
                lastName,
                email,
                birthday,
                password,
                confirmPassword,
                country,
                phone,
                role,
            };

            handleCreateUser(data);
        },
    });

    return (
        <div>
            <div className="sign-up">
                <div className="sign-up-title">
                    <h3>Create Your Apple ID</h3>
                </div>
                <div className="sign-up-desc">
                    One Apple ID is all you need to access all Apple services. Already have an Apple ID?{' '}
                    <Link>Find it here</Link>
                </div>
                <form className="sign-up-form" onSubmit={formik.handleSubmit}>
                    <div className="sign-up-form-group">
                        <div className="sign-up-form-group-item">
                            {formik.errors.firstName && formik.touched.firstName && (
                                <div className="sign-in-form-error">{formik.errors.firstName}</div>
                            )}
                            <div
                                className={
                                    formik.errors.firstName && formik.touched.firstName
                                        ? 'sign-up-form-control sign-up-form-control-error'
                                        : 'sign-up-form-control '
                                }
                            >
                                <input
                                    type="text"
                                    name="firstName"
                                    placeholder="First Name"
                                    value={formik.values.firstName}
                                    onChange={formik.handleChange}
                                />
                            </div>
                        </div>

                        <div className="sign-up-form-group-item">
                            {formik.errors.lastName && formik.touched.lastName && (
                                <div className="sign-in-form-error">{formik.errors.lastName}</div>
                            )}
                            <div
                                className={
                                    formik.errors.lastName && formik.touched.lastName
                                        ? 'sign-up-form-control sign-up-form-control-error'
                                        : 'sign-up-form-control '
                                }
                            >
                                <input
                                    type="text"
                                    name="lastName"
                                    placeholder="Last Name"
                                    value={formik.values.lastName}
                                    onChange={formik.handleChange}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="sign-up-form-control">
                        <select name="country" value={formik.values.country} onChange={formik.handleChange}>
                            <option value="Vietnam">Vietnam</option>
                            {countries.map((country) => (
                                <option key={country.name.common} value={country.name.common}>
                                    {country.name.common}
                                </option>
                            ))}
                        </select>
                    </div>

                    {formik.errors.birthday && formik.touched.birthday && (
                        <div className="sign-in-form-error">{formik.errors.birthday}</div>
                    )}

                    <div
                        className={
                            formik.errors.birthday && formik.touched.birthday
                                ? 'sign-up-form-control sign-up-form-control-error'
                                : 'sign-up-form-control '
                        }
                    >
                        <input
                            type="text"
                            name="birthday"
                            placeholder="Birthday"
                            value={formik.values.birthday}
                            onChange={formik.handleChange}
                        />

                        {/* <DatePicker selected={startDate} name="birthday" onChange={(date) => setStartDate(date)} /> */}
                    </div>
                    {formik.errors.email && formik.touched.email && (
                        <div className="sign-in-form-error">{formik.errors.email}</div>
                    )}
                    <div
                        className={
                            formik.errors.email && formik.touched.email
                                ? 'sign-up-form-control sign-up-form-control-error'
                                : 'sign-up-form-control '
                        }
                    >
                        <input
                            type="text"
                            name="email"
                            placeholder="name@example.com"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                        />
                    </div>

                    {formik.errors.phone && formik.touched.phone && (
                        <div className="sign-in-form-error">{formik.errors.phone}</div>
                    )}

                    <div
                        className={
                            formik.errors.phone && formik.touched.phone
                                ? 'sign-up-form-control sign-up-form-control-error'
                                : 'sign-up-form-control '
                        }
                    >
                        <input
                            type="text"
                            name="phone"
                            placeholder="Phone number"
                            value={formik.values.phone}
                            onChange={formik.handleChange}
                        />
                    </div>

                    {formik.errors.password && formik.touched.password && (
                        <div className="sign-in-form-error">{formik.errors.password}</div>
                    )}

                    <div
                        className={
                            formik.errors.password && formik.touched.password
                                ? 'sign-up-form-control sign-up-form-control-error'
                                : 'sign-up-form-control '
                        }
                    >
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                        />
                    </div>

                    {formik.errors.confirmPassword && formik.touched.confirmPassword && (
                        <div className="sign-in-form-error">{formik.errors.confirmPassword}</div>
                    )}
                    <div
                        className={
                            formik.errors.confirmPassword && formik.touched.confirmPassword
                                ? 'sign-up-form-control sign-up-form-control-error'
                                : 'sign-up-form-control '
                        }
                    >
                        <input
                            type="password"
                            name="confirmPassword"
                            placeholder="Confirm password"
                            value={formik.values.confirmPassword}
                            onChange={formik.handleChange}
                        />
                    </div>

                    <div className="sign-in-form-action">
                        <button className="button" type="submit">
                            Sign Up
                        </button>
                    </div>

                    <p className="sign-in-form-item">
                        Already have an account? <Link to="/sign-in"> Login.</Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
