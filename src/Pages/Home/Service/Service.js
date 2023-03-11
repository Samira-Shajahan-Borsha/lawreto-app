import React from 'react';
import { Button, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

const Service = ({ service }) => {

    const { id, name, image, price, description } = service;

    const navigate = useNavigate();

    const hanldeServiceDetails = () => {

        navigate(`/service-details/${id}`);

    }

    return (
        <Col>
            <Card data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000" className='h-100 rounded-0'>
                <Card.Img className='img-fluid rounded-0' variant="top" src={image} />
                <Card.Body>
                    <Card.Title className='text-center'>{name}</Card.Title>
                    <Card.Text className='text-center'>
                        {description}
                    </Card.Text>
                </Card.Body>
                <Card.Text className='fs-5 text-center'>
                    Starting at: $<span className='fw-bolder'>{price}</span>
                </Card.Text>
                <Button className='border-0 rounded-0' onClick={hanldeServiceDetails} variant="dark">Book Service</Button>
            </Card>
        </Col>
    );
};

export default Service;