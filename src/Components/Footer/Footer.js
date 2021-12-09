import React from 'react';
import "./Footer.css";

const Footer = () => {

    const scroll = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    return (
        <div className="footer">
            <button onClick={scroll}>Back to top</button>

            <div className="footer__container">
                <div className="footer__stuff">
                    
                    <div className="footer__one">
                        <div className="footer__title">
                            <h2>Get to Know Us</h2>
                        </div>
                        <div className="footer__text">
                            <h4>About Us</h4>
                            <h4>Careers</h4>
                            <h4>Press Releases</h4>
                            <h4>Amazon Cares</h4>
                            <h4>Gift a Smile</h4>
                        </div>
                    </div>

                    <div className="footer__two">
                        <div className="footer__title">
                            <h2>Connect with Us</h2>
                        </div>
                        <div className="footer__text">
                            <h4>Facebook</h4>
                            <h4>Twitter</h4>
                            <h4>Instagram</h4>
                        </div>
                    </div>

                    <div className="footer__three">
                        <div className="footer__title">
                            <h2>Make Money with Us</h2>
                        </div>
                        <div className="footer__text">
                            <h4>Sell on Amazon</h4>
                            <h4>Sell under Amazon Accelerator</h4>
                            <h4>Amazon Global Selling</h4>
                            <h4>Become an Affiliate</h4>
                            <h4>Fulfilment by Amazon</h4>
                            <h4>Advertise Your Products</h4>
                            <h4>Amazon Pay on Merchants</h4>
                        </div>
                    </div>

                    <div className="footer__four">
                        <div className="footer__title">
                            <h2>Let Us Help You</h2>
                        </div>
                        <div className="footer__text">
                            <h4>COVID-19 and Amazon</h4>
                            <h4>Your Account</h4>
                            <h4>Returns Centre</h4>
                            <h4>100% Purchase Protection</h4>
                            <h4>Amazon App Download</h4>
                            <h4>Amazon Assistant Download</h4>
                            <h4>Help</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
