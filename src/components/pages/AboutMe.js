import React from 'react';
import NavTabs from '../NavTabs';

const styles = {
    format: {
        margin: '5px',
        padding: '10px 0px',
        background: 'linear-gradient(to bottom right, purple, peachpuff)',
        width: '100vw'
    },
    aboutme: {
        fontSize: "22px",
        padding: "30px"
    },
}

export default function aboutMe() {
    return (
        <div style={styles.format}>
            <header>
                <h1>About Me</h1>
                {NavTabs({})}
            </header>
            <h3 style={styles.aboutme}>
                I am a full stack web developer with a passion for learning and problem solving. I have a background in warehouse management but after taking a course in C++ discovered a love for coding and decided to pursue a new career! in my free time i play video games, hike, and skateboard as much as possible.
            </h3>
        </div>
    );
}