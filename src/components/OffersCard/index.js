import "./index.css";

const OffersCard = ({ icon, name, info }) => {
  return (
    <div className="offer">
      <span>{icon}</span>
      <h4>{name}</h4>
      <p>{info}</p>
    </div>
  );
};

export default OffersCard;
