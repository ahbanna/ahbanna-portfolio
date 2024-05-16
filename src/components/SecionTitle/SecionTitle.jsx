import "./SecionTitle.css";
const SectionTitle = ({ title, subtitle, des, text }) => {
  return (
    <div
      className="section-title-container"
      data-aos="fade-down"
      data-aos-duration="1500"
    >
      <span>{text}</span>
      <h2 className="section-title">{title}</h2>
      {subtitle && <span className="section-subtitle">{subtitle}</span>}
      {des && <p className="section-des">{des}</p>}
    </div>
  );
};

export default SectionTitle;
