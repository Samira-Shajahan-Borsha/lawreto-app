import React, { useContext } from 'react';
import { Button, NavDropdown } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

import { FaUser } from "react-icons/fa";


const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    console.log('inside header', user);

    const activeRouteClassName = 'text-decoration-none text-success fw-semibold fs-5';

    const inactiveRouteClassName = 'text-white text-decoration-none fw-semibold fs-5';

    const navigate = useNavigate();

    const handleLogOut = () => {
        logOut()
            .then(() => {
                navigate('/login');
            })
            .catch((error) => { })
    }

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top" className='shadow-sm p-3'>
            <Container>
                <Navbar.Brand><Link to='/' className='text-decoration-none text-white fw-bolder fs-3'>Lawreto</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className='ms-auto align-items-center'>
                        <div className='me-3'>
                            <NavLink to='/blogs' className={({ isActive }) =>
                                isActive ? activeRouteClassName : inactiveRouteClassName
                            }>Blogs</NavLink>
                        </div>
                        <div className='me-3'>
                            <NavLink to='/about' className={({ isActive }) =>
                                isActive ? activeRouteClassName : inactiveRouteClassName
                            }>About</NavLink>
                        </div>
                        {
                            user?.uid ?
                                <NavDropdown
                                    id="nav-dropdown-dark-example"
                                    title={
                                        user?.photoURL ?
                                            <>
                                                <img className='rounded-circle text-decoration-none' style={{ width: '30px' }} src={user?.photoURL ? user?.photoURL : 'N/A'} alt="profile-pic" />
                                            </>
                                            :
                                            <>
                                                <FaUser className='text-muted fs-5'></FaUser>
                                            </>
                                    }
                                    menuVariant="dark"
                                >
                                    <NavDropdown.Item onClick={handleLogOut} >
                                        Log Out
                                    </NavDropdown.Item>
                                </NavDropdown>
                                :
                                <div className='me-3'>
                                    <NavLink to='/login' className={({ isActive }) =>
                                        isActive ? activeRouteClassName : inactiveRouteClassName
                                    }>Login</NavLink>
                                </div>
                        }

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;