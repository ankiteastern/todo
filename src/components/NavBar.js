import React, {useState} from "react";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "./NavBar.css"

function Navbar() {
    const [sidebar] = useState(false)

    return (
        <>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className="nav-menu-items">
                    {
                        SidebarData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.titile}</span>
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
        </>
    )
}

export default Navbar