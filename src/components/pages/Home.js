import React from 'react';
import NavTabs from '../NavTabs';

const styles = {
    format: {
        margin: '5px',
        padding: '10px 0px',
        background:  'linear-gradient(to bottom right, purple, peachpuff)',
        width: '100vw',
    },
    header: {
        padding: '0px 0px 20px 30px',
        margin: 'center'
    }
}

export default function home() {
    return (
        <div style={styles.format}>
            <header>
            <h1 style={styles.header}>Home Page</h1>
                {NavTabs({})}
            </header>
            <h1>
                Welcome, This is my portfolio page! My name is Kalif Purce!
            </h1>
        </div>
    );
}