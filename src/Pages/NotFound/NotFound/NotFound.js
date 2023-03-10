import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {

    const navigate = useNavigate();

    const handleNotFoundBtn = () => {
        navigate('/');
    }
    return (
        <div >
            <Container className='mx-auto mt-5 d-flex flex-column align-items-center'>
                <h1 className='display-1'>Error 404</h1>

                <p className='text-muted'><small>Oops! Something went wrong, please try again.</small></p>
                <Button variant="dark" onClick={handleNotFoundBtn} className='rounded-0'>Back to HomePage</Button>
            </Container>
        </div>
    );
};

export default NotFound;