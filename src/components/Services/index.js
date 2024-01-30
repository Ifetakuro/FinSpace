import "./index.css";
import finance from "../../assets/images/financial.png";
import invest from "../../assets/images/investment.png";
import estate from "../../assets/images/estate.png";
import wealth from "../../assets/images/wealth.png";

const servicesImages = [
  { src: finance, name: "Financial Planning" },
  { src: invest, name: "Investment Advisory" },
  { src: estate, name: "Estate Planning" },
  { src: wealth, name: "Wealth Management" },
];

const Services = () => {
  return (
    <div className="services-lists grid-auto">
      {servicesImages.map(({ src, name }) => (
        <div key={name} className="services-list">
          <img src={src} alt={name} />
          <p>{name}</p>
        </div>
      ))}
    </div>
  );
};

export default Services;
