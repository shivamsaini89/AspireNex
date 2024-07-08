import Navbar from './Components/Navbar'
import About from './Components/About'
import Project from './Components/Project'
import Skill from './Components/Skill'
import Contact from './Components/Contact'
import Introduction from './Components/Introduction'
import ScrollToTop from './Components/ScrollToTop'
import {BrowserRouter as Router} from "react-router-dom"

const App = () => {
  return (
    <>
    <Router>
      <Navbar />
      <Introduction />
      <About />
      <Project />
      <Skill />
      <Contact />
      <ScrollToTop />
      <footer>
        <div>
          <p style={{ 'color': 'white' }}>Copyright &copy; 2024 by Shivam Saini | All Rights Reserved</p>
        </div>
      </footer>
      </Router>
    </>
  )
}

export default App
