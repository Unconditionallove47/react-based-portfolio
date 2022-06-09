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
                {NavTabs({})}
            <h1 style={styles.header}>Kalif Purce</h1>
                <h2>Welcome, This is my portfolio page! My name is Kalif Purce! On my navigation bar you can find my resume, about me, and my work. I hope you enjoy my site!</h2>
            </header>
            
        </div>
    );
}