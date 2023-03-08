import React, { useContext, useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const Login = () => {

    const [userInfo, setUserInfo] = useState({
        email: '', password: ''
    });

    const [error, setError] = useState({
        emailError: '', passwordError: ''
    });

    const data = useContext(AuthContext);

    console.log(data)

    const handleSubmit = e => {
        e.preventDefault();

        

    }

    return (
        <Container className='w-50 mx-auto my-5'>
            <h1 className='fs-3 text-center'>Please Log in</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='fs-5'>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='fs-5'>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
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