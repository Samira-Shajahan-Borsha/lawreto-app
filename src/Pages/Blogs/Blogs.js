import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div>
            <h1 className='text-center my-lg-5 my-3 text-success'>Blogs</h1>
            <Container className=''>
                <Row xs={1} lg={2} md={2}>
                    <Col className=''>
                        <h3>Difference between authorization and authentication: </h3>
                        <p className='text-justify'>Authentication and authorization are two related but distinct concepts in the field of information security.

                            Authentication refers to the process of verifying the identity of a user or system. In other words, it is the process of determining whether a user or system is who they claim to be. Authentication is typically achieved by requiring the user to provide some form of credentials, such as a username and password, or a digital certificate.

                            Authorization, on the other hand, refers to the process of granting or denying access to resources or actions based on the authenticated user's identity and privileges. In other words, authorization is the process of determining whether a user or system has the necessary permissions to access a particular resource or perform a particular action. <br />
                            In summary, authentication is the process of verifying identity, while authorization is the process of granting or denying access based on the authenticated user's identity and privileges.
                        </p>
                    </Col>

                    <Col>
                        <h3>What other services does firebase provide other than authentication?</h3>
                        <ul className='px-4'>
                            <li>Realtime Database: Firebase Realtime Database is a cloud-hosted NoSQL database that allows you to store and sync data in real-time between clients.</li>
                            <li>Cloud Firestore: Cloud Firestore is a flexible, scalable, NoSQL document database that allows you to store and sync data in real-time between clients.</li>
                            <li>Cloud Functions: Firebase Cloud Functions is a serverless compute platform that lets you run backend code in response to events triggered by Firebase features and HTTPS requests.</li>
                            <li>Cloud Storage: Firebase Cloud Storage is a cloud-based object storage system that allows you to store and serve user-generated content, such as photos and videos.</li>
                            <li>Cloud Messaging: Firebase Cloud Messaging is a cross-platform messaging solution that lets you reliably deliver messages at no cost.</li>
                            <li>Hosting: Firebase Hosting is a fast, secure, and reliable way to host static files and dynamic content for your web app or website.</li>
                        </ul>
                    </Col>
                    <Col>
                        <h3> Why are you using firebase? What other options do you have to implement authentication?</h3>
                        <p className='px-4'>To develop an authentication and authentication system for my projects, I use Firebase. Because Firebase authentication allows authentication using passwords, phone numbers, and prominent identity providers like as Google, Facebook, Github, and Twitter, among others. Firebase is used to host my web application projects. </p>
                        <p className='px-4'> The other options to implement authentication are: </p>
                        <ul>
                            <li>OAuth: OAuth is a widely used protocol for authentication and authorization. It allows users to authenticate with your application using their existing social media or Google accounts. You can implement OAuth using libraries like Passport.js or OAuth2.</li>
                            <li>JSON Web Tokens (JWT): JWT is a JSON-based token format that can be used for authentication and authorization. JWTs are self-contained and can be used to store user information, such as user ID or roles. You can implement JWT authentication using libraries like JSON Web Token (JWT) Authentication for Node.js.</li>
                            <li>Third-party authentication providers: There are several third-party authentication providers, such as Auth0 or Okta, that provide authentication as a service. These services provide pre-built authentication systems that can be integrated with your application, saving you development time and effort.</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Blogs;