import React from 'react'
import './about.css'
import { SocialIcon } from 'react-social-icons';

const About = () => {

    return (
        <div className="about-container">
            <div className="text-box">
                <h1>Hello My Name is Niklas</h1>
                <p>Programming started as a hobby but quickly grew to something I want
                to pursue full time and something I feel very passionate about.
                I feel like in order to be a great programmer you must have an
                unquenchable need to solve problems. Encountering roadblocks on the
                road to the solution is part of the process and ultimately that is
                what makes it so gratifying when you finally see the pieces of the
                puzzle lock into place.</p>

                <p>What I love about programming is that I never
                feel that the information that I learn is not useful, even if it is
                not directly related to the project I am currently working on.
                I always know that the programming related information I learn
                or the thought pattern behind it will be useful for me now or
                somewhere down the road. Starting to program was one of the best
                decisions of my life.</p>
                <div className="social-media-icons">
                    <ul>
                        <li><SocialIcon url="https://github.com/NiklasMenard"
                            network="github" bgColor="#black" fgColor="white" /></li>
                        <li><SocialIcon url="https://linkedin.com/in/niklas-menard"
                            network="linkedin" bgColor="#0e76a8" fgColor="#fafafa" /></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About