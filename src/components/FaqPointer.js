import * as React from "react";
import faq_pointer from "../images/faq_pointer.svg";
import { useRef } from "react";

let pointerWid = "28vw";

let pointerStyles = {
  width: pointerWid,
  position: 'relative',
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  margin: "1.6vw 1vw",
  justifyContent: "center",
};

const FaqPointer = ({ single, ind, wasLeft, mained, question, desc, trigger }) => {
  let show = single === false || single === ind;
  let showDesc = single === ind;
  let el = useRef(null);
  if (showDesc){
        setTimeout(() => {
        el.current.style.position = 'absolute'
        el.current.getElementsByClassName('faq-desc')[0].style.display = 'block';
      }, 750);
  }
  else if (mained){
    el.current.style.position = 'relative';
    el.current.getElementsByClassName('faq-desc')[0].style.display = 'none';
  }
  return (
    <div ref={el} className={"faq-pointer" + (show ? wasLeft ? ' faq-reshow' : '' : ' faq-noshow') + (showDesc ? ' main-faq' : '')} style={pointerStyles} onClick={trigger}>
      <img src={faq_pointer} alt="" style={{ width: pointerWid }} />
      <span style={{ position: "absolute", left: "1rem", fontSize: "1.5vw" }}>
        {question}
      </span>

      <div className="faq-desc" style={{display: 'none', position: 'absolute', top: '5rem'}}>
        <span style={{ fontSize: "1.5vw", color: 'rgb(255, 219, 184)' }}>{desc}</span>
      </div>
    </div>
  );
};

export default FaqPointer;
