import "./index.css";
import CustomBtn from "../CustomBtn";
import SectionTitle from "../SectionTitle";

const SectionTemplate = ({ title, heading, children, showBtn = true }) => {
  return (
    <div className="section-template">
      <SectionTitle title={title} />
      <h3>{heading}</h3>
      {children}
      {showBtn && (
        <CustomBtn extraClass={"outline"} text={"Explore Services"} />
      )}
    </div>
  );
};

export default SectionTemplate;
