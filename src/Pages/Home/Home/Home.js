import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Service from '../Service/Service';

const Home = () => {

    const services = useLoaderData();

    return (
        <>
            <Banner></Banner>
            <Container>
                <h1 className='mt-lg-5 fs-2 mt-4 fw-bold'>Legal Services</h1>
                <Row xs={1} md={2} lg={3} className='my-lg-3 g-4 p-3 p-lg-0 '>
                    {
                        services.map(service => <Service
                            key={service.id}
                            service={service}
                        ></Service>)
                    }
                </Row>
            </Container>
        </>
    );
};

export default Home;