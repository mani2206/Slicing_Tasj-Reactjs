import logo from "../assets/Images/logo.png";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="section-center">
        <div className="img-container">
          <img src={logo} alt="logo" className="logo" />
        </div>

        <ul className="footer-links-container">
          <li>
            <a href="#">Terms & Condition</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
        </ul>

        <p className="copyrights">® 2019 Company name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
