import React from 'react';
import "../app/styles/footer.css"

const Footer = () => {
  return (
    <div className="footer">
      &copy; {new Date().getFullYear()} Nida | All rights reserved.
    </div>
  );
};

export default Footer;

