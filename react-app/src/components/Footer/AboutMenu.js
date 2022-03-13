import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import { useSelector } from "react-redux";
import './Footer.css'

function AboutMenu({ user }) {
    const [showMenu, setShowMenu] = useState(false);
    const users = useSelector((state) => Object.values(state.users).slice(3, 7))


    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true);
    };

    useEffect(() => {
        if (!showMenu) return;

        const closeMenu = () => {
            setShowMenu(false);
        };

        document.addEventListener('click', closeMenu);

        return () => document.removeEventListener("click", closeMenu);
    }, [showMenu]);



    return (
        <>
            <div className="about-menu-modal">
                {showMenu && (
                    <ul className="about-menu-container">
                        <li className="team-member-li">
                            <div className="team-member">
                                <div className="team-member-name">
                                    <Link to={`/profiles/${users[2].id}`}>
                                        Brandon Copeland
                                    </Link>
                                </div>
                                <div className="team-member-icons">
                                    <a href="https://github.com/BrandonCope" target="_blank" rel="noopener noreferrer">
                                        <div className="team-member-github">
                                            <i className="fa-brands fa-github"></i>
                                        </div>
                                    </a>
                                    <a href="https://www.linkedin.com/in/brandoncopeland97/" target="_blank" rel="noopener noreferrer">
                                        <div className="team-member-linkedin">
                                            <i className="fa-brands fa-linkedin"></i>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </li>
                        <li className="team-member-li">
                            <div className="team-member">
                                <div className="team-member-name">
                                    <Link to={`/profiles/${users[3].id}`}>
                                        Vu Co
                                    </Link>
                                </div>
                                <div className="team-member-icons">
                                    <a href="https://github.com/vth-co" target="_blank" rel="noopener noreferrer">
                                        <div className="team-member-github">
                                            <i className="fa-brands fa-github"></i>
                                        </div>
                                    </a>
                                    <a href="https://www.linkedin.com/in/vu-co/" target="_blank" rel="noopener noreferrer">
                                        <div className="team-member-linkedin">
                                            <i className="fa-brands fa-linkedin"></i>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </li>
                        <li className="team-member-li">
                            <div className="team-member">
                                <div className="team-member-name">
                                    <Link to={`/profiles/${users[0].id}`}>
                                        Vern Chao
                                    </Link>
                                </div>
                                <div className="team-member-icons">
                                    <a href="https://github.com/vernfongchao" target="_blank" rel="noopener noreferrer">
                                        <div className="team-member-github">
                                            <i className="fa-brands fa-github"></i>
                                        </div>
                                    </a>
                                    <a href="https://www.linkedin.com/in/vern-chao-a2960a123/" target="_blank" rel="noopener noreferrer">
                                        <div className="team-member-linkedin">
                                            <i className="fa-brands fa-linkedin"></i>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </li>
                        <li className="team-member-li">
                            <div className="team-member">
                                <div className="team-member-name">
                                    <Link to={`/profiles/${users[1].id}`}>
                                        David Alliger
                                    </Link>
                                </div>
                                <div className="team-member-icons">
                                    <a href="https://github.com/davidalliger" target="_blank" rel="noopener noreferrer">
                                        <div className="team-member-github">
                                            <i className="fa-brands fa-github"></i>
                                        </div>
                                    </a>
                                    <a href="https://www.linkedin.com/in/david-alliger-a73351208/" target="_blank" rel="noopener noreferrer">
                                        <div className="team-member-linkedin">
                                            <i className="fa-brands fa-linkedin"></i>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </li>
                    </ul>
                )}
            </div>
            <button className="about-menu-open" onClick={openMenu}>
                About
            </button>
        </>
    );
}

export default AboutMenu;
