import React from 'react';
import NavTabs from '../NavTabs';

import WikionBoard from '../../assets/images/WikionBoard.png';
import plantgallery from '../../assets/images/plantgallery.png';
import NoteTaker from '../../assets/images/NoteTaker.png';
import password from '../../assets/images/password.png';

const styles = {
    format: {
        margin: '5px',
        padding: '10px',
        backgroundColor: 'purple',
    },
    imgSize: {
        maxWidth: '100%',
        padding: '20px 0px'
    }
}

export default function MyWork() {
    return (
        <div>
            <header>
                <h1 style={styles.format}>My Work</h1>
                {NavTabs({})}
            </header>
            <ul style={styles.format}>
                <img style={styles.imgSize} src={WikionBoard} alt="collab one" />
                <a href="https://hseymo.github.io/Activity-Generator" rel="noreferrer" target="_blank">
                <span style={{fontWeight: 'bold', fontSize: '20px', margin: '10px'}}>A 4 person project to help with boredom.</span>
                </a>
                <img style={styles.imgSize} src={plantgallery} alt="collab two" />
                <a href="https://secret-waters-02737.herokuapp.com/login" rel="noreferrer" target="_blank">
                <span style={{fontWeight: 'bold', fontSize: '20px'}}>A 4 person project to help with name suggestions for plants.</span>
                </a>
                <img style={styles.imgSize} src={NoteTaker} alt="note taker" />
                <a href="https://vast-ridge-35448.herokuapp.com/" rel="noreferrer" target="_blank">
                <span style={{fontWeight: 'bold', fontSize: '20px'}}>A app to keep track of notes, utilizing local storage.</span>
                </a>
                <img style={styles.imgSize} src={password} alt="workday planner" />
                <a href="https://unconditionallove47.github.io/Password-Generator-Homework-/" rel="noreferrer" target="_blank">
                <span style={{fontWeight: 'bold', fontSize: '20px'}}>A project to help you create a password that is randomly generated.</span>
                </a>
            </ul>
        </div>
    );
}