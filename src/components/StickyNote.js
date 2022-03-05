import * as React from "react";
import note_paper from "../images/note_paper.svg"
import note_tape from "../images/note_tape.svg"


const StickyNote = ({ img, name }) => {
  return (
    <div style={{margin: '1rem 1rem 3rem 1rem', position: 'relative', padding: '10%', boxSizing: 'border-box'}}>
      <img
        src={note_tape}
        alt=""
        style={{
          position: "absolute",
          width: "30%",
          left: "50%",
          transform: "translateX(-50%) translateY(-50%)",
        }}
      />
      <img src={note_paper} alt="sticky note" style={{width: '100%'}} />
      <div style={{position: 'absolute', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', width: '100%', left: '0%', top: '0%'}} >
        <img src={img} alt="waffle stack" style={{maxWidth: '100%', maxHeight: '60%'}} />
        <span style={{fontSize: '1.5em'}}>{name}</span>
      </div>
    </div>
  )
}

export default StickyNote