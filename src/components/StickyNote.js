import * as React from "react";
import note_paper from "../images/note_paper.svg"
import note_tape from "../images/note_tape.svg"


const StickyNote = ({ img, name }) => {
  return (
    <div style={{marginBottom: '4rem', width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <div className='trackbox' style={{position: 'relative', width: '70%'}}>
        <img
          src={note_tape}
          alt=""
          style={{
            position: "absolute",
            width: "30%",
            left: "50%",
            transform: "translateX(-50%) translateY(-50%)",
            zIndex: 50
          }}
        />
        <img src={note_paper} alt="sticky note" style={{
          width: '100%',
          filter: 'drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1))'
        }} />
        <div style={{position: 'absolute', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', width: '100%', left: '0%', top: '0%'}} >
          <img src={img} alt="" style={{height: '60%', maxWidth: '70%', maxHeight: '50%'}} />
          <span className='poppins' style={{fontSize: 'calc(1em + 0.8vw)' , fontWeight: 'bolder'}}>{name}</span>
        </div>
      </div>
    </div>
  )
}

export default StickyNote