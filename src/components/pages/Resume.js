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
    }
}

export default function Resume() {
    return (
        <div style={styles.format}>
            <header>
                <h1>Resume Page</h1>
                {NavTabs({})}
            </header>
            <section>
                <card><span style={{ fontWeight: 'bolder', fontStyle: 'italic', fontSize: '18px' }}>Hardware And Software Experience</span>
                    <section>
                        <span style={{ fontWeight: 'bold' }}>IoT C++ Software and circuit building Full Stack Flex Software Training, 2022</span>
                        <ul style={{ fontStyle: 'italic' }}>University of Washington, Seattle, WA(Full Stack), CNMCC. Albuquerque, NM
                            <li style={{ fontStyle: 'normal' }}>
                           Full Stack: HTML, CSS, JavaScript,third-party API, npm packages, including NodeJS, OOP, Express, Sequelize; ORM, MongoDB/NoSQL, and React.
                            </li>
                            <li style={{ fontStyle: 'normal' }}>
                           IoT: C++, Arduino, Solidworks, and other embedded systems.
                            </li>
                            <li style={{ fontStyle: 'normal' }}>
                              Full Stack:  Attended course for 12 weeks, with repositories utilizing GitHub and GitLab.
                            </li>
                            <li style={{ fontStyle: 'normal' }}>
                              IoT:  Attended course for 10 weeks, with repositories utilizing GitHub.
                            </li>
                            <li style={{ fontStyle: 'normal' }}>
                              Full Stack:  Utilized technologies including GitBash, GitLab, Bootstrap, jQuery, and materialize, as well as cloudinary.
                            </li>
                        </ul>
                    </section>
                </card>
                <card><span style={{ fontWeight: 'bolder', fontStyle: 'italic', fontSize: '18px' }}>Work Experience</span>
                    <section>
                        <span style={{ fontWeight: 'bold' }}>Self Employed 2018-present</span>
                        <ul>
                            <li style={{ fontStyle: 'normal' }}>
                                Worked as a freelance stock investor and crypto investor
                            </li>
                        </ul>
                    </section>
                </card>
                <card><span style={{ fontWeight: 'bolder', fontStyle: 'italic', fontSize: '18px' }}>Education</span>
                    <section>
                        <section>
                            <ul>
                                <span style={{ fontWeight: 'bold' }}>Moriarty High, Moriarty, NM</span>
                                <li style={{ listStyleType: 'none' }}>
                                    <span style={{ fontStyle: 'italic' }}>High School Diploma(via GED program)
                                    </span>
                                </li>
                            </ul>
                            <ul>
                                <span style={{ fontWeight: 'bold' }}>University of Washington(continued educations program), Seattle, WA(remote)</span>
                                <li style={{ listStyleType: 'none' }}>
                                    <span style={{ fontStyle: 'italic' }}>Full Stack Flex Software Development Certification
                                    </span>
                                </li>
                            </ul>
                            <ul>
                                <span style={{ fontWeight: 'bold' }}>Central New Mexico Community College, Albuquerque,NM(Half-remote)</span>
                                <li style={{ listStyleType: 'none' }}>
                                    <span style={{ fontStyle: 'italic' }}>IoT Software Development Certification
                                    </span>
                                </li>
                            </ul>
                        </section>
                    </section>
                </card>
            </section>
        </div>
    );
}