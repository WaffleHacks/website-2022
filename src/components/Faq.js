import * as React from "react";
import faq_backg from '../images/faqbackg.svg';
import note_tape from "../images/note_tape.svg"

import FaqPointer from "./FaqPointer";


const Faq = () => {
  return (
    <div id='faq'>
        <img id='faq-bkg' src={faq_backg} alt="FAQ background"  style={{width: '100%', height: '100%'}} />

        <div id='faq-pointers' style={{position: 'absolute', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', top: 0, width: '100%', padding: '6vw 16vw 0 19vw', boxSizing: 'border-box'}}>
            
            <div id='faq-tape' style={{position: 'relative', marginBottom: '2vw'}}>
              <img
                  src={note_tape} alt="FAQ tape"
                  style={{width: "15vw", margin: '0 35vw'}}
              />
              <span style={{
                  position: 'absolute',
                  left: "50%",
                  top: '45%',
                  transform: "translateX(-50%) translateY(-50%)",
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: '2.5vw'
                  }}>
                  FAQs
              </span>
            </div>

            <FaqPointer question='What is a hackathon?' />
            <FaqPointer question='When is the registration deadline?' />
            <FaqPointer question='Who can attend?' />
            <FaqPointer question='Do I have to submit a project to join?' />
            <FaqPointer question='How will teams works?' />
            <FaqPointer question='What are hackathon tracks?' />
            <FaqPointer question='I have more questions!' />
            <FaqPointer question='Any guidance for beginners?' />
        </div>
    </div>
  )
}

export default Faq