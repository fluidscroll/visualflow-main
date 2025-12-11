(function() {
    'use strict';

    // Don't show the banner if the user has already accepted
    if (localStorage.getItem('cookie_consent') === 'true') {
        return;
    }

    // Create the CSS for the banner
    const style = document.createElement('style');
    style.textContent = `
        .cookie-banner {
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;
            background-color: #222;
            color: #fff;
            padding: 15px;
            text-align: center;
            z-index: 1000;
        }
        .cookie-banner p {
            margin: 0;
            display: inline;
            margin-right: 15px;
        }
        .cookie-banner button {
            background-color: #4CAF50;
            color: white;
            border: none;
            padding: 10px 20px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
            cursor: pointer;
        }
    `;
    document.head.appendChild(style);

    // Create the HTML for the banner
    const banner = document.createElement('div');
    banner.className = 'cookie-banner';
    banner.innerHTML = `
        <p>This website uses cookies to ensure you get the best experience on our website.</p>
        <button id="cookie-accept-btn">Accept</button>
    `;
    document.body.appendChild(banner);

    // Add event listener to the accept button
    const acceptButton = document.getElementById('cookie-accept-btn');
    acceptButton.addEventListener('click', () => {
        localStorage.setItem('cookie_consent', 'true');
        banner.remove();
        style.remove();
    });
})();
