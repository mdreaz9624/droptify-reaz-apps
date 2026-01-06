import React from "react";


import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import SupRideLogo from "../SupRideLogo/SupRideLogo";

const Navber = () => {
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") || "light"
    );
    const [scrolled, setScrolled] = useState(false);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Apply theme on load and whenever it changes
    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    // Desktop navlink with underline animation
    const getDesktopNavLinkClass = ({ isActive }) =>
        `relative px-4 py-2 font-medium transition-all duration-300
         ${isActive
            ? 'text-primary after:w-full after:opacity-100'
            : 'text-base-content hover:text-primary after:w-0 hover:after:w-full after:opacity-0 hover:after:opacity-100'
        }
         after:absolute after:bottom-0 after:left-1/2 after:h-0.5 after:bg-primary after:transition-all after:duration-300 after:-translate-x-1/2`;

    // Mobile navlink with different hover
    const getMobileNavLinkClass = ({ isActive }) =>
        `block px-4 py-3 rounded-lg font-medium transition-all duration-300
         ${isActive
            ? 'bg-primary text-primary-content shadow-inner'
            : 'bg-white text-gray-700 hover:bg-primary/10 hover:text-primary active:scale-95'
        }`;


    const navLink = <>
        <li className="mb-1">
            <NavLink to="/" className={getMobileNavLinkClass}>
                Home
            </NavLink>
        </li>
        <li className="mb-1">
            <NavLink to="/galary" className={getMobileNavLinkClass}>
                Gallery
            </NavLink>
        </li>
        <li className="mb-1">
            <NavLink to="/service" className={getMobileNavLinkClass}>
                Services
            </NavLink>
        </li>
        <li className="mb-1">
            <NavLink to="/contract" className={getMobileNavLinkClass}>
                Contact
            </NavLink>
        </li>


    </>


    return (
        <div className={`navbar sticky top-0 z-50 transition-all duration-300 ${scrolled
                ? 'bg-base-100/95 backdrop-blur-sm shadow-lg'
                : 'bg-base-100 shadow-sm'
            }`}>
            {/* Navbar Start */}
            <div className="navbar-start">
                {/* Mobile Dropdown */}
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>

                    {/* Mobile Menu */}
                    <ul tabIndex={0} className="dropdown-content menu menu-sm bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow-2xl border">
                        
                        {navLink}
                    </ul>
                </div>

                {/* Logo */}
                <Link to="/" className="btn btn-ghost normal-case text-xl ml-2 lg:ml-0">
                    <SupRideLogo />
                </Link>
            </div>

            {/* Desktop Navigation Center */}
            <div className="navbar-center hidden lg:flex">
                <div className="flex items-center gap-1">
                    <NavLink to="/" className={getDesktopNavLinkClass}>
                        Home
                    </NavLink>
                    <NavLink to="/galary" className={getDesktopNavLinkClass}>
                        Gallery
                    </NavLink>
                    <NavLink to="/service" className={getDesktopNavLinkClass}>
                        Services
                    </NavLink>
                    <NavLink to="/contract" className={getDesktopNavLinkClass}>
                        Contact
                    </NavLink>

                    
                </div>
            </div>

            {/* Navbar End */}
            <div className="navbar-end gap-2">
                {/* Login Button */}
                <Link to="/login" className="btn btn-sm bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white border-none shadow-md hover:shadow-lg transition-all duration-300">
                    Login
                </Link>

                {/* Theme Toggle */}
                <button
                    onClick={toggleTheme}
                    className="btn btn-sm btn-circle btn-ghost hover:bg-base-200 transition-all duration-300"
                    aria-label="Toggle theme"
                >
                    {theme === "light" ? (
                        <span className="text-xl">🌙</span>
                    ) : (
                        <span className="text-xl">☀️</span>
                    )}
                </button>
            </div>
        </div>
    );
};

export default Navber;


