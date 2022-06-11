import React from 'react';
import NavTabs from '../NavTabs';

const styles = {
    format: {
        margin: '5px',
        padding: '10px 0px',
        background: 'linear-gradient(to bottom right, purple, peachpuff)',
        width: '100vw',
        height: '100vh',
    },
    contact: {
        fontSize: "22px",
        padding: "30px"
    },
}

export default function contact() {
    return (
        <div style={styles.format}>
            <header>
                <h1>Contact Me</h1>
                {NavTabs({})}
            </header>
            <ul>
                <li class="phone" style={styles.contact}><a href="tel: 425-750-5822">Call/Text: 505-615-3934</a></li>
                <li class="linkedin" style={styles.contact}><a href="https://www.linkedin.com/in/kalifp/" rel="noreferrer" target="_blank">Linkedin</a></li>
                <li class="email" style={styles.contact}><a href="mailto:kpurcedesigns@gmail.com">Email Me!</a></li>
                <li class="github" style={styles.contact}><a href="https://github.com/Unconditionallove47" rel="noreferrer" target="_blank">Github</a></li>
            </ul>
            <card style={{fontSize:'20px'}}>
                Here you can find all of my available links to contact me!
            </card>
            
        </div>
    );
}