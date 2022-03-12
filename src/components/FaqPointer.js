import * as React from "react";
import faq_pointer from "../images/faq_pointer.svg";

let pointerWid = "28vw";

let pointerStyles = {
  width: pointerWid,
  display: "flex",
  alignItems: "center",
  position: "relative",
  margin: "1.6vw 1vw",
};

const FaqPointer = ({ question, desc }) => {
  return (
    <div className="faq-pointer" style={pointerStyles}>
      <img src={faq_pointer} alt="" style={{ width: pointerWid }} />
      <span style={{ position: "absolute", left: "1rem", fontSize: "1.5vw" }}>
        {question}
      </span>
    </div>
  );
};

export default FaqPointer;
