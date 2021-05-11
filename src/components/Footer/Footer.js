import footerLogo from '../../assets/images/footer-logo.png'
import paypalLogo from '../../assets/images/paypal.png'
import wechatLogo from '../../assets/images/wechat.png'
import qqLogo from '../../assets/images/qq.png'

const Footer = () => {
    return ( 
        <>
    <div className="footer-container">
       <div className="flex-item footer-logo">
            <img src={footerLogo} alt="logo" />
            <div className="address">
                <p>1 Park Road. #03-k68 People's Park Complex. Singapore 059108.</p>
            </div>
            <div className="phone">
            <p>Phone: 65360111</p>
            </div>
            <div className="email">
            <p>contact@uftravel.com.sg</p>
            </div>
       </div>
        <div className="flex-item footer-nav">
            <h5><strong>About us</strong></h5>
            <div className="navlist">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Contact</li>
                <li>Terms & Conditions</li>
            </ul>
            </div>
        </div>
        <div className="flex-item footer-pay">
        <h5><strong>Payment Supported</strong></h5>
        <div className="footer-pay-logo">
        <img src={paypalLogo} alt="paypal" />
        </div>
        </div>
        <div className="flex-item footer-social">
        <h5><strong>Connect with us</strong></h5>
        <div className="footer-social-logo">
            <img src={wechatLogo} alt="wechat"/>
            <img src={qqLogo} alt="qq"/>
        </div>
        </div>
    </div> 
    </>
    );
}
 
export default Footer;