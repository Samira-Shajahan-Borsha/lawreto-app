import React, { useContext, useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import { FaExclamationCircle } from "react-icons/fa";

const Register = () => {

    const { createUser } = useContext(AuthContext);

    const [userInfo, setUserInfo] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [errors, setErrors] = useState({
        nameError: '',
        emailError: '',
        passwordError: '',
        confirmPasswordError: ''
    });

    const handleSubmit = event => {

        event.preventDefault();
        const form = event.target;

    }

    const handleNameBlur = nameInput => {

        if (nameInput === '') {
            setErrors({ ...errors, nameError: 'Enter a name for your profile.' });
        }
        else {
            setUserInfo({ ...userInfo, name: nameInput });
            setErrors({ ...errors, nameError: '' });
        }
    }


    const handleEmailBlur = (emailInput) => {

        const emailRegx = /^\S+@\S+\.\S+$/;
        const validEmail = emailRegx.test(emailInput);

        if (emailInput === '') {
            setErrors({ ...errors, emailError: "You need to enter your email." });
        }
        else if (validEmail) {
            setUserInfo({ ...userInfo, email: emailInput });
            setErrors({ ...errors, emailError: '' });
        }
        else {
            setErrors({ ...errors, emailError: "This email is invalid. Make sure it's written like example@email.com." });
            setUserInfo({ ...userInfo, email: '' });
        }
    }

    const handlePasswordBlur = (passwordInput) => {

        const passwordRegx = /(?=^.{6,}$)/;
        const validPassword = passwordRegx.test(passwordInput);

        if (passwordInput === '') {
            setErrors({ ...errors, passwordError: 'You need to enter a password.' })
        }
        else if (validPassword) {
            setUserInfo({ ...userInfo, password: passwordInput });
            setErrors({ ...errors, passwordError: '' });
        }
        else {
            setErrors({ ...errors, passwordError: 'Password is too short.' });
            setUserInfo({ ...userInfo, password: '' });
        }
    }

    const handleConfirmPasswordBlur = confirmPasswordInput => {

        if (confirmPasswordInput === '') {
            setErrors({...errors, confirmPasswordError: "You need to confirm your password."})
        }
        else if (userInfo.password !== confirmPasswordInput) {
            setErrors({ ...errors, confirmPasswordError: "Password don't match." });
        }
        else {
            setErrors({ ...errors, confirmPasswordError: "" });
        }
    }

    return (
        <Container className='w-50 mx-auto my-5'>
            <h1 className='fs-5 text-success mb-3'>Register with your email address!</h1>
            <Form onSubmit={handleSubmit} >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='fs-6 fw-semibold'>What should we call you? </Form.Label>
                    <Form.Control onBlur={(event) => handleNameBlur(event.target.value)} type="text" name='name' placeholder="Enter a name for your profile" className='border-dark rounded-0' required />
                    {
                        errors?.nameError
                            ?
                            <p className='text-danger'><FaExclamationCircle className='me-1'></FaExclamationCircle>{errors?.nameError}</p>
                            :
                            <p className='text-dark'>This appears on your profile.</p>
                    }
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='fs-6 fw-semibold'>Email address</Form.Label>
                    <Form.Control onBlur={(event) => handleEmailBlur(event.target.value)} type="email" name='email' placeholder="Enter your email" className='border-dark rounded-0' required />
                    {
                        errors?.emailError && <p className='text-danger'><FaExclamationCircle className='me-1'></FaExclamationCircle>{errors?.emailError}</p>
                    }
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='fs-6 fw-semibold'>Password</Form.Label>
                    <Form.Control onBlur={(event) => handlePasswordBlur(event.target.value)} type="password" name='password' placeholder="Create a password" className='border-dark rounded-0' required />
                    {
                        errors?.passwordError && <p className='text-danger'><FaExclamationCircle className='me-1'></FaExclamationCircle>{errors?.passwordError}</p>
                    }
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='fs-6 fw-semibold'>Confirm Password</Form.Label>
                    <Form.Control onBlur={(event) => handleConfirmPasswordBlur(event.target.value)} type="password" name='confirmPassword' placeholder="Enter your password again" className='border-dark rounded-0' required />
                    {
                        errors?.confirmPasswordError && <p className='text-danger'><FaExclamationCircle className='me-1'></FaExclamationCircle>{errors?.confirmPasswordError}</p>
                    }
                </Form.Group>
                <Button variant="success" className='fw-semibold  rounded-pill text-dark px-lg-5 py-lg-2 px-4 py-2' type="submit">
                    Register
                </Button>
            </Form>
            <p className='mt-3 fs-5'>Have an account? <Link to='/login' className='text-decoration-none text-success'>Log in. </Link></p>
        </Container>
    );
};

export default Register;