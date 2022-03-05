import * as React from "react";
import faq_pointer from '../images/faq_pointer.svg';

let pointerStyles = {
    height: '3rem', 
    lineHeight: '3rem', 
    // padding: '1.5rem', 
    // backgroundImage: 'url(' + faq_pointer + ')',
    display: 'inline',
    position: 'relative',
    margin: '2rem 0'
}

const FaqPointer = ({ question, desc }) => {
  return (
    <div class='faq-pointer' style={pointerStyles}>
        <img src={faq_pointer} alt="" style={{height: '3rem'}} />
        <span style={{position: 'absolute', left: '1rem'}}>{question}</span>
    </div>
  )
}

export default FaqPointer