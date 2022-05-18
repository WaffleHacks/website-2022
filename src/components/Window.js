import * as React from "react";
import "./footer.css";
import "./window.css";

import { useState, useRef } from 'react';
import Draggable from "react-draggable";


const Window = (props) => {

  let removeWindow = props.removeWindow || (() => {});

  let [coords, setCoords] = useState(props.coords || {x: 0, y: 0});
  let [size, setSize] = useState(props.size || [300, 300]);

  let ref = useRef(null);
  let minWidth = 200;
  let minHeight = 200;
  const [windowStyles, setwindowStyles] = useState({
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    width: `${size[0]}px`,
    height: `${size[1]}px`,
    backgroundColor: '#fff',
    border: '1px solid #B4B4B4',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.4)',
    borderRadius: '5px',
    overflow: 'hidden',
    zIndex: 1,
    boxSizing: 'border-box',
    left: 0,
    top: 0
  });

  

  let circleStyles = {
    width: '0.8rem',
    height: '0.8rem',
    borderRadius: '50%',
    marginLeft: '0.5rem',
  }
  
  function stopProp(e){
    e.cancelbubble = true;
    if (e.stopPropagation) e.stopPropagation();
  }

  function onDrag(e, data){
    setCoords({x: data.x, y: data.y});
  }

  function getNum(s){
    let allowed = '1234567890';
    let c = '';
    for (let i = 0; i < s.length; i++){
      if (allowed.includes(s.charAt(i))) c += s.charAt(i);
      else break; 
    }
    return parseInt(c);
  }

  function shiftTop(e, data){
    let copy = {...windowStyles};
    
    let curHeight = getNum(copy.height);
    let y = coords.y;
    let dy = data.y;
    y = Math.min(Math.max(y + dy, 0), y + curHeight - minHeight);
    let newHeight = curHeight + (coords.y - y);
    copy.height = newHeight + 'px';

    setwindowStyles(copy);
    setCoords({x: coords.x, y: y});
    setSize([size[0], newHeight]);
  }
  function shiftBottom(e, data){
    let copy = {...windowStyles};
    
    let curHeight = getNum(copy.height);
    let newHeight = Math.max(minHeight, curHeight + data.deltaY);
    copy.height = newHeight + 'px';
    setwindowStyles(copy);
    setSize([size[0], newHeight]);
  }
  function shiftLeft(e, data){
    let copy = {...windowStyles};
    
    let curWidth = getNum(copy.width);
    let x = coords.x;
    let dx = data.x;
    x = Math.min(Math.max(x + dx, 0), x + curWidth - minWidth);
    let newWidth = curWidth + (coords.x - x);
    copy.width = newWidth + 'px';

    setwindowStyles(copy);
    setCoords({x: x, y: coords.y});
    setSize([newWidth, size[1]]);
  }
  function shiftRight(e, data){
    let copy = {...windowStyles};
    
    let curWidth = getNum(copy.width);
    let newWidth = Math.max(minWidth, curWidth + data.deltaX);
    copy.width = newWidth + 'px';
    setwindowStyles(copy);
    setSize([newWidth, size[1]]);
  }
  function shiftTopLeft(e, data){
    let copy = {...windowStyles};
    
    let curHeight = getNum(copy.height);
    let y = coords.y;
    let dy = data.y;
    y = Math.min(Math.max(y + dy, 0), y + curHeight - minHeight);
    let newHeight = curHeight + (coords.y - y);
    copy.height = newHeight + 'px';

    let curWidth = getNum(copy.width);
    let x = coords.x;
    let dx = data.x;
    x = Math.min(Math.max(x + dx, 0), x + curWidth - minWidth);
    let newWidth = curWidth + (coords.x - x);
    copy.width = newWidth + 'px';

    setwindowStyles(copy);
    setCoords({x: x, y: y});
    setSize([newWidth, newHeight]);
  }
  function shiftTopRight(e, data){
    let copy = {...windowStyles};
    
    let curHeight = getNum(copy.height);
    let y = coords.y;
    let dy = data.y;
    y = Math.min(Math.max(y + dy, 0), y + curHeight - minHeight);
    let newHeight = curHeight + (coords.y - y);
    copy.height = newHeight + 'px';

    let curWidth = getNum(copy.width);
    let newWidth = Math.max(minWidth, curWidth + data.deltaX);
    copy.width = newWidth + 'px';

    setwindowStyles(copy);
    setCoords({x: coords.x, y: y});
    setSize([newWidth, newHeight]);
  }
  function shiftBottomLeft(e, data){
    let copy = {...windowStyles};
    
    let curHeight = getNum(copy.height);
    let newHeight = Math.max(minHeight, curHeight + data.deltaY);
    copy.height = newHeight + 'px';

    let curWidth = getNum(copy.width);
    let x = coords.x;
    let dx = data.x;
    x = Math.min(Math.max(x + dx, 0), x + curWidth - minWidth);
    let newWidth = curWidth + (coords.x - x);
    copy.width = newWidth + 'px';

    setwindowStyles(copy);
    setCoords({x: x, y: coords.y});
    setSize([newWidth, newHeight]);
  }
  function shiftBottomRight(e, data){
    let copy = {...windowStyles};
    
    let curHeight = getNum(copy.height);
    let newHeight = Math.max(minHeight, curHeight + data.deltaY);
    copy.height = newHeight + 'px';

    let curWidth = getNum(copy.width);
    let newWidth = Math.max(minWidth, curWidth + data.deltaX);
    copy.width = newWidth + 'px';

    setwindowStyles(copy);
    setSize([newWidth, newHeight]);
  }

  function windowClick(e){
    stopProp(e);
  }

  return (
    <Draggable handle='.navbar' bounds={{left: 0, right: window.innerWidth - size[0]}} onDrag={onDrag} position={coords} onMouseDown={windowClick}>
        <div ref={ref} onClick={windowClick} style={windowStyles}>
          <nav className='navbar' style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 0.5rem', height: '1.5rem', backgroundColor: '#c5c5c4'}}>
            <span>{props.name || 'Window'}</span>
            <div style={{display: 'flex'}}>
              <div style={Object.assign({background: 'rgb(50, 200, 50)'}, circleStyles)}></div>
              <div style={Object.assign({background: 'rgb(245, 219, 51)'}, circleStyles)}></div>
              <div onClick={() => removeWindow()} style={Object.assign({background: 'rgb(245, 50, 51)'}, circleStyles)}></div>
            </div>
          </nav>
          <div style={{width: '100%', height: '100%', overflow: 'scroll'}}>
            {props.children}
          </div>
          {/* top */}
          <Draggable onDrag={shiftTop} position={{x: 0, y: 0}}>
            <div className='resize-area top'></div>
          </Draggable>
          {/* left */}
          <Draggable onDrag={shiftLeft} position={{x: 0, y: 0}}>
            <div className='resize-area left'></div>
          </Draggable>
          {/* bottom */}
          <Draggable onDrag={shiftBottom} position={{x: 0, y: 0}}>
            <div className='resize-area bottom'></div>
          </Draggable>
          {/* right */}
          <Draggable onDrag={shiftRight} position={{x: 0, y: 0}}>
            <div className='resize-area right'></div>
          </Draggable>
          {/* top right */}
          <Draggable onDrag={shiftTopRight} position={{x: 0, y: 0}}>
            <div className='resize-area tr'></div>
          </Draggable>
          {/* top left */}
          <Draggable onDrag={shiftTopLeft} position={{x: 0, y: 0}}>
            <div className='resize-area tl'></div>
          </Draggable>
          {/* bottom right */}
          <Draggable onDrag={shiftBottomRight} position={{x: 0, y: 0}}>
            <div className='resize-area br'></div>
          </Draggable>
          {/* bottom left */}
          <Draggable onDrag={shiftBottomLeft} position={{x: 0, y: 0}}>
            <div className='resize-area bl'></div>
          </Draggable>
        </div>
    </Draggable>
  );
  
}

export default Window;
