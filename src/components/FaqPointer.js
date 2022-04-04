import * as React from "react";
import faq_pointer from "../images/faq_pointer.svg";

let pointerWid = "28vw";

let pointerStyles = {
  width: pointerWid,
  position: 'relative',
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  position: "relative",
  margin: "1.6vw 1vw",
  justifyContent: "center",
};

const FaqPointer = ({ single, question, desc, trigger }) => {
  return (
    <div className="faq-pointer" style={pointerStyles} onClick={trigger}>
      <img src={faq_pointer} alt="" style={{ width: pointerWid }} />
      <span style={{ position: "absolute", left: "1rem", fontSize: "1.5vw" }}>
        {question}
      </span>

      <div id="backside" style={{display: (single !== false ? 'block' : 'none'), position: 'absolute', top: '5rem'}}>
        <span style={{ fontSize: "1.5vw", color: 'rgb(255, 219, 184)' }}>{desc}</span>
      </div>
    </div>
  );
};

export default FaqPointer;
