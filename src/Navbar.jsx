import React, { useState, useEffect } from 'react';
import './style/Navbar.css';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
    const [hamburger, setHamburger] = useState(false);

    const updateham = () => {
        setHamburger(!hamburger);
    };

    useEffect(() => {
        if (hamburger) {
            document.body.style.overflow = 'hidden'; 
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [hamburger]);

    return (
        <div className='update'>
            <div className="navbar-container">
                <div className='dropdown'>
                    <div className='logo'>Mealmaster</div>
                    <div>
                        <button aria-label="Toggle menu" onClick={updateham}>
                            <div className='hamburger'>
                                {hamburger ? <FaTimes /> : <FaBars />}
                            </div>
                        </button>
                    </div>
                    {hamburger && (
                        <ul className='ham1'>
                            <Link to='/'>
                                <li><a>Home</a></li>
                            </Link>
                            <Link to='/About'>
                                <li><a>About</a></li>
                            </Link>
                            <Link to='/Contact'>
                                <li><a>Contact</a></li>
                            </Link>
                            <Link to='/mealplanner'>
                                <li><a>Meal-Planner</a></li>
                            </Link>
                            <Link to='/Recipe-Library'>
                                <li><a>Recipe-Library</a></li>
                            </Link>
                            <Link to='Grocery'>
                                <li><a>Grocery List</a></li>
                            </Link>
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Navbar;