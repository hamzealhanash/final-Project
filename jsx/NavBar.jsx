import React from "react";
import "../StyleFiles/NavBar.scss"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCaretDown} from "@fortawesome/free-solid-svg-icons";

export default function NavBar(props) {

    return (
        <nav className="NavBar">
            <div className="Sections">
                <img src="../Photo/Logo.png" alt="Logo"/>

                <ul className="DropDown">
                    <li>Transaction <FontAwesomeIcon icon={faCaretDown} className="icon"/></li>

                    <li> start a Business<FontAwesomeIcon icon={faCaretDown} className="icon"/></li>

                    <li>Help<FontAwesomeIcon icon={faCaretDown} className="icon"/></li>
                </ul>
            </div>

            <div className="Profile">
                <h3>{props.userName}</h3>

                <img src="../Photo/profile.svg" alt="" className="Profile-Pic"/>
            </div>
        </nav>
    )
}
