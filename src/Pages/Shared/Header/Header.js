import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';


const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    console.log(user, logOut);

    const activeRouteClassName = 'text-decoration-none text-success fw-semibold fs-5';

    const inactiveRouteClassName = 'text-white text-decoration-none fw-semibold fs-5';

    const handleLogOut = () => {
        logOut()
            .then(() => { })
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
                            user?.uid
                                ?
                                <div className='me-3'>
                                    <Link to='/login'>
                                        <Button onClick={handleLogOut} variant="dark" className={activeRouteClassName}>Log Out</Button>
                                    </Link>
                                    {/* <NavLink to='/login' className={({ isActive }) =>
                                        isActive ? activeRouteClassName : inactiveRouteClassName
                                    }>log out</NavLink> */}
                                </div>
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