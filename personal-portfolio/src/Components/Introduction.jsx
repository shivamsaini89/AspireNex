import React from 'react'
import image from '../Images/shivam-saini-profile.png'
import '../Styles/Introduction.css'
import { useTypewriter, Cursor } from 'react-simple-typewriter'

const Introduction = () => {
    const [Text] = useTypewriter({
        words: ['React Developer.', 'Frontend Developer.', 'MERN Stack Developer.'],
        loop: true,
        typeSpeed: 20,
        deleteSpeed: 10,
        delaySpeed:2000,
      });
    return (
        <>
            <div className="intro" id='home'>
                <div className="introBox">
                    <div className=" imageBox"  >
                        <img src={image} alt="Shivam Saini" className="profilePhoto"  />
                    </div>
                    <div className="introContent">
                        <h3>Hii! My name is </h3>
                        <h2>Shivam Saini</h2>
                        <h3>I am a <span>{Text}</span><Cursor cursorColor='red' cursorBlinking='true' /></h3>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Introduction
