import React from "react";
import CV from "../../assets/Priyanshu_singh_20146_Resume.pdf";
const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        {" "}
        Download CV{" "}
      </a>
      <a href="https://wa.me/+919304011004" className="btn btn-primary">
        {" "}
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
