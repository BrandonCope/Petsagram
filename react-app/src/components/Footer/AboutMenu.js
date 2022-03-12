import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom'
import LogoutButton from '../auth/LogoutButton';
import './Footer.css'

function AboutMenu({ user }) {
    const [showMenu, setShowMenu] = useState(false);


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
                                    Brandon Copeland
                                </div>
                                <div className="team-member-icons">
                                    <a href="https://github.com/BrandonCope" target="_blank">
                                        <div className="team-member-github">
                                            <i class="fa-brands fa-github"></i>
                                        </div>
                                    </a>
                                    <a href="https://www.linkedin.com/in/brandoncopeland97/" target="_blank">
                                        <div className="team-member-linkedin">
                                            <i class="fa-brands fa-linkedin"></i>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </li>
                        <li className="team-member-li">
                            <div className="team-member">
                                <div className="team-member-name">
                                    Vu Co
                                </div>
                                <div className="team-member-icons">
                                    <a href="https://github.com/vth-co" target="_blank">
                                        <div className="team-member-github">
                                            <i class="fa-brands fa-github"></i>
                                        </div>
                                    </a>
                                    <a href="https://www.linkedin.com/in/vu-co/" target="_blank">
                                        <div className="team-member-linkedin">
                                            <i class="fa-brands fa-linkedin"></i>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </li>
                        <li className="team-member-li">
                            <div className="team-member">
                                <div className="team-member-name">
                                    Vern Chao
                                </div>
                                <div className="team-member-icons">
                                    <a href="https://github.com/vernfongchao" target="_blank">
                                        <div className="team-member-github">
                                            <i class="fa-brands fa-github"></i>
                                        </div>
                                    </a>
                                    <a href="https://www.linkedin.com/in/vern-chao-a2960a123/" target="_blank">
                                        <div className="team-member-linkedin">
                                            <i class="fa-brands fa-linkedin"></i>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </li>
                        <li className="team-member-li">
                            <div className="team-member">
                                <div className="team-member-name">
                                    David Alliger
                                </div>
                                <div className="team-member-icons">
                                    <a href="https://github.com/davidalliger" target="_blank">
                                        <div className="team-member-github">
                                            <i class="fa-brands fa-github"></i>
                                        </div>
                                    </a>
                                    <a href="https://www.linkedin.com/in/david-alliger-a73351208/" target="_blank">
                                        <div className="team-member-linkedin">
                                            <i class="fa-brands fa-linkedin"></i>
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
