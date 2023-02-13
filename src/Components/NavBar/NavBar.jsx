import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'
import {FaBars, FaTimes} from "react-icons/fa";

export function NavBar () {
	const [ color, setColor] = useState(false)
	const changeColor = () => {
		if (window.scrollY >= 180){
			setColor(true)
		}
		else {
			setColor(false)
		}
	} 

	window.addEventListener('scroll', changeColor)
  return (
	
    <header>
		<div   className= {color ? "NavBar NavBar-Bg" : "NavBar" } >
			<Link className="Logo font" style={{ textDecoration: 'none' }}>
				<span>Landr</span> 
			</Link>

			<nav >
				<Link to='home' className="NavBar-Menu font" style={{ textDecoration: 'none' }}>
					<span>Home</span> 
				</Link>
				
				<Link to='/' className="NavBar-Menu font" style={{ textDecoration: 'none' }}>
					<span>Why Blockchain?</span>
				</Link>
						
				<Link className="NavBar-Menu font" style={{ textDecoration: 'none' }}>
					<span>About Us</span>
				</Link>
			</nav>
				<Link className="Login-Btn font" style={{ textDecoration: 'none' }}>
					<span>Login</span>
				</Link>
		</div>
    </header>
  )
}
