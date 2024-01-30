import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import "./index.css";

const Navbar = () => {
  return (
    <nav className="main-nav">
      <ul>
        <li>
          <ScrollLink to="service" smooth={true}>
            Service
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="testimonials" smooth={true}>
            Testimonials
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="contact" smooth={true}>
            Contact
          </ScrollLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
