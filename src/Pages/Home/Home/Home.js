import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Service from '../Service/Service';

const Home = () => {

    const services = useLoaderData();

    // console.log(services);

    /* if (!Array.isArray(services)) {
        return <div>Loading...</div>
    } */

    return (
        <>
            <Banner></Banner>
            <Container>
                <h1 className='mt-lg-5 fs-2 mt-4 fw-bold text-center'>Legal Services</h1>
                <Row xs={1} md={2} lg={3} className='mb-lg-5 g-5 p-3 p-lg-0 mt-lg-1'>
                    {
                        services?.length > 0 && services?.map(service => <Service
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