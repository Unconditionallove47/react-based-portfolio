import React from 'react';
import NavTabs from '../NavTabs';

const styles = {
    format: {
        margin: '5px',
        padding: '10px 0px',
        background: '#416655',
        width: '100vw',
        height: '890px',
        width: '1890px',
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
                Welcome, My name is Kalif Purce! I created this portfolio using React!
            </h1>
        </div>
    );
}