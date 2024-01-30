import "./index.css";

const CustomBtn = ({ text, extraClass, ...props }) => {
  return (
    <button className={`custom-btn ${extraClass}`} {...props}>
      {text}
    </button>
  );
};

export default CustomBtn;
