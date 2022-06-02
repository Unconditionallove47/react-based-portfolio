import React from 'react';
import { Link } from 'react-router-dom';

const styles = {
    navStyle: {
        border: '2px solid black',
        width: '100vw',
        padding: '10px',
        backgroundColor: 'lightblue',
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