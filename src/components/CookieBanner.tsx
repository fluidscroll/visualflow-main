"use client";

import { useState, useEffect } from 'react';

const CookieBanner = () => {
    const [showBanner, setShowBanner] = useState(false);

    useEffect(() => {
        // Check localStorage only on the client side
        const consent = localStorage.getItem('cookie_consent');
        if (consent !== 'true') {
            setShowBanner(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookie_consent', 'true');
        setShowBanner(false);
    };

    if (!showBanner) {
        return null;
    }

    // Using inline styles as a simple, self-contained example
    const bannerStyle = {
        position: 'fixed' as 'fixed',
        bottom: '0',
        left: '0',
        width: '100%',
        backgroundColor: '#222',
        color: '#fff',
        padding: '15px',
        textAlign: 'center' as 'center',
        zIndex: '1000',
    };

    const pStyle = {
        margin: '0',
        display: 'inline',
        marginRight: '15px',
    };

    const buttonStyle = {
        backgroundColor: '#4CAF50',
        color: 'white',
        border: 'none',
        padding: '10px 20px',
        textAlign: 'center' as 'center',
        textDecoration: 'none',
        display: 'inline-block',
        fontSize: '16px',
        cursor: 'pointer',
    };

    return (
        <div style={bannerStyle}>
            <p style={pStyle}>This website uses cookies to ensure you get the best experience on our website.</p>
            <button style={buttonStyle} onClick={handleAccept}>Accept</button>
        </div>
    );
};

export default CookieBanner;

