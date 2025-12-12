import from 'formik';
import React from 'react';
import * as Yup from 'yup';

const FormikForm = () => {
    const initialValues = {
        username: '',
        email: '',
        password: ''
    };      
    const validationSchema = Yup.object({
        username: Yup.string().required('Username is required'),
        email: Yup.string().email('Email is invalid').required('Email is required'),
        password: Yup.string().required('Password is required')
    });
    const handleSubmit = (values, { setSubmitting, resetForm }) => {
        console.log('Form data', values);
        setSubmitting(false);
        resetForm();
    };
    return (
        <div>
            <h2>Registration Form</h2>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit} 
            >
                {({ isSubmitting }) => (
                    <Form>  
                        <div>
                            <label>Username:</label>
                            <Field type="text" name="username" />
                            <ErrorMessage name="username" component="span" className="error" />
                        </div>
                        <div>
                            <label>Email:</label>
                            <Field type="email" name="email" />
                            <ErrorMessage name="email" component="span" className="error" />
                        </div>
                        <div>
                            <label>Password:</label>
                            <Field type="password" name="password" />
                            <ErrorMessage name="password" component="span" className="error" />
                        </div>  
                        <button type="submit" disabled={isSubmitting}>
                            Register
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}   ;

export default FormikForm;