import React from 'react';
import './MainContent.css';

const MainContent = () => {
    return (
        <main className="main-content">
            <h1>$Login-Page</h1>
            <p>Welcome to SLOGINPAGE! Sign up to explore more.</p>
            <button className="cta-button">LOgin #LOgin</button>
            <div className="info-grid">
                <div className="info-section">Section 1</div>
                <div className="info-section">Section 2</div>
                <div className="info-section">Section 3</div>
                <div className="info-section">Section 4</div>
            </div>
        </main>
    );
};

export default MainContent;