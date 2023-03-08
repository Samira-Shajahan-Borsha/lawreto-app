import React, { useContext, useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const Login = () => {


    // const data = useContext(AuthContext);

    // console.log(data)

    const [userInfo, setUserInfo] = useState({
        email: '', password: ''
    });

    const [errors, setErrors] = useState({
        emailError: '', passwordError: ''
    });

    const handleSubmit = e => {
        e.preventDefault();

    }

    const handleEmailBlur = emailInput => {

        if (!/^\S+@\S+\.\S+$/.test(emailInput)) {
            setErrors({ ...errors, emailError: 'Please enter a valid email' });
        }
        else {
            setUserInfo({ ...userInfo, email: emailInput });
            setErrors({ ...errors, emailError: '' });
        }
    }

    const handlePasswordBlur = (passwordInput) => {

        if (!/(?=^.{6,}$)/.test(passwordInput)) {
            setErrors({ ...errors, passwordError: 'Please enter at least 6 characters long password or more' });
        }
        else {
            setUserInfo({ ...userInfo, password: passwordInput });
            setErrors({ ...errors, passwordError: '' });
        }

    }



    return (
        <Container className='w-50 mx-auto my-5'>
            <h1 className='fs-3 text-center'>Please Log in</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='fs-5'>Email address</Form.Label>
                    <Form.Control onBlur={(event) => handleEmailBlur(event.target.value)} type="email" name='email' placeholder="Enter email" required />
                    {
                        errors?.emailError && <p className='text-danger ms-2'>{errors?.emailError}</p>
                    }
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='fs-5'>Password</Form.Label>
                    <Form.Control onBlur={(event) => handlePasswordBlur(event.target.value)} type="password" name='password' placeholder="Enter password" required />
                    {
                        errors?.passwordError && <p className='text-danger ms-2'>{errors?.passwordError}</p>
                    }
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
            <p className='mt-3'>Don't have an account? <Link to='/register' className='text-decoration-none'>Please Sign Up</Link></p>
        </Container>

    );
};

export default Login;