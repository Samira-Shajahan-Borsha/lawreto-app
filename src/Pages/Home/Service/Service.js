import React from 'react';
import { Button, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

const Service = ({ service }) => {

    const { id, name, image, price, description } = service;
    
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
                <Card.Text className='fs-5'>
                    Starting at: $<span className='fw-bolder'>{price}</span>
                </Card.Text>
                <Button className='border-0 rounded-0' variant="dark">Book Service</Button>
            </Card>
        </Col>
    );
};

export default Service;