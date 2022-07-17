import * as React from "react";
import { useState } from 'react';
import note_tape_long from "../images/note_tape_long.svg";
import about_graphic from "../images/about_graphic.png";
import paperIcon from "../images/paper icon.webp";
import exeIcon from "../images/exe.png";
import Window from './Window';
import ClueGame from "./ClueGame";
import Minesweeper from "./Minesweeper";
import pointer_sign from "../images/pointer_sign.svg";



let aboutStyles = {
    padding: "4em 0em",
    display: "flex",
    justifyContent: "space-around",
    width: "100%",
    position: 'relative',
    textAlign: 'center'
}

let cardStyles = {
    display: "inline-block",
    position: "relative",
    backgroundColor: "#FDF4EF",
    padding: "1em",
    borderRadius: "1rem",
    textAlign: 'left',
}

let imgStyles = {
    position: "absolute",
    height: "2em",
    top: "-1rem",
    left: "50%",
    transform: "translateX(-50%)"
}

let note = `I've hidden my prized waffle. This is the only place I know it'll be safe. It was the last waffle I got before the Waffle House closed, and it holds a special place in my heart. While I want to keep it safe, I also want to make sure I can find it again. But I don't want to make it easy. I've left clues in this folder that only I can understand. For anyone who isn't me: good luck :)`;

let riddle1 = `I am lucky to some, and unlucky to others.
As a person I am too little to be on my own, but in geometry I am just enough.
Jokingly, me plus myself is 8.
What am I?`;

