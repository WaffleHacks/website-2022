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

const FaqPointer = ({ single, ind, wasLeft, mained, question, desc, trigger, back }) => {
  let show = single === false || single === ind;
  let showDesc = single === ind;

  function stopProp(e){
    if ('stopPropagation' in e) e.stopPropagation();
    e.cancelBubble = true;
  }
  
  let el = useRef(null);
  if (showDesc){
        setTimeout(() => {
        el.current.style.position = 'absolute';
        el.current.getElementsByClassName('faq-desc')[0].style.display = 'block';
        el.current.getElementsByClassName('faq-question')[0].style.fontSize = 'max(1.5vw, 20px)';
        el.current.getElementsByClassName('faq-pointer-img')[0].style.width = `max(${pointerWid}, 22rem)`;
        el.current.style.width = `max(${pointerWid}, 22rem)`
        el.current.getElementsByClassName('faq-back')[0].style.display = 'block';
        
        
      }, 750);
  }
  else if (mained){
    el.current.style.position = 'relative';
    el.current.getElementsByClassName('faq-desc')[0].style.display = 'none';
    el.current.getElementsByClassName('faq-question')[0].style.fontSize = '1.5vw';
    el.current.getElementsByClassName('faq-back')[0].style.display = 'none';
    el.current.getElementsByClassName('faq-pointer-img')[0].style.width = pointerWid;
    el.current.style.width = pointerWid;
  }
  return (
    <button ref={el} className={"as-div faq-pointer" + (show ? wasLeft ? ' faq-reshow' : '' : ' faq-noshow') + (showDesc ? ' main-faq' : '')} style={pointerStyles} onClick={trigger}>
      <span className='faq-back' onClick={(e) => {stopProp(e); back();}} style={{position: "absolute", right: '110%', fontSize: 'max(1.5vw, 20px)', color: 'black', cursor: 'pointer', display: 'none' }}>Back</span>
      <img className='faq-pointer-img' src={faq_pointer} alt="" style={{ width: pointerWid }} />
      <span className='faq-question' style={{ position: "absolute", left: "1rem", fontSize: '1.5vw'}}>
        {question}
      </span>

      <div className="faq-desc" style={{display: 'none', position: 'absolute', top: 'calc(100% + 3vw)', minWidth: '50vw'}}>
        {desc}
      </div>
    </button>
  );
};

export default FaqPointer;
