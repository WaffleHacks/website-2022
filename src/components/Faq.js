import * as React from "react";
import faq_backg from '../images/faqbackg.svg';
import note_tape from "../images/note_tape.svg"
import { useState, useRef } from "react";

import FaqPointer from "./FaqPointer";


const Faq = () => {
  const faqs = [
    // ['What is WaffleHacks?', 'WaffleHacks is a hackathon that is held annually in the fall of 2019. It is a 24-hour hackathon where students from all over the world come together to create and build something amazing. We are a community of students, hackers, and engineers who are passionate about building the future of technology.'],
    ['What is a hackathon?', 'A hackathon is a 24-hour event where students come together to create and build something amazing. Hackathons are a great way to learn new skills and gain experience in a fast-paced environment. We are a community of students, hackers, and engineers who are passionate about building the future of technology.'],
    ['When is the registration deadline?', 'Lorem ipsum'],
    ['Who can attend?', 'Lorem ipsum'],
    ['Do I have to submit a project to join?', 'Lorem ipsum'],
    ['How will teams work?', 'Lorem ipsum'],
    ['What are hackathon tracks?', 'Lorem ipsum'],
    ['I have more questions!', 'Lorem ipsum'],
    ['Any guidance for beginners?', 'Lorem ipsum'],
  ];
  const left = useRef(Array(faqs.length).fill(false));
  const mained = useRef(Array(faqs.length).fill(false));

  const [showSingle, setShow] = useState(false);

  function stopProp(e){
    if ('stopPropagation' in e) e.stopPropagation();
    e.cancelBubble = true;
  }

  return (
    <div id='faq' onClick={() => setShow(false)}>
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

            {faqs.map((faq, index) => {
              if (showSingle !== false && showSingle !== index) left.current[index] = true;
              if (showSingle === index) mained.current[index] = true;
              return (
                <FaqPointer key={index} ind={index} wasLeft={left.current[index]} mained={mained.current[index]} single={showSingle} question={faq[0]} desc={faq[1]} trigger={(e) => {stopProp(e); setShow(index);}}/>
              )
            })}

        </div>
    </div>
  )
}

export default Faq