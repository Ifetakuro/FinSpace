import "./index.css";
import { Comment } from "../../assets/svg";

const TestimonialCard = ({ image, name, title, quote }) => {
  return (
    <div className="testimonial-card">
      <div className="profile-div">
        <img src={image} alt={name} />
        <div>
          <h4>{name}</h4>
          <p>{title}</p>
        </div>
      </div>
      <p className="quote">{quote}</p>
      <div className="comment-svg">
        <Comment />
      </div>
    </div>
  );
};

export default TestimonialCard;
