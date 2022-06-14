import * as React from 'react'
import pointer_sign from "../images/pointer_sign.svg";
import { useState } from 'react';
import down from "../images/down.svg";

let events = [
    [ 0, 17, "WaffleHacks Opening Ceremony", 0],
    [ 0, 19, "Resume Workshop", 1, "Are you a student searching for your next internship? This workshop runs through the basics of tech resume building and additional tips to make your resume stand out. Learn some great tips and tricks from an ex-NASA intern and current full time SWE at Microsoft!" ],
    [ 0, 20.5, "What They Don’t Tell You About Tech Interviews", 1, "One of the biggest concerns for high school and college students is figuring out how to land a successful job. But for many, one great first step is to land an internship! In this panel, we’ll introduce interns who have gone through the application process and found success. You’ll get to hear exclusive stories from interns at Microsoft, NASA, Google, and more!<br>Please come with questions! We will have a Q & A time at the end of the panel for you to ask your burning questions to our panelists!" ],
    [ 0, 22, "Intro to Python", 2, "Wheeeeeeeee (thank you Kevin)" ],
    [ 0, 23, "Tetris Tournament", 3, "Interested in showing off t-spins or just looking to have a fun time? Come join our annual Tetris Tournament and compete against other participants via <a href='tetr.io'>tetr.io</a>. Tetr.io is a completely free multiplayer browser game so if you don’t have an account, please make sure to register before the tournament starts!" ],
    
    [ 1, 10, "Intro to Start Ups", 2 ],
    [ 1, 11, "Fighting the Tech Bros with Ella", 1 ],
    [ 1, 12, "Backend Workshop", 2, "Learn how to quickly plan, build, and deploy a backend in Python using Flask, and then integrate it with a React frontend. In this workshop you will learn to create a todo list webapp complete with lists and tags." ],
    [ 1, 13, "BIPOC in Tech", 1, "Did you know that 16% of the tech industry is made up of persons who identify as BIPOC (Black, Indigenous, and People of Color)? In 2022, it is sad to hear this number is low considering the many talented individuals who are being looked over for opportunities. Join us for a celebration of achievements and an honest conversation about what it means to be a person of color in tech." ],
    [ 1, 14, "Hacker Icebreakers with MLH", 3 ],
    [ 1, 15, "Data Visualization (Plotly Express)", 2, "Data visualization is an integral part of data. It allows us to see data in aesthetically pleasing ways and helps us understand its importance. In this workshop, we will learn what data visualization is, its importance, and create a visualization for the biggest girl group in the world. Prior to attending this workshop, participants should download the dataset and install the latest version of Python on their machine. <br> <i>Link to install can be found <a href='https://www.python.org/downloads/'>here.</a></i><br><br>Find the Colab Notebook <a href=\"https://colab.research.google.com/drive/1Ov0hDJFBqKwiWo0x09Xm9JvN66-ND1Nh?usp=sharing\">here</a>" ],
    [ 1, 16, "How to Start Your Career from Hackathons", 1 ],
    [ 1, 17, "Sponsor Music", 2 ],
    [ 1, 18, "Intro to UI/UX - Figma", 2, "Planning out what your project looks like is a very important part of the coding process! We know that creating a hackathon project can be a little daunting for some, so in this session, we’re presenting a way for you to turn your idea into a professional mock MVP through Figma, a design and prototyping tool. We’ll be creating a music player & queue to demonstrate wireframing/prototyping techniques!" ],
    [ 1, 19, "Intro to Web Development", 2, "Throughout this hackathon you’re tasked with coming up with a minimum viable product (MVP) or solution to make an impact on others in your community. We know that can be a little daunting for some, so in this session, we’re presenting a way for you to turn your idea into reality, by taking a design and coding it! " ],
    [ 1, 20, "Intro to Notion", 2, "Do you ever feel overwhelmed with due dates, exams, assignments, and life in general because it seems like your life is a big chaotic mess? Well, don’t fret. In this workshop, we will help you better organize your daily tasks and manage your time better with Notion! You will learn how to effectively use the application to fit YOUR needs and receive organization tips from our workshop leader, Amara. She is a rising junior at Stony Brook University who has used Notion for over two years. You can contact her @amaraim22 on instagram for more information." ],
    [ 1, 21, "Generative Art", 2 ],

    [ 2, 10, "Drawing Competition/Photo Raffle Submission Deadline", 0, "In honor of the great waffle, we present to you the Best Waffle Drawing Competition! Submit an original work of art depicting anything related to waffles. We encourage you to use whatever media you prefer, although digital works of art would be nice :) <br><hr style='border-color: black'> Submit a picture of you and your team members working on your project. Every team member can submit a picture to get an entry into the photo raffle. We’d love to see your smiling faces and look forward to seeing all the entries." ],
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

const Calendar = () => {
    const [day, setDay] = useState(0);
    const [open, setOpen] = useState(new Array(events.length).fill(false));

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
                                { event[0] > 0 && <span className='day-arrow-l' style={{background: 'rgba(255, 255, 255, 0.5)', borderRadius: '0.5rem', padding: '0 1rem'}} onClick={() => setDay(day-1)}>{'<'}</span> }
                                { event[0] < 2 && <span className='day-arrow-r' style={{background: 'rgba(255, 255, 255, 0.5)', borderRadius: '0.5rem', padding: '0 1rem'}} onClick={() => setDay(day+1)}>{'>'}</span> }
                                
                            </>
                            }
                        </span>
                        <span key={"time" + i} className="event-time">{numberToTime(event[1])}</span>
                        <div key={"name" + i} className="event-name" style={{position: 'relative', background: colors[event[3]], overflow: 'hidden', padding: open[i] ? '1rem' : ''}}>
                            {
                                event.length === 5 && <div className='event-desc-btn' onClick={() => setOpen(open.map((e, ind) => ind === i ? !e : e))}></div>
                            }
                            <span style={{padding: '0 0.5rem'}}>{event[2]}</span>
                            {
                                event.length == 5 && <img src={down} alt="See description" onClick={() => setOpen(open.map((e, ind) => ind === i ? !e : e))} style={{position: 'absolute', right: '0.2rem', bottom: '0.3rem', width: '0.9rem', transform: open[i] ? 'scaleY(-1)' : ''}} />
                            }
                            {
                                open[i] && <p className='poppins-light event-desc' style={{fontSize: '0.9rem', padding: '0.5rem', textAlign: 'left'}} dangerouslySetInnerHTML={{__html: event[4]}}></p>
                            }
                        </div>

                        </>
                    )
                })
            }

        </div>
    </center>
    )
}

export default Calendar