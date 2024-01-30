import "./index.css";
import SectionTemplate from "../../components/SectionTemplate";
import Services from "../../components/Services";
import serviceImg from "../../assets/images/services.png";
import expertiseImg from "../../assets/images/expertise.png";

const Service = () => {
  return (
    <section id="service" className="service general-sec">
      <div className="expertise-div">
        <SectionTemplate
          title={"OUR EXPERTISE"}
          heading={"Transforming Finances With Strategic Wealth Management"}
        >
          <p>
            Guiding You on Your Global Financial Success Journey Through
            Customized & Personalized Financial Consulting Services. Achieve
            Your Goals with Data-Driven Expertise and Secure Your Financial
            Future, Successfully Navigating the Ever-Changing Finance
          </p>
          <p>
            We're Committed to Providing You with Expert Guidance, Proven
            Strategies & Personalized Approach to Ensure Financial Prosperity
          </p>
        </SectionTemplate>
        <div className="expertise-img">
          <img src={expertiseImg} alt="Expertise investment growth" />
        </div>
      </div>
      <div className="service-div">
        <div className="service-img">
          <img src={serviceImg} alt="Service invextment growth" />
        </div>
        <SectionTemplate
          title={"OUR SERVICES"}
          heading={"Our Services Can Help You Grow Your Investments and Wealth"}
        >
          <p>
            Embark on a Journey to Unlock a World of Financial Opportunities,
            Grow Your Investment with Our Comprehensive and Expert Services
          </p>
          <Services />
        </SectionTemplate>
      </div>
    </section>
  );
};

export default Service;
