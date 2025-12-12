import React, { useState } from 'react';


function RegistrationForm() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });

    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({       ...formData, [name]: value });  
    };

    const validate = () => {        
        const newErrors = {};
        if (!formData.username) newErrors.username = 'Username is required';    
        if (!formData.email) { newErrors.email = 'Email is required'; } 
        else if (!/\S+@\S+\.\S+/.test(formData.email)) { newErrors.email = 'Email is invalid'; }    
        if (!formData.password) newErrors.password = 'Password is required';        
        return newErrors;    
    };
    const handleSubmit = (e) => {
        e.preventDefault();        
        const validationErrors = validate();
        if (Object.keys(validationErrors).length === 0) {
            setSubmitted(true);
            setErrors({});
        } else {
            setErrors(validationErrors);
            setSubmitted(false);
        }   
    };

    return (    
        <div>
            <h2>Registration Form</h2>
            {submitted && <p className="success-message">Registration successful!</p>}      
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username:</label>
                    <input
                        type="text"
                        name="username"
                        value={formData.username}       
                        onChange={handleChange}
                    />
                    {errors.username && <span className="error">{errors.username}</span>}
                </div>
                <div>       
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    {errors.email && <span className="error">{errors.email}</span>}
                </div>
                <div>
                    <label>Password:</label>    
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />      
                    {errors.password && <span className="error">{errors.password}</span>}
                </div>
                <button type="submit">Register</button> 
            </form>
        </div>
    );
 }

export default RegistrationForm;