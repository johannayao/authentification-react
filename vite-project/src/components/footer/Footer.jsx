import React from 'react';
import "./footer.css"
const Footer = () => {
    return (
        <>
           
<footer className="footer" role="contentinfo">
    {/* <div className="social" role="navigation" aria-labelledby="social-heading">
        <h3 id="social-heading" className="sr-only">Follow us on social media</h3>
        <a href="#" aria-label="Facebook"><i className="fa-brands fa-facebook"></i></a>
        <a href="#" aria-label="Twitter"><i className="fa-brands fa-x-twitter"></i></a>
        <a href="#" aria-label="Mastodon"><i className="fa-brands fa-mastodon"></i></a>
        <a href="#" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
    </div> */}
    <hr className="footer-break"/>
    <ul className="footer-links" role="navigation" aria-labelledby="footer-links-heading">
        <h3 id="footer-links-heading" className="sr-only">Liens footer</h3>
        <li><a href="#">acceuil</a></li>
        <li><a href="#">mes services</a></li>
        <li><a href="#">nous-contacter</a></li>
        
    </ul>
    <p className="copyright">© 2024 tous droit reservés</p>
</footer>
        </>
    );
};

export default Footer;