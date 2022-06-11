import React from 'react';
import { Link } from 'react-router-dom';

const styles = {
    navStyle: {
        display: 'flex',
        border: '2px solid black',
        width: '100vw',
        height: '100vh',
        padding: '10px',
        background: 'linear-gradient(to top left, purple, peachpuff)',
        margin: '5px',
        textAlign: 'center',
        height:'auto'
        

    },
    listSize: {
        fontSize: '22px'
    }
}


function NavTabs({ currentPage, handlePageChange }) {
    return (
        <nav style={styles.navStyle}>
            <ul className="nav nav-tabs" >
                <li className="nav-item">
                    <Link to='/' style={styles.listSize}>Home</Link>
                </li>
                <li className="nav-item">
                    <Link to='/aboutMe' style={styles.listSize}>About Me</Link>
                </li>
                <li className="nav-item">
                    <Link to='/resume' style={styles.listSize}>My Resume</Link>
                </li>
                <li className="nav-item">
                    <Link to='/myWork' style={styles.listSize}>Work</Link>
                </li>
                <li className="nav-item">
                    <Link to='/contactMe' style={styles.listSize}>Contact</Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavTabs;