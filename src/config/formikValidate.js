import * as Yup from 'yup';

const formikValidate = Yup.object({
    email: Yup.string().email('Invalid Email').required('You must fill in this section !'),
    password: Yup.string()
        .min(6, 'Password must be at least 6 characters !')
        .max(20, `Password can't be more than 20 characters !`)
        .required('You must fill in this section !'),
    firstName: Yup.string()
        .min(3, 'First Name must be at least 3 characters !')
        .max(20, `First Name can't be more than 20 characters !`)
        .required('You must fill in this section !'),
    lastName: Yup.string()
        .min(3, 'Last Name must be at least 3 characters !')
        .max(20, `Last Name can't be more than 20 characters !`)
        .required('You must fill in this section !'),
    phone: Yup.string()
        .min(10, 'Phone must be at least 10 characters !')
        .max(10, `Phone can't be more than 10 characters !`),
});

export default formikValidate;
