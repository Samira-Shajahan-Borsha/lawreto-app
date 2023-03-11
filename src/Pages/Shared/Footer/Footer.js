import React from 'react';
import { FaFacebookSquare, FaGithubSquare, FaTwitterSquare } from 'react-icons/fa';

const Footer = () => {

    const date = new Date().getFullYear();

    return (
        <footer className='bg-dark d-flex justify-content-evenly align-items-center flex-column'>
            <div className='text-white mb-2 fs-1'>
                <FaFacebookSquare  className='me-2'></FaFacebookSquare>
                <FaTwitterSquare className='me-2'></FaTwitterSquare >
                <FaGithubSquare ></FaGithubSquare>
            </div>
            <div className='d-flex'>
                <p className='text-white'>Copyright &copy; {date}, All Rights Reserved</p>
            </div>
        </footer>
    );
};

export default Footer;