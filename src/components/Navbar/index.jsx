import React, { useState, useEffect } from 'react';
import { MdOutlineTravelExplore, MdDarkMode, MdOutlineLightMode } from "react-icons/md";
import { IoIosCloseCircle } from "react-icons/io";
import { TbGridDots } from "react-icons/tb";
import { Link, NavLink } from 'react-router-dom';
import { FiGlobe } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import './Navbar.css';

const Navbar = ({ scrollToTop }) => {
    const [active, setActive] = useState('navBar');
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
    const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);
    const { i18n } = useTranslation(); 

    useEffect(() => {
        document.body.className = theme;
        const navbar = document.querySelector('.navBarSection');
        if (navbar) {
            navbar.className = `navBarSection ${theme}`;
        }
    }, [theme]);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    };

    const toggleLanguageDropdown = () => {
        setLanguageDropdownOpen(!languageDropdownOpen);
    };

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
        localStorage.setItem('language', lang);
        setLanguageDropdownOpen(false);
    };

    const removeNavbar = () => {
        setActive('navBar');
    };

    return (
        <section className={`navBarSection ${theme}`}>

            <header className={`header flex ${theme}`}>
                <div className='logoDiv'>
                    <Link to="/" onClick={() => { scrollToTop(); removeNavbar(); }} className='logo flex'>
                        <h1> <MdOutlineTravelExplore className="icon" /> TravelAZE </h1>
                    </Link>
                </div>

                <div className={active}>
                    <ul className='navLists flex'>
                        <li className='navItem'>
                            <NavLink className='navLink' to="/" onClick={() => { scrollToTop(); removeNavbar(); }}>
                                {i18n.t('home')}
                            </NavLink>
                        </li>
                        <li className='navItem'>
                            <NavLink className='navLink' to="/about" onClick={removeNavbar}>
                                {i18n.t('about')}
                            </NavLink>
                        </li>
                        <li className='navItem'>
                            <NavLink className='navLink' to="/contact" onClick={removeNavbar}>
                                {i18n.t('contact')}
                            </NavLink>
                        </li>
                        <li className='navItem'>
                            <button onClick={() => { toggleTheme(); removeNavbar(); }} className="theme-toggle-btn">
                                {theme === 'light' ? <MdDarkMode /> : <MdOutlineLightMode />}
                            </button>
                        </li>

                        <li className='navItem language-dropdown'>
                            <button className='language-btn' onClick={toggleLanguageDropdown}>
                                <FiGlobe />
                            </button>

                            {languageDropdownOpen && (
                                <ul className='language-options'>
                                    <li onClick={() => changeLanguage('az')}>AZ</li>
                                    <li onClick={() => changeLanguage('ru')}>RU</li>
                                    <li onClick={() => changeLanguage('en')}>EN</li>
                                </ul>
                            )}
                        </li>
                    </ul>

                    <div onClick={removeNavbar} className='closeNavbar'>
                        <IoIosCloseCircle className='icon' />
                    </div>
                </div>

                <div onClick={() => setActive('navBar activeNavbar')} className="toggleNavbar">
                    <TbGridDots className='icon' />
                </div>
            </header>

        </section>
    );
}

export default Navbar;
