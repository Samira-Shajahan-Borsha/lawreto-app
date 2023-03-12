import React from 'react';
import { Container } from 'react-bootstrap';

const About = () => {
    return (
        <Container className='mx-auto w-75 px-3 mb-5'>
            <h1 className='text-center my-lg-5 my-3 text-success'>About Samira</h1>
            <h3 className='mb-4'>How will you work hard to achieve your goal ?</h3>
            <ul>
                <li>Experimenting and practicing are the finest ways to increase development skills. By building my own projects, contributing to open-source projects, and participating in coding competitions, I may gain experience and abilities. </li>
                <li>The development landscape is in a constant state of change, thus I believe it's essential to stay updated of the newest trends, tools, and frameworks.</li>
                <li>By surrounding oneself with other developers who can give feedback, mentoring, and support. By interacting with other developers on projects, participating in code reviews, and attending meetings to learn from others, I may reach my goal.</li>
                <li>The road to becoming a successful developer is not always easy. There will be setbacks and challenges along the way, but it's important to stay persistent and resilient. So, it's needed to learn from my mistakes and keep pushing myself forward toward my goals.</li>
            </ul>
        </Container>
    );
};

export default About;