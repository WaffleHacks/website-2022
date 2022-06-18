import * as React from 'react'
import pointer_sign from "../images/pointer_sign.svg";
import { useState } from 'react';
import down from "../images/down.svg";

// day, hour, name, type, description
let events = [
    [ 0, 17, "WaffleHacks Opening Ceremony", 0],
    [ 0, 18, "Team Building Activities", 3, "Need a team for this weekend? We got you covered. Come to our team building period, and leave with your dream team for hackathon weekend." ],
    [ 0, 19, "Resume Workshop", 1, "Are you a student searching for your next internship? This workshop runs through the basics of tech resume building and additional tips to make your resume stand out. Learn some great tips and tricks from an ex-NASA intern and current full time SWE at Microsoft!" ],
    [ 0, 20.5, "What They Don’t Tell You About Tech Interviews", 1, "Are you terrified of the tech interview process? Do you wish someone could just give you an end-to-end overview of what the whole process is like? Or are you someone who’s very frustrated with how you just don’t seem to understand what the interviewer wants? You get interviews and you seem to do everything right on paper, but something’s still amiss? If you find yourself saying yes to any of these questions, then this workshop is for you. In this workshop, we’ll walkthrough the tech interview process, including the art of networking during COVID, the standard tech interview process, tips and tricks for behavioural and technical rounds which go beyond just getting the question right and that’ll really help you stand out as a candidate, post-interview etiquette, compensation packages and negotiation etc. The best part? I recently went through this process myself so you’ll also get to hear the silly mistakes that I made along the way and what I learnt as I went along!" ],
    [ 0, 22, "Intro to Python", 2, "Not sure where to start on your project? Fear no more, Codédex is here to teach a beginner-level python workshop. Feel free to join the workshop with your entire team. + There will be a super cool giveaway available to anyone that joins. Codédex is the number one spot for Gen Z to learn how to code! We have the number one spot for our amazing hackers." ],
    [ 0, 23, "Tetris Tournament", 3, "Interested in showing off t-spins or just looking to have a fun time? Come join our annual Tetris Tournament and compete against other participants via Tetr.io. <a href='https://tetr.io'>Tetr.io</a> is a completely free multiplayer browser game so if you don’t have an account, please make sure to register before the tournament starts!" ],

    [ 1, 10, "Intro to Start Ups", 2, "Learn more about the startup ecosystem in Nashville and opportunities for students to plug in, start companies, or get hired." ],
    [ 1, 11, "Fighting the Tech Bros with Ella", 1, "Join Gabriella and Ellie as they guide you through their own personal journeys to tech, suggest some amazing resources for breaking into tech, and provide advice for fighting the tech bros along your own journey." ],
    [ 1, 12, "Backend Workshop", 2, "Learn how to quickly plan, build, and deploy a backend in Python using Flask, and then integrate it with a React frontend. In this workshop you will learn to create a todo list webapp complete with lists and tags." ],
    [ 1, 13, "BIPOC in Tech", 1, "Did you know that 16% of the tech industry is made up of persons who identify as BIPOC (Black, Indigenous, and People of Color)? It’s 2022. Time to do better. Join us for a celebration of achievements and an honest conversation about what it means to be a person of color in tech." ],
    [ 1, 14, "Slideshow Karaoke with Ellie from MLH!", 3, "Need a break from hacking? Join our MLH coach, Ellie Popoca, for a game of Slideshow Karaoke!" ],
    [ 1, 15, "Intro to Web Development", 2, "Throughout this hackathon you’re tasked with coming up with a minimum viable product (MVP) or solution to make an impact on others in your community. We know that can be a little daunting for some, so in this session, we’re presenting a way for you to turn your idea into reality, by taking a design and coding it! " ],
    [ 1, 16, "Starting Your Career with Hackathons", 1, "<s>Our workshop will talk about the importance of Hackathons and how to use your projects to leverage your portfolio, network, and application to internships and jobs. We'll also be talking about Full Stack Training Academy and how we help students succeed in their education and early stages of their career! Join our <a href='https://discord.fullstacktraining.org/' target='_blank'>Discord server</a> to chat with our mentors and students</s>" ],
    [ 1, 17, "Be A Premier Airbnb Host!", 2, "So you want to rent out your home in the hot Nashville market but you do not know how much to rent it out for or what features matter the most. Should you add a coffee maker or a hot tub? No fear – we will walk through the data storytelling process and with Python create models to help you make the right choice and to become the next premier Airbnb host." ],
    [ 1, 18, "Intro to UI/UX - Figma", 2, "Planning out what your project looks like is a very important part of the coding process! We know that creating a hackathon project can be a little daunting for some, so in this session, we’re presenting a way for you to turn your idea into a professional mock MVP through Figma, a design and prototyping tool. We’ll be creating a music player & queue to demonstrate wireframing/prototyping techniques!<br><br><i>*Before the session, please create a free account on Figma by following these steps:</i><br><ol><li>Navigate to <a href='www.figma.com'>www.figma.com</a></li><li>In the top right corner, click Sign Up. If you already have an account, click Log in</li><li>Sign in with Google or type in your email and a password.</li><li>Answer the questions as they ask you to (don’t worry, they’re just trying to make their app the best for you!)</li><li>Verify your email</li><li>You’re good to go! You may see a few pop-ups for onboarding, so if you’re getting an account before the session, feel free to go through them and explore Figma!</li></ol>" ],
    [ 1, 19, "Data Visualization feat. Plotly Express", 2, "Data visualization is an integral part of data. It allows us to see data in aesthetically pleasing ways and helps us understand its importance. In this workshop, we will learn what data visualization is, its importance, and create a visualization for the biggest girl group in the world. <i>Prior to attending this workshop, participants should download the dataset and install the latest version of Python on their machine. Link to install can be found <a href=\"https://www.python.org/downloads/\">here</a>" ],
    [ 1, 20, "Intro to Notion", 2, "Do you ever feel overwhelmed with due dates, exams, assignments, and life in general because it seems like your life is a big chaotic mess? Well, don’t fret. In this workshop, we will help you better organize your daily tasks and manage your time better with Notion! You will learn how to effectively use the application to fit YOUR needs and receive organization tips from our workshop leader, Amara. She is a rising junior at Stony Brook University who has used Notion for over two years. You can contact her @amaraim22 on instagram for more information." ],
    [ 1, 21, "Computational Imaging", 2, "Come to this workshop to learn about two topics in computational imaging! First, we will discuss image pyramids and their use in blending and feature extraction. After that, we will look at light field imaging, using Stanford's light field archive to create an all in-focus image. Experience in python is strongly recommended." ],

    [ 2, 10, "Drawing Competition/Photo Raffle Submission Deadline", 0, "In honor of the great waffle, we present to you the Best Waffle Drawing Competition! Submit an original work of art depicting anything related to waffles. We encourage you to use whatever media you prefer, although digital works of art would be nice :) <br><hr style='border-color: black'> Submit a picture of you and your team members working on your project. Every team member can submit a picture to get an entry into the photo raffle. We’d love to see your smiling faces and look forward to seeing all the entries." ],
    [ 2, 12, "Hacker Project Submission Deadline", 0 ],
    [ 2, 14, "Internship Panel", 1, "One of the biggest concerns for high school and college students is figuring out how to land a successful job. But for many, one great first step is to land an internship! In this panel, we’ll introduce interns who have gone through the application process and found success. You’ll get to hear exclusive stories from interns at Microsoft, NASA, Google, and more!<br><br>Please come with questions! We will have a Q & A time at the end of the panel for you to ask your burning questions to our panelists!" ],
    [ 2, 15, "College Applications Panel", 1, "Hear from experts on how to manage the college application process like a boss." ],
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