import * as React from 'react';
import { useState, useRef, useEffect } from 'react';
import Window from './Window';
import flag from '../images/msflag.svg';
import bomb from '../images/msbomb.svg';
import wafflehappy from '../images/waffle character.png';
import wafflesmug from '../images/waffle character smug.png';
import wafflesad from '../images/waffle character sad.png';



// 0 = empty, 1 = floor tile, 2 = table tile, 3 = fork, 4 = puddle, 5 = treasure chest, 6 = treasure chest partially open, 7 = treasure chest open
// game layout with a grid of tiles 10 x 29
// tile size is 18x18


// the 4 shape is 3x5
var fourPattern = [
    [1, 0, 1],
    [1, 0, 1],
    [1, 1, 1],
    [0, 0, 1],
    [0, 0, 1]
]


const Minesweeper = ({ showRiddle, windowCoords }) => {



    var [board, setBoard] = useState([]);
    var [show, setShow] = useState([]);
    var [winSize, setWinSize] = useState([540, 680]);
    var [gameProgress, setGameProgress] = useState(0);

    function init(){
        let board = new Array(9);
        let show = new Array(9);
        for (let i = 0; i < board.length; i++){
            board[i] = new Array(9).fill(0);
            show[i] = new Array(9).fill(0);
        }
        
        // fill with bombs
        let foury = Math.floor(Math.random() * (9 - fourPattern.length));
        let fourx = Math.floor(Math.random() * (9 - fourPattern[0].length));
        for (let y = 0; y < fourPattern.length; y++){
            for (let x = 0; x < fourPattern[0].length; x++){
                if (fourPattern[y][x] === 1){
                    board[foury + y][fourx + x] = -1;
                }
            }
        }

        // fill with numbers
        for (let y = 0; y < board.length; y++){
            for (let x = 0; x < board[0].length; x++){
                if (board[y][x] !== -1){
                    let num = 0;
                    for (let yy = -1; yy <= 1; yy++){
                        for (let xx = -1; xx <= 1; xx++){
                            if (board[y + yy] && board[y + yy][x + xx] === -1){
                                num++;
                            }
                        }
                    }
                    board[y][x] = num;
                }
            }
        }
        
        setBoard(board);
        setShow(show);
        setGameProgress(0);
    }

    // load sprites`
    useEffect(() => {
       init();
    }, []);

    function fillZeros(y, x, newShow){
        if (y < 0 || x < 0 || y >= board.length || x >= board[0].length || newShow[y][x] === true) return;
        newShow[y][x] = true;
        if (board[y][x] === 0){
            for (let yy = -1; yy <= 1; yy++){
                for (let xx = -1; xx <= 1; xx++){
                    fillZeros(y + yy, x + xx, newShow);
                }
            }
        }
    }

    function endgame(){
        setGameProgress(-1);
    }

    function checkWin(show){
        for (let y = 0; y < board.length; y++){
            for (let x = 0; x < board[0].length; x++){
                if (board[y][x] !== -1 && show[y][x] === 0){
                    return false;
                }
            }
        }
        return true;
    }

    function clickBox(e) {
        if (gameProgress != 0) return;
        let el = e.target;
        if (!el.id) el = el.parentNode;
        let [y, x] = el.id.split('-').map(x => parseInt(x));
        el.classList.remove('unflipped');
        el.classList.add('flipped');
        let newShow = [];
        for (var i = 0; i < show.length; i++)
            newShow[i] = show[i].slice();
        if (board[y][x] === -1) endgame();
        if (board[y][x] === 0){
            fillZeros(y, x, newShow);
        }
        else newShow[y][x] = 1;
        setShow(newShow);
        if (checkWin(newShow)){
            setGameProgress(1);
        }
    }

    function flagBox(e) {
        let el = e.target;
        e.preventDefault();
        if (gameProgress != 0) return;
        if (!el.id) el = el.parentNode;
        var [y, x] = el.id.split('-').map(x => parseInt(x));
        console.log(el.id, y, x);
        var newShow = [];
        if (show[y][x] == 1) return;
        if (show[y][x] == 0){
            el.classList.remove('unflipped');
            el.classList.add('flipped');
            for (var i = 0; i < show.length; i++)
                newShow[i] = show[i].slice();
            newShow[y][x] = 2;
        }
        else {
            el.classList.add('unflipped');
            el.classList.remove('flipped');
            for (var i = 0; i < show.length; i++)
                newShow[i] = show[i].slice();
            newShow[y][x] = 0;
        }
        setShow(newShow);
    }

    function showNum(y, x){
        if (!show[y][x]) return '';
        if (show[y][x] == 2){
            return (
                <img src={flag} alt="flag" className='ms-flag' />
            );
        }
        if (board[y][x] === -1){
            return (
                <img src={bomb} alt="bomb" className='ms-bomb' />
            );
        }
        if (board[y][x] === 0) return '';
        return board[y][x];
    }

    function exit(){
        showRiddle(false);
    }
    
    return (
        <Window removeWindow={exit} coords={windowCoords} size={winSize} name='Game' onResize={(w, h) => setWinSize([w, h])}>
            {/* 9x9 grid */}
            <center id='ms-container' style={{width: '100%', height: '100%', fontSize: Math.min(...winSize) / 20}}>
                <h1 style={{marginTop: 0, paddingTop: '1rem', marginBottom: '0.5rem', fontSize: Math.min(...winSize) / 10}}>Wafflesweeper</h1>
                <img src={gameProgress == 0 ? wafflesmug : gameProgress == -1 ? wafflesad : wafflehappy} alt="" className='pixelated' onClick={init} style={{width: Math.min(...winSize) / 8}} />
                <div id='ms-grid' >
                    {
                        board.map((row, y) => {
                            return (
                                <>
                                    {
                                        row.map((col, x) => {
                                            return (
                                                <div key={y + ' ' + x} id={y + '-' + x} className={`ms-block ${show[y][x] ? 'flipped' : 'unflipped'}`} onClick={clickBox} onContextMenu={flagBox}>
                                                    {showNum(y, x)}
                                                </div>
                                            )
                                        })
                                    }
                                </>
                            )
                        })
                    }

                </div>
            </center>
        </Window>
        )
}

export default Minesweeper