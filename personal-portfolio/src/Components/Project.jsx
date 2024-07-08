import React from 'react'
import '../Styles/Project.css'
import image1 from '../Images/text-modifier1.png'
import image2 from '../Images/text-modifier2.png'
import image3 from '../Images/text-modifier3.png'
import patrika1 from '../Images/tech-patrika1.png'
import patrika2 from '../Images/tech-patrika2.png'
import patrika3 from '../Images/tech-patrika3.png'

const Project = () => {
  return (
    <div className="project" id='project'>
      <div className='project-container'>
      <h2>Projects</h2>
        <h3>Text Modifier</h3>
        <section>
        Developed a React-based web application that enhances text manipulation and analysis by allowing users to change text cases (uppercase, lowercase), remove extra spaces, and display word and character counts, along with estimated reading time. The app also includes a dark mode for improved readability. Technologies used include React.js, JavaScript, and Bootstrap.
        </section>
        <div className='image-box' >
          <img src={image1} alt="img" />
          <img src={image2} alt="img" />
          <img src={image3} alt="img" />
        </div>

        <h3>Tech Patrika</h3>
        <section>
        Developed a React-based news aggregator that displays news articles in card format across categories such as technology, business, and health. The app shows author names and publication times for each article. It utilizes React.js packages like react-infinite-scroll-component for seamless scrolling, react-router-dom for efficient navigation, and react-top-loading-bar for enhanced user experience.
        </section>
        <div className='image-box' >
          <img src={patrika1} alt="img" />
          <img src={patrika2} alt="img" />
          <img src={patrika3} alt="img" />
        </div>
      </div>
    </div>
  )
}

export default Project
