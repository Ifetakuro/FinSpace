import "./index.css";
import CustomBtn from "../../components/CustomBtn";
import { Envelope } from "../../assets/svg";
import heroImg from "../../assets/images/hero.png";

const LandingPage = () => {
  return (
    <section className="general-sec hero">
      <div className="hero-info">
        <h1>
          Navigating the <span className="hero-global">Global</span> financial
          landscape
        </h1>
        <p>
          Empowering Your Journey to Global Financial Success Through Customized
          and Personalized Financial Consulting for Every Client
        </p>
        <form>
          <div className="custom-input">
            <Envelope /> <input type="email" placeholder="Your email address" />
          </div>
          <CustomBtn text={"Get Started"} type="submit" />
        </form>
      </div>

      <img src={heroImg} alt="Financial analysis" className="hero-img" />
    </section>
  );
};

export default LandingPage;
