import React from 'react';
import './footer.css';

const Footer = () =>{
    return(
        <footer class="footer">
            <div class="footer-wrap">
                <div class="footer_logo landing-logo">
                    <p>PEAKS<span>hiking club</span></p>
                </div>
                <p class="footer_text">
                    We create content and curate adventures for people looking for a truly authentic encounter in the great
                    outdoors.
                </p>
                <span class="footer-cr">
                &copy; 2019 by PEAKS hiking club
                </span>
            </div>
        </footer>
    )
}

export default Footer;