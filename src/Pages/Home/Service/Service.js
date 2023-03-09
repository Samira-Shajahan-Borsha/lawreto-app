import React, { useEffect, useState } from 'react';
import { Button, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

const Service = ({ service }) => {

    const { id, name, image, price, description } = service;


    const navigate = useNavigate();

    /* const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []) */

    const hanldeServiceDetails = () => {

        // const selectedService = services.find(se => se.id === id);
        // console.log(selectedService);

        navigate(`/service-details/${id}`);
    }

    return (
        <Col>
            <Card className='h-100 rounded-0'>
                <Card.Img className='img-fluid rounded-0' variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
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