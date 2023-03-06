import React from 'react';

const Footer = () => {

    const date = new Date().getFullYear();

    return (
        <footer>
            <p>Copyright &copy; {date}, All Rights Reserved</p>
        </footer>
    );
};

export default Footer;