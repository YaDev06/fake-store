import React from 'react';

const Footer = () => {
    return (
        <footer className='text-center py-3' style={{background:"#eee"}}>
            <p>Copyright {new Date().getFullYear()} All Rights Reserved</p>
        </footer>
    );
};

export default Footer;