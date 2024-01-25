import React, {useRef, useState} from "react";
import 'animate.css';

export function Login() {
    const [isFocused, setIsFocused] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const inputRef = useRef(null);

    const handleInputFocus = () => {
        setIsFocused(true)
        inputRef.current.focus()
        document.getElementById("Label").classList.add("Label-Email-Focus")
    };

    const handleInputBlur = () => {
        setIsFocused(false)
        if (document.getElementById("Login-Email").value === "") {
            document.getElementById("Label").classList.remove("Label-Email-Focus")
        }
    }

    const handleContainerHover = () => {
        setIsHovered(true);
    }

    const handleContainerUnHover = () => {
        setIsHovered(false);
    }

    return (
        <div className={"Login-Container animate__animated animate__fadeInDown"}>
            <div className="Container">
                <img src="../Photo/logo.png" alt="logo" className="Logo"/>

                <div
                    className=
                        {`Login-Email-Container 
                ${isFocused ? "Login-Email-Container-Focus" : ""}
                 ${isHovered ? "Login-Email-Container-Hover" : ""}`}
                    onClick={handleInputFocus} onBlur={handleInputBlur}
                    onMouseOver={handleContainerHover} onMouseOut={handleContainerUnHover}
                >
                    <input type="text" name="Login-Email" className="Login-Email"
                           id="Login-Email" required={true} autoComplete="username" ref={inputRef}/>

                    <label className="Label" id="Label" htmlFor="Login-Email">Enter Email</label>
                </div>

                <span> <a href="" className="Forget-Password">Forget Email?</a></span>

                <button className="Next-Button">Next</button>
                <div className={"Separator-Container"}>
                    <div className="Login-Signup-Separator"></div>
                    <p className="Mid-Separator">or</p>
                    <div className="Login-Signup-Separator"></div>
                </div>
                <button className="Signup-Button">Sign Up</button>
            </div>
        </div>
    );
}

//how to import font awesome lib into react/js porject
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';
//
// function MyComponent() {
//     return (
//         <div>
//             <FontAwesomeIcon icon={faCoffee} />
//         </div>
//     );
// }