const About = ({ setComplete }) => {
  let [showWindow, setShowWindow] = useState(false);
  let [showNote, setShowNote] = useState(false);
  let [showVault, setShowVault] = useState(false);
  let [showRiddle1, setShowRiddle1] = useState(false);
  let [showRiddle2, setShowRiddle2] = useState(false);
  let [showRiddle3, setShowRiddle3] = useState(false);
  let [coords, setCoords] = useState({x: 0, y: 0});

  function displayWindow(showfunc){
    let w = window.innerWidth;
    setCoords({x: w - 500 - w/8, y: 0});
    showfunc(true)
  }

  function vaultKeyDown(e){
    if (e.keyCode === 13){
      if (e.target.value === '314'){
        setShowVault(false);
        setComplete(true);
      }
    }
  }

  return (
    <>
    <h1 style={{textAlign: 'center', textDecoration: 'none'}}>WaffleHacks 2022 is over!</h1>

    <p className="poppins-light" style={{textAlign: "center"}}>
      Enter your name and email to get notified about next year's event!
    </p>
    <form className="reminder-form" action="https://postal.hackclub.com/subscribe" method="POST" acceptCharset="utf-8">
      <div className="reminder-form-inputs">
        <div className="reminder-form-input">
          <label htmlFor="name">Name</label><br/>
          <input type="text" name="name" id="name"/>
        </div>
        <div className="reminder-form-input">
          <label htmlFor="email">Email</label><br/>
          <input type="email" name="email" id="email"/><br/>
        </div>
      </div>
      <div className="hidden">
        <label htmlFor="hp">HP</label><br/>
        <input type="text" name="hp" id="hp"/>
      </div>
      <input type="hidden" name="list" value="7634AV9AbMb3iQ4Eal7635j09w"/>
      <input type="hidden" name="subform" value="yes"/>
      <div className="reminder-form-submit-container">
        <button className="reminder-form-submit" type="submit" name="submit" id="submit">
          <img src={pointer_sign} alt="pointer" />
          <span>Get Notified!</span>
        </button>
      </div>
    </form>

    <div id="about" style={aboutStyles}>
        <div style={ cardStyles }>
          <img
            src={note_tape_long}
            alt=""
            style={imgStyles}
          />
          <h2 style={{ textAlign: "center" }}>about</h2>
          <p className='poppins-light' style={{ maxWidth: "30vw", fontSize: "1rem", fontWeight: 'lighter' }}>
            WaffleHacks is a 48-hour student-organized hackathon working to
            bring technical solutions to your local communities and small
            businesses.
            <br />
            <br />
            We welcome all students, of high school level and beyond, and of all
            technical proficiency levels, to join us on June 17th - 19th, 2022.
          </p>
        </div>
        <div style={{marginTop: '1rem'}}>
          <div style={{position: 'relative', display: 'inline-block'}}>
            <img src={about_graphic} alt="" id="about-graphic"  style={{ height: "20em" }} />
            <div onDoubleClick={() => displayWindow(setShowWindow)} style={{position: 'absolute', left: '77%', top: '28.1%', width: '2.8rem', height: '1.85rem'}}></div>
          </div>

        </div>
        { showWindow &&
          <Window removeWindow={() => {setShowWindow(false)}} coords={coords} size={[500, 300]} name='File Explorer'>
            <div style={{display: 'flex', flexDirection: 'column', padding: '10px', fontSize: '1.5rem'}}>

              <div onDoubleClick={() => displayWindow(setShowNote)} style={{display: 'flex', alignItems: 'center', cursor: 'pointer', marginBottom: '0.5rem'}}>
                <img src={paperIcon} alt="txt file icon" style={{height: '1.25rem', marginRight: '0.75rem', cursor: 'pointer'}} />
                <span style={{cursor: 'pointer'}}>message.txt</span>
              </div>

              <div onDoubleClick={() => displayWindow(setShowVault)} style={{display: 'flex', alignItems: 'center', cursor: 'pointer', marginBottom: '0.5rem'}}>
                <img src={exeIcon} alt="exe file icon" style={{height: '1.5rem', marginRight: '0.75rem', cursor: 'pointer'}} />
                <span style={{cursor: 'pointer'}}>vault.exe</span>
              </div>

              <div onDoubleClick={() => displayWindow(setShowRiddle1)} style={{display: 'flex', alignItems: 'center', cursor: 'pointer', marginBottom: '0.5rem'}}>
                <img src={paperIcon} alt="txt file icon" style={{height: '1.5rem', marginRight: '0.75rem', cursor: 'pointer'}} />
                <span style={{cursor: 'pointer'}}>clue 1.txt</span>
              </div>

              <div onDoubleClick={() => displayWindow(setShowRiddle2)} style={{display: 'flex', alignItems: 'center', cursor: 'pointer', marginBottom: '0.5rem'}}>
                <img src={exeIcon} alt="exe file icon" style={{height: '1.5rem', marginRight: '0.75rem', cursor: 'pointer'}} />
                <span style={{cursor: 'pointer'}}>clue 2.exe</span>
              </div>
              <div onDoubleClick={() => displayWindow(setShowRiddle3)} style={{display: 'flex', alignItems: 'center', cursor: 'pointer', marginBottom: '0.5rem'}}>
                <img src={exeIcon} alt="exe file icon" style={{height: '1.5rem', marginRight: '0.75rem', cursor: 'pointer'}} />
                <span style={{cursor: 'pointer'}}>clue 3.exe</span>
              </div>

            </div>
          </Window>
        }

        { showNote &&
          <Window removeWindow={() => {setShowNote(false)}} coords={coords} size={[500, 300]} name='Notepad'>
            <div style={{width: '100%', height: '100%', padding: '5px', boxSizing: 'border-box'}}>
              <textarea style={{width: '100%', height: '100%', outline: 'none', border: 'none'}}>{note}</textarea>
            </div>
          </Window>
        }
        { showVault &&
          <Window removeWindow={() => {setShowVault(false)}} coords={coords} size={[500, 300]} name='Vault :)'>
            <div style={{background: 'rgb(30, 30, 40)', width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', textAlign: 'center'}}>
              <h2 style={{color: 'white', textDecoration: 'none', marginTop: '0'}}>Password</h2>
              <input type="password" onKeyDown={vaultKeyDown} style={{background: 'none', border: '2px solid white', width: '50%', minWidth: '10rem', color: 'white', outline: 'none', padding: '0.25rem', fontSize: '1.1rem'}} />
            </div>
          </Window>
        }

        { showRiddle1 &&
          <Window removeWindow={() => {setShowRiddle1(false)}} coords={coords} size={[500, 300]} name='Notepad'>
             <div style={{width: '100%', height: '100%', padding: '5px', boxSizing: 'border-box'}}>
              <textarea name="" id="" style={{width: '100%', height: '100%', outline: 'none', border: 'none'}}>{riddle1}</textarea>
            </div>
          </Window>
        }
        { showRiddle2 &&
            <ClueGame showRiddle={setShowRiddle2} windowCoords={coords} />
        }
        { showRiddle3 &&
            <Minesweeper showRiddle={setShowRiddle3} windowCoords={coords} />
        }


      </div>
      </>
  )
}

export default About