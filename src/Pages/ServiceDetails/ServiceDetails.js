import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { toast } from 'react-hot-toast';
import { FaExclamationCircle } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const ServiceDetails = () => {

    const { user } = useContext(AuthContext);

    const [userInfo, setUserInfo] = useState({
        name: '',
        address: '',
        mmobileNumber: ''
    });
    const [errors, setErrors] = useState({
        nameError: '',
        addressError: '',
        mmobileNumberError: ''
    });

    console.log(user);

    const service = useLoaderData();

    console.log(service);
    const { name } = service;

    const handleSubmit = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;

        const address = form.address.value;

        form.reset();

        

        console.log(name, address);
    }

    const handleNameBlur = nameInput => {

        if (nameInput === '') {
            setErrors({ ...errors, nameError: 'You need to enter your name.' });
        }
        else {
            setUserInfo({ ...userInfo, name: nameInput });
            setErrors({ ...errors, nameError: '' });
        }
    }

    const handleAddressBlur = addressInput => {

        if (addressInput === '') {
            setErrors({ ...errors, addressError: 'You need to enter your address.' });
        }
        else {
            setUserInfo({ ...userInfo, address: addressInput });
            setErrors({ ...errors, addressError: '' });
        }
    }

    return (
        <Container className='my-5'>
            <h1 className='fs-3 text-success mb-3 text-center'>{name}</h1>
            <Form onSubmit={handleSubmit} >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='fs-6 fw-semibold'>User Name</Form.Label>
                    <Form.Control onBlur={(event) => handleNameBlur(event.target.value)} type="text" name='name' placeholder="Enter your name" className='border-dark rounded-0' required />
                    {
                        errors?.nameError
                        &&
                        <p className='text-danger'><FaExclamationCircle className='me-1'></FaExclamationCircle>{errors?.nameError}</p>
                    }
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='fs-6 fw-semibold'>Email address</Form.Label>
                    <Form.Control type="email" name='email' readOnly defaultValue={user?.email} className='border-dark rounded-0' required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label className='fs-6 fw-semibold'>Address</Form.Label>
                    <Form.Control onBlur={(event) => handleAddressBlur(event.target.value)} name='address' as="textarea" placeholder='Enter your address' className='border-dark rounded-0' required rows={3} />
                    {
                        errors?.addressError && <p className='text-danger'><FaExclamationCircle className='me-1'></FaExclamationCircle>{errors?.addressError}</p>
                    }
                </Form.Group>
                {/* <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='fs-6 fw-semibold'>Mobile Number</Form.Label>

                </Form.Group> */}
                <Button variant="success" className='fw-semibold  rounded-pill text-dark px-lg-5 py-lg-2 px-4 py-2' type="submit">
                    BOOK YOUR SERVICE NOW
                </Button>
            </Form>
        </Container>
    );
};

export default ServiceDetails;