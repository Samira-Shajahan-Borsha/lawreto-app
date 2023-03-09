import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {

    const data = useLoaderData();

    console.log(data);

    return (
        <div>
            <h1>Service details</h1>
        </div>
    );
};

export default ServiceDetails;