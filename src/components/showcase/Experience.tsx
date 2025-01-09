import React from 'react';
import ResumeDownload from './ResumeDownload';

export interface ExperienceProps {}

const Experience: React.FC<ExperienceProps> = (props) => {
    return (
        <div className="site-page-content">
            <ResumeDownload />
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Brilliant Media Technologies</h1>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href={'https://brilliantmediatech.com/'}
                        >
                            <h4>www.brilliantmediatech.com</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Co-Founder & CTO</h3>
                        <b>
                            <p>September 2024 - Present</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    Leading the technological vision and development at Brilliant Media Technologies, focusing on building scalable and innovative media solutions for content distribution.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            Spearheaded the development of a real-time media platform, enhancing content accessibility for over 50,000 users within the first few months.
                        </p>
                    </li>
                    <li>
                        <p>
                            Implemented scalable backend services using cloud technologies, reducing operational costs by 30%.
                        </p>
                    </li>
                </ul>
            </div>
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Apple</h1>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href={'https://www.apple.com/'}
                        >
                            <h4>www.apple.com</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Security Researcher</h3>
                        <b>
                            <p>September 2023 - April 2024</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    Conducted security research at Apple, focusing on finding vulnerabilities in macOS and contributing to the bug bounty program.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            Discovered and reported critical vulnerabilities, leading to inclusion in Apple’s Hall of Fame.
                        </p>
                    </li>
                    <li>
                        <p>
                            Developed exploits for macOS Ventura, enhancing the company’s security protocols.
                        </p>
                    </li>
                </ul>
            </div>
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>University of Waterloo</h1>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href={'https://uwaterloo.ca/'}
                        >
                            <h4>www.uwaterloo.ca</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Student Researcher</h3>
                        <b>
                            <p>December 2022 - April 2024</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    Conducted research in quantum computing algorithms, focusing on optimization techniques and practical implementations.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            Developed new quantum algorithms for optimization problems, achieving significant performance improvements.
                        </p>
                    </li>
                    <li>
                        <p>
                            Collaborated with leading researchers to publish findings in academic journals.
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    header: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
    },
    skillRow: {
        flex: 1,
        justifyContent: 'space-between',
    },
    skillName: {
        minWidth: 56,
    },
    skill: {
        flex: 1,
        padding: 8,
        alignItems: 'center',
    },
    progressBar: {
        flex: 1,
        background: 'red',
        marginLeft: 8,
        height: 8,
    },
    headerContainer: {
        alignItems: 'flex-end',
        width: '100%',
        justifyContent: 'center',
    },
    hoverText: {
        marginBottom: 8,
    },
    indent: {
        marginLeft: 24,
    },
    headerRow: {
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    row: {
        display: 'flex',
        justifyContent: 'space-between',
    },
};

export default Experience;
