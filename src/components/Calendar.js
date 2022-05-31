import * as React from 'react'
import pointer_sign from "../images/pointer_sign.svg";
import { graphql, useStaticQuery } from "gatsby";
import { useState, useRef, useEffect } from 'react';
import blob from "../images/syrup blob.svg";

let events = [
    [ 0, 17, "WaffleHacks Opening Ceremony", 0],
    [ 0, 19, "Resume Workshop", 1 ],
    [ 0, 20.5, "Interviewing Workshop", 1 ],
    [ 0, 22, "Intro to Python", 2 ],
    [ 0, 23, "Tetris Tournament", 3 ],

    [ 1, 0, "Tetris Tournament", 3 ],
    [ 1, 10, "Intro to Start Ups", 2 ],
    [ 1, 11, "Fighting the Tech Bros with Ella", 1 ],
    [ 1, 12, "Backend Workshop", 2 ],
    [ 1, 13, "BIPOC in Tech", 1 ],
    [ 1, 14, "Hacker Icebreakers with MLH", 3 ],
    [ 1, 15, "Data Visualization (Plotly Express)", 2 ],
    [ 1, 16, "How to Start Your Career from Hackathons", 1 ],
    [ 1, 17, "Sponsor Music", 2 ],
    [ 1, 18, "Intro to UI/UX - Figma", 2 ],
    [ 1, 19, "Intro to Web Development", 2 ],
    [ 1, 20, "Intro to Notion", 2 ],
    [ 1, 21, "Generative Art", 2 ],

    [ 2, 10, "Drawing Competition/Photo Raffle Submission Deadline", 0 ],
    [ 2, 12, "Hacker Project Submission Deadline", 0 ],
    [ 2, 14, "Internship Panel", 1 ],
    [ 2, 15, "College Applications Panel", 1 ],
    [ 2, 17, "Closing Ceremony", 0 ]
]

let colors = ['rgb(228 197 159)', 'rgb(242 165 79)', 'rgb(231 203 101)', 'rgb(249 166 115)'];

function numberToDay(num){
    switch(num){
        case 0:
            return "Friday"
        case 1:
            return "Saturday"
        case 2:
            return "Sunday"
        default:
            return "Error"
    }
}

function numberToTime(num){
    let hour = Math.floor(num);
    let min = Math.floor((num - hour) * 60);
    let ampm = "am";
    if (hour > 12){
        hour -= 12;
        ampm = "pm";
    }
    if (hour === 12) ampm = "pm";
    if (hour === 0) hour = 12;
    if (min < 10) min = "0" + min;
    return hour + ":" + min + " " + ampm;
}

const Syrupblob = ({color}) => {
    return (
        <svg className='calendar-syrup' width="434" height="116" viewBox="0 0 434 116" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_407_111)">
                <path d="M92.15 23.0779C129.33 10.0774 148.492 -4.01658 168.798 1.45092C188.818 7.03992 209.696 32.0689 250.022 35.8354C290.348 39.6019 350.408 21.8629 388.732 22.4704C427.056 22.9564 443.644 41.7889 428.772 55.8829C413.9 70.0984 367.282 79.5754 336.68 90.2674C306.364 101.081 291.778 112.866 270.614 115.539C249.45 118.091 221.708 111.53 194.538 106.67C167.368 101.81 140.77 98.6509 99.3 91.3609C57.544 83.9494 0.91601 72.1639 0.34401 60.2569C-0.22799 48.3499 54.97 36.1999 92.15 23.0779Z" fill={color}/>
            </g>
            <defs>
                <clipPath id="clip0_407_111">
                    <rect width="116" height="434" fill="white" transform="translate(0 116) rotate(-90)"/>
                </clipPath>
            </defs>
        </svg>
    );
}

const Calendar = () => {
//     const data = useStaticQuery(graphql`
//     query CalendarQuery {
//         directus
//     }
//   `);
//   console.log(data);

    const [day, setDay] = useState(0);

    return (
    <center style={{marginTop: '6rem'}}>
        {/* {data ? data.directus : ""} */}
        <div id='calendar' className='poppins' style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', position: 'relative'}}>
            <div style={{position: 'absolute', top: '-4rem', left: '-2rem', background: 'none', minHeight: '0'}}>
                <img src={pointer_sign} alt="pointer" style={{height: '3rem'}} />
                <span style={{color: 'white', position: 'absolute', top: '52%', left: '40%', transform: 'translate(-50%, -50%)', fontSize: '1.5rem', fontFamily: 'DreamingOutloud'}}>CALENDAR</span>
            </div>
            {/* head */}
            <span className="calendar-head head-day poppins-bold">Day</span>
            <span className="calendar-head head-time poppins-bold">Time (EDT)</span>
            <span className="calendar-head head-event poppins-bold">Event</span>

            {/* events */}
            {
                events.map((event, i) => {
                    let newDay = i > 0 && events[i-1][0] !== event[0];
                    if (event[0] !== day) return null;
                    return (
                        <>
                        <span key={"day" + i} className={"event-day" + ((newDay || i === 0) ? " day-choose" : " day-blank")} style={{position: (newDay || i === 0) ? 'relative' : ''}}>
                            {(newDay || i === 0) && <>
                                <span>{numberToDay(event[0])}</span>
                                { event[0] > 0 && <span className='day-arrow-l' onClick={() => setDay(day-1)}>{'<'}</span> }
                                { event[0] < 2 && <span className='day-arrow-r' onClick={() => setDay(day+1)}>{'>'}</span> }
                                
                            </>
                            }
                        </span>
                        <span key={"time" + i} className="event-time">{numberToTime(event[1])}</span>
                        <span key={"name" + i} className="event-name" style={{position: 'relative', background: colors[event[3]]}}>{event[2]}</span>
                        </>
                    )
                })
            }

        </div>
    </center>
    )
}

export default Calendar