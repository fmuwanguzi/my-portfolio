import React from 'react'
import { Image } from 'react-bootstrap'

const About = () => {
    return(
        <div>
            <h1> About Me </h1>
            <Image width={171} height={180} src="/images/pot.jpeg" roundedCircle fluid/>
            <div>
            <p>
                I am a software engineer currently based in the Greater Boston area in Massechusetts. After completeing my associates degree in computer and electrical engineering, my interest in learning new languages was peaked which led me to pursue a career in software and web development through the software engineering immersive course at General Assembly. 
                I appreaciate an industry where you can become an expert yet learn something new everyday.
            </p>
            <p>
                When I'm not developing my skills I'm watching a celtics game, working out or enjoying a cheat day.
            </p>
             </div>
        </div>
    )
}

export default About;