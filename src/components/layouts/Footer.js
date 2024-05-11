import React from 'react';
const FooterYear = new Date().getFullYear();
const Footer = () => {
  return (
    <footer className="footer p-10 bg-gray-700 text-primary-content footer-center">
      <div>
        <p className="text-neutral-content ">Developed By Puneeth</p>
      </div>
    </footer>
  );
};

export default Footer;
