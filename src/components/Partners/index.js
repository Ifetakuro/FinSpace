import "./index.css";
import airbnb from "../../assets/images/airbnb.png";
import amazon from "../../assets/images/amazon.png";
import fedex from "../../assets/images/fedex.png";
import ripple from "../../assets/images/ripple.png";
import stripe from "../../assets/images/stripe.png";
import walmart from "../../assets/images/walmart.png";

const partnerImages = [
  { src: walmart, alt: "Walmart" },
  { src: airbnb, alt: "Airbnb" },
  { src: amazon, alt: "Amazon" },
  { src: fedex, alt: "FedEx" },
  { src: ripple, alt: "Ripple" },
  { src: stripe, alt: "Stripe" },
];

const Partners = () => {
  return (
    <div className="partners general-sec">
      {partnerImages.map((partner, index) => (
        <img key={index} src={partner.src} alt={partner.alt} />
      ))}
    </div>
  );
};

export default Partners;
