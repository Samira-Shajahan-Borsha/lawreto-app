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
        mobileNumber: ''
    });
    const [errors, setErrors] = useState({
        nameError: '',
        addressError: '',
        mobileNumberError: ''
    });



    // console.log(user);

    const service = useLoaderData();

    // console.log(service);

    const { name } = service;

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        toast.success('Thank you for booking', {
            id: 107,
            icon: '👏',
            position: "top-center",
        });
        form.reset();
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

    const handleMobileNumberBlur = mobileNumberInput => {

        const numberRegex = /^01[3-9][0-9]{8}$/;

        const validMobileNumber = numberRegex.test(mobileNumberInput);

        console.log(validMobileNumber);

        if (mobileNumberInput === '') {
            setErrors({ ...errors, mobileNumberError: 'You need to enter your mobile number.' });
        }
        else if (!validMobileNumber) {
            setErrors({ ...errors, mobileNumberError: 'Enter a valid mobile number' });
            setUserInfo({ ...userInfo, mobileNumber: '' });
        }
        else {
            setUserInfo({ ...userInfo, mobileNumber: mobileNumberInput });
            setErrors({ ...errors, mobileNumberError: '' });
        }
    }

    return (
        <Container className='mx-lg-auto my-5 px-lg-5'>
            <h1 className='fs-1 text-success mb-3 text-center fw-bold mb-5'>{name}</h1>

            <Form onSubmit={handleSubmit} className='mx-lg-5 px-lg-5'>
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
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='fs-6 fw-semibold'>Mobile Number</Form.Label> <br />
                    <input type="tel" onBlur={(event) => handleMobileNumberBlur(event.target.value)} name="mmobileNumber" pattern="^01[3-9][0-9]{8}$" id="" className='w-50 form-control border-dark rounded-0' required />
                    {
                        errors?.mobileNumberError && <p className='text-danger'><FaExclamationCircle className='me-1'></FaExclamationCircle>{errors?.mobileNumberError}</p>
                    }
                </Form.Group>
                <Button variant="success" className='fw-semibold  rounded-pill text-dark px-lg-5 py-lg-2 px-4 py-2' type="submit">
                    BOOK YOUR SERVICE NOW
                </Button>
            </Form>
        </Container>
    );
};

export default ServiceDetails;