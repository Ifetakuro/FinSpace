import CustomBtn from "../../components/CustomBtn";
import SectionTitle from "../../components/SectionTitle";
import teamWork from "../../assets/images/Teamwork.png";
import "./index.css";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact-info">
        <SectionTitle title={"START NOW"} />
        <h2>Get Started For Free No Credit Card Required </h2>
        <form>
          <input type="email" placeholder="Email address" />
          <CustomBtn
            text={"Get Started"}
            type="submit"
            extraClass={"light-green"}
          />
        </form>
        <p className="try-it">
          Want to contact our team and book a call? <span>Try it now</span>
        </p>
      </div>
      <div className="contact-image">
        <img src={teamWork} alt="Team work" />
      </div>
    </section>
  );
};

export default Contact;
