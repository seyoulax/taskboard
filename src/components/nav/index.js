import { Link } from "react-router-dom";
import React, {useState} from 'react'


import "./index.css"

export function Nav() {
    const [navLinks, setNavLinks] = useState([{ title: "main", link: "/" }, { title: "board", link: "/board"}])
    return (
        <nav className="header-nav">
            <div className="nav-links">
                <ul>
                    {
                        navLinks.map((item, i) =>
                            (
                                <li key={i}><Link to={item.link}>{item.title}</Link></li> 
                            )
                        )
                    }
                </ul>
            </div>
            <div className="nav-signin">
                <span><div className="user-icon"></div><Link to="/signin">Войти</Link></span>
            </div>
        </nav>
    )
}