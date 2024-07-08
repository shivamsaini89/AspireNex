import React, { useState } from 'react'
import '../Styles/Navbar.css'
import { HashLink as Link } from 'react-router-hash-link';

const Navbar = () => {
  const [mode, setMode] = useState('none');
  const handleModeChange = ()=>{
    mode?setMode('flex'):setMode('none')
  }
  return (
    <>
    <nav className="navbar" >
      <ul className="nav-menu"  >
        <li className="nav-item">
          <Link to="#" className="nav-links">PORTFOLIO</Link>
        </li>
        <li className="nav-item main-menu-item" >
          <Link to="#home" className="nav-links" >Home</Link>
        </li>
        <li className="nav-item main-menu-item" >
          <Link to="#about" className="nav-links" >About Me</Link>
        </li>
        <li className="nav-item main-menu-item">
          <Link to="#project" className="nav-links" >Projects</Link>
        </li>
        <li className="nav-item main-menu-item" >
          <Link to="#skill" className="nav-links" >Skills</Link>
        </li>
        <li className="nav-item main-menu-item" >
          <Link to="#contact" className="nav-links" >Contact Me</Link>
        </li>
        <li className="nav-item menu-button" onClick={handleModeChange} >
          <a href="/" className="nav-links" style={{'pointerEvents':'none'}}  ><svg xmlns="http://www.w3.org/2000/svg" height="26px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M480-400 40-640l440-240 440 240-440 240Zm0 160L63-467l84-46 333 182 333-182 84 46-417 227Zm0 160L63-307l84-46 333 182 333-182 84 46L480-80Zm0-411 273-149-273-149-273 149 273 149Zm0-149Z"/></svg></a>
        </li>
      </ul>
      <ul className="nav-sidemenu" style={{'display':`${mode}`}} >
        <li className="nav-item" onClick={handleModeChange}>
          <a href="/" className="nav-links"><svg xmlns="http://www.w3.org/2000/svg" height="26px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M120-280v-80h560v80H120Zm80-160v-80h560v80H200Zm80-160v-80h560v80H280Z"/></svg></a>
        </li>
        <li className="nav-items" >
          <Link to="#home" className="nav-links" >Home</Link>
        </li>
        <li className="nav-item" >
          <Link to="#about" className="nav-links" >About Me</Link>
        </li>
        <li className="nav-item">
          <Link to="#project" className="nav-links" >Projects</Link>
        </li>
        <li className="nav-item" >
          <Link to="#skill" className="nav-links" >Skills</Link>
        </li>
        <li className="nav-item" >
          <Link to="#contact" className="nav-links" >Contact Me</Link>
        </li>
      </ul>
    </nav>
</>
  )
}

export default Navbar
