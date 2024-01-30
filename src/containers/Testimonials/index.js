import "./index.css";
import SectionTemplate from "../../components/SectionTemplate";
import person1 from "../../assets/images/testimonial-1.png";
import person2 from "../../assets/images/testimonial-2.png";
import person3 from "../../assets/images/testimonial-3.png";
import TestimonialCard from "../../components/TestimonialCard";
import { Custom, Expert, Risk } from "../../assets/svg";
import OffersCard from "../../components/OffersCard";

const Testimonials = () => {
  const testimonials = [
    {
      image: person1,
      name: "Grace Turner",
      title: "Director",
      quote:
        "Financial expertise has made a significant impact on our nonprofit financial stability, allowing us to better serve our community.",
    },
    {
      image: person2,
      name: "Linda Carter",
      title: "Analyst",
      quote:
        "Financial planning and investment advice I received from this team completely transformed my future. I couldn't be happier with the results.",
    },
    {
      image: person3,
      name: "Alex Walker",
      title: "Attorney",
      quote:
        "Estate planning is crucial, and they made the process seamless and stress-free. I can rest assured knowing family's future is secure.",
    },
  ];
  const offers = [
    {
      icon: <Expert />,
      name: "Expert Guidance",
      info: "Get personalized financial roadmaps from our seasoned professionals. Chart your financial course with tailored advice and strategic planning designed to reach your specific goals.",
    },
    {
      icon: <Risk />,
      name: "Risk Management",
      info: "Sleep soundly knowing your financial future is secure. We proactively manage and minimize risks, safeguarding your assets and ensuring lasting financial stability.",
    },
    {
      icon: <Custom />,
      name: "Customized Solutions",
      info: "Cut through the financial noise with personalized solutions. We address your unique challenges and fuel your aspirations with customized financial strategies that get you results.",
    },
  ];

  return (
    <section id="testimonials" className="testimonials general-sec">
      <SectionTemplate
        title={"TESTIMONIALS"}
        heading={"What Our Customers Say"}
        showBtn={false}
      >
        <p>
          Discover the Success Stories and Satisfaction of Clients Who Have
          Benefited from Our Expertise and Personalized Financial Guidance
        </p>
        <div className="testimonial-cards grid-auto">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </div>
      </SectionTemplate>

      <h3 className="offers-heading">
        Our Team Provides Valuable Services at Any Time in Any Situation
      </h3>
      <div className="grid-auto offers">
        {offers.map((offer) => (
          <OffersCard key={offer.name} {...offer} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
