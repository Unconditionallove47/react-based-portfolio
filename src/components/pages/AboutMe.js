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
    aboutme: {
        fontSize: "23px",
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
                I am a full stack web developer with a passion for learning and problem solving. I have a background in warehouse management but after taking a course in C++ discovered a love for coding and decided to pursue a new career! in my free time i play video games, hike, and skateboard as much as possible. By continuing to learn, grow, and improve, I hope to be able to help others in the future. Not only in web development but also in other areas such as business, finance, and management. As a self taught investor I also have a passion for investing and believe that more people in my age range can benefit from the knowledge and skills that follow along with it.
            </h3>
        </div>
    );
}