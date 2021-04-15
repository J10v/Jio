import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa';

function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <div className='navbar'>
            <nav>
                <div className="logo"> JIOVANNI</div>
                <ul className="nav-links" 
                style={{ transform: open ? "translateX(0px)" : "" }}>
                    <li><a>Home</a></li>
                    <li><a>About</a></li>
                    <li><a>Contact</a></li>
                </ul>
                <FaBars className="burger" onClick={() => setOpen(!open)}/>
                <i onClick={() => setOpen(!open)} className="fa fa-bars"></i>
            </nav>
        </div>
    )
}

export default Navbar
