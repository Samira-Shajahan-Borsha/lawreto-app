import React, { useContext, useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const Login = () => {


    const { loginUser } = useContext(AuthContext);

    // console.log(loginUser)

    const [userInfo, setUserInfo] = useState({
        email: '', password: ''
    });

    const [errors, setErrors] = useState({
        emailError: '', passwordError: ''
    });

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)


        loginUser(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                form.reset();
            })
            .catch(error => {
                console.error(error);
                const errorMessage = error.message;
                if (errorMessage.includes('auth/user-not-found')) {
                    toast.error('Incorrect username or password', {
                        id: 101,
                        position: "top-center",  
                    });
                }
            });
    }

    const handleEmailBlur = emailInput => {

        if (!/^\S+@\S+\.\S+$/.test(emailInput)) {
            setErrors({ ...errors, emailError: 'Please enter a valid email' });
            setUserInfo({ ...userInfo, email: '' });
        }
        else {
            setUserInfo({ ...userInfo, email: emailInput });
            setErrors({ ...errors, emailError: '' });
        }
    }

    const handlePasswordBlur = (passwordInput) => {

        if (!/(?=^.{6,}$)/.test(passwordInput)) {
            setErrors({ ...errors, passwordError: 'Password should be 6 characters long or more' });
            setUserInfo({ ...userInfo, password: '' });
        }
        else {
            setUserInfo({ ...userInfo, password: passwordInput });
            setErrors({ ...errors, passwordError: '' });
        }

    }


    return (
        <Container className='w-50 mx-auto my-5'>
            <h1 className='fs-3 text-center text-success mb-3'>Please Log in</h1>
            <Form onSubmit={handleSubmit} >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='fs-5'>Email address</Form.Label>
                    <Form.Control onBlur={(event) => handleEmailBlur(event.target.value)} type="email" name='email' placeholder="Enter email" className='border-dark rounded-0' required />
                    {
                        errors?.emailError && <p className='text-danger ms-2'>{errors?.emailError}</p>
                    }
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='fs-5'>Password</Form.Label>
                    <Form.Control onBlur={(event) => handlePasswordBlur(event.target.value)} type="password" name='password' placeholder="Enter password" className='border-dark rounded-0' required />
                    {
                        errors?.passwordError && <p className='text-danger ms-2'>{errors?.passwordError}</p>
                    }
                </Form.Group>
                <Button variant="success" className='fw-semibold  rounded-pill text-dark px-lg-5 py-lg-2 px-4 py-2' type="submit">
                    LOG IN
                </Button>
            </Form>
            <p className='mt-3 fs-5'>Don't have an account? <Link to='/register' className='text-decoration-none text-success'>Please register. </Link></p>
        </Container>

    );
};

export default Login;