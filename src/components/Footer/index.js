import "./index.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-first-div ">
        <div>
          <h5>FinSpace</h5>
          <p>
            Our expert financial consultants provide solutions to help you
            achieve financial wealth. Trust us to guide you toward a brighter
            financial future.
          </p>
          <div>logos</div>
        </div>
        <div>
          <h5>Our Services</h5>
          <ul>
            <li>Insurance Planning</li>
            <li>Estate Planning</li>
            <li>Tax Optimization</li>
            <li>Debt Management</li>
          </ul>
        </div>
        <div>
          <h5>Explore More</h5>
          <ul>
            <li>About us</li>
            <li>Blog</li>
            <li>Site map</li>
            <li>Privacy</li>
          </ul>
        </div>
        <div>
          <h5>Contact details</h5>
          <ul>
            <li>contact@finspace.com</li>
            <li>+1 (555) 123-4567</li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="footer-second-div">
        <p>Oluwafisayo takuro 2024 © All rights reserved</p>
        <div>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
