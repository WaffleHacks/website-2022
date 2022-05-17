import * as React from "react";
import faq_backg from '../images/faqbackg.svg';
import note_tape from "../images/note_tape.svg"
import { useState, useRef } from "react";

import FaqPointer from "./FaqPointer";


const Faq = () => {
  const faqs = [
    // ['What is WaffleHacks?', 'WaffleHacks is a hackathon that is held annually in the fall of 2019. It is a 24-hour hackathon where students from all over the world come together to create and build something amazing. We are a community of students, hackers, and engineers who are passionate about building the future of technology.'],
    ['What is a hackathon?', <span style={{ fontSize: "1.5vw", color: 'rgb(255, 219, 184)' }}>A hackathon is a 24-hour event where students come together to create and build something amazing. Hackathons are a great way to learn new skills and gain experience in a fast-paced environment. We are a community of students, hackers, and engineers who are passionate about building the future of technology.</span>],
    ['Who can attend?', <span style={{ fontSize: "1.5vw", color: 'rgb(255, 219, 184)' }}>We welcome all highschool and undergraduate students, regardless of gender, major, and school! Open to coders and designers of all skill levels. Coding experience is not required.</span>],
    ['How many people per team?', <span style={{ fontSize: "1.5vw", color: 'rgb(255, 219, 184)' }}>A team should consist of a minimum of 1 person to a max of 4. There will only be 4 prizes distributed per team. You are free to choose whoever is going to be on your team either prior or during the day of the event. You are also free to work on your own.</span>],
    ['When is the registration deadline?', <span style={{ fontSize: "1.5vw", color: 'rgb(255, 219, 184)' }}>June 16th, by 11:59 PM (EST)</span>],
    ['Do I have to submit a project to join?', <span style={{ fontSize: "1.5vw", color: 'rgb(255, 219, 184)' }}>Nope! You are free to attend any of our workshops and events if you would so choose to.</span>],
    ['What are the prize categories?', <span style={{ fontSize: "1.5vw", color: 'rgb(255, 219, 184)' }}>We have prizes for each of the four tracks, as well as two more: Best Hack for Cozy Theme UI/UX and Best Diversity &amp; Inclusion Hack! Check the <a href="https://wffl.link/devpost" style={{color: 'rgb(255, 219, 184)'}}>devpost</a> for more details!</span>],
    ['Any guidance for beginners?', <span style={{ fontSize: "1.5vw", color: 'rgb(255, 219, 184)' }}>In addition to the technical workshops that we are hosting throughout WaffleHacks, there are many online resources if you want to learn about programming. These resources include but are not limited to:<br /><ul><li>KhanAcademy</li><li>W3Schools</li><li>Codecademy</li></ul></span>],
    ['I have more questions!', <span style={{ fontSize: "1.5vw", color: 'rgb(255, 219, 184)' }}><ul><li>If you have anything you want us to know prior to the event, please feel free to email us at <a href='mailto:operations@wafflehacks.org' style={{color: 'rgb(255, 219, 184)'}}>operations@wafflehacks.org</a></li><br /><li>If you have any questions or concerns during the event, you can always chat with us in person or in the Discord channel, and we will do our best to help you!</li></ul></span>
    ],
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