import React, {useRef, useState} from "react";
import 'animate.css';
import "../StyleFiles/LoginStyle.scss"
import Logo from "../Photo/Logo.png"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEye, faEyeSlash} from '@fortawesome/free-solid-svg-icons';

export default function Login(props) {

    // Use Reference Hooks

    const EmailRef = useRef(null);

    const PasswordRef = useRef(null);

    // Use State Hooks

    const [icon, setIcon] = useState(false)

    const [inputCheck, setInputCheck] = useState(true);

    const [passwordLength, setPasswordLength] = useState(false)

    const [empty, setEmpty] = useState({Email: true, Password: true})

    const [isFocused, setISFocused] = useState({Email: false, Password: false})


    // function passer(Email, Password) {
    //     props.Password = Password;
    //     props.username = Email;
    //     if (Password !== '' && Email !== '') {
    //         return props.isLoggedIn(true)
    //     } else return props.isLoggedIn(false)
    // }

    /*
    * This Function Use to make the Logic for the Input Field after Clicking(Focusing) on calling it like:
    * - where ever someone click in the Container of the input field he'll get focused into the input field
    * - turning the label to focus mode ( making it small and in the top right corner )
    * - setting focus mode on for the input field
    * */
    const handleInputFocus = (type) => {
        if (type === "Email") {
            EmailRef.current.focus()
            setISFocused(prevState => {
                return {...prevState, Email: true}
            })
            document.getElementById("Label-Email").classList.add("Label-Focus")
        } else {
            PasswordRef.current.focus()
            setISFocused(prevState => {
                return {...prevState, Password: true}
            })
            document.getElementById("Label-Password").classList.add("Label-Focus")
        }
    }

    /*
    *  - This Function have the same Effect of the focus one but in the Reverse way ( on Blur )
    *  - the only different is:
    *  - this setup the logic for the isEmpty State
    *    (have multiple effect on the page itself like preventing user from proceeding to the next page )
    *  - after setting the logic for the isEmpty it start taking effect immediately like removing the focus mode from the label if the input field empty
    *  - turning the focus mode off
    * */
    const handleInputBlur = (type) => {
        if (type === "Email") {
            const isEmpty = EmailRef.current.value === "";
            setEmpty(prevState => {
                return {...prevState, Email: isEmpty}
            });
            if (isEmpty) {
                document.getElementById("Label-Email").classList.remove("Label-Focus")
            }
            setISFocused(prevState => {
                return {...prevState, Email: false}
            })
        } else {
            const isEmpty = PasswordRef.current.value === "";
            setEmpty(prevState => {
                return {...prevState, Password: isEmpty}
            });
            setISFocused(prevState => {
                return {...prevState, Password: false}
            })
            if (isEmpty) {
                document.getElementById("Label-Password").classList.remove("Label-Focus")
            }
        }
    }

    /*
    * - This Function used for Email input checking if it contains none English Characters or (symbols - other languages - smileys - ..... )
    * - and changing the Empty logic to(false) making some changes in the checking system
    * */
    const handleEmail = (event) => {
        props.username
        const checker = /^[a-zA-Z0-9\s]*$/.test(event.target.value)
        setInputCheck(checker)
    }

    // setting the logic for the PasswordLength (length <8 and > 0 give an error else normal)
    const handlePassword = (event) => {
        const isValidLength = event.target.value.length < 8
        setPasswordLength(isValidLength)
    }

    // changing the (show / hide) icon on calling
    const changeIcon = () => {
        setIcon(prevState => !prevState)
    }

    // Root style for this page only
    document.getElementById("root").style.cssText = "display: flex; height:100vh; background-image:url('Photo/Login-background.png')"


    //this class for making the JSX more Readable by using variables
    const classNames = {
        EmailContainer: `Login-Container ${isFocused.Email && "Login-Container-Focus "} ${!inputCheck && 'Login-Container-Error'} `,
        PasswordContainer: `Login-Container ${isFocused.Password && "Login-Container-Focus"} ${passwordLength && 'Login-Container-Error'}`
    }

    const event = {
        ClickedEmail: () => handleInputFocus("Email"),
        BLuredEmail: () => handleInputBlur("Email"),
        ClickedPassword: () => handleInputFocus("Password"),
        BLuredPassword: () => handleInputBlur("Password"),
        passLogInInfo: () => passer(EmailRef.current.value, PasswordRef.current.value)
    }

    const iconStyle = (isFocused.Password || !empty.Password) ? {display: "block"} : {display: "none"}

    // JSX
    return (
        <form className="Container animate__animated animate__fadeInDown">

            <img src={Logo} alt="logo" className="Logo"/>
            <div className={classNames.EmailContainer} onClick={event.ClickedEmail} onBlur={event.BLuredEmail}>
                <input type="text" id="Login-Email" required={true} autoComplete="off" ref={EmailRef}
                       onChange={handleEmail} maxLength={24} name="Email"/>

                <label className="Label" id="Label-Email" style={inputCheck ? {color: ""} : {color: "red"}}
                       htmlFor="Login-Email">{inputCheck ? 'Enter User Name' : 'Please enter only English characters'}</label>

                <label className="Domain-Name">@EREB.com</label>
            </div>

            <div className={classNames.PasswordContainer} onClick={event.ClickedPassword} onBlur={event.BLuredPassword}>
                <input type={icon ? "text" : "password"} id="Login-Password" maxLength={24} required={true}
                       autoComplete="off" ref={PasswordRef} onChange={handlePassword} onClick="Password"/>


                <label className="Label" id="Label-Password" htmlFor="Login-Password">Password</label>

                <FontAwesomeIcon icon={icon ? faEye : faEyeSlash} id="Show-Icon" onClick={changeIcon}
                                 style={iconStyle}/>
            </div>

            <span> <a target="_blank" className="Forget-Password">Forget Email?</a></span>

            <button className="Next-Button" type="button" onClick={event.passLogInInfo}>Next</button>


            <div className="Separator-Container">

                <div className="Login-Signup-Separator"></div>
                <p className="Mid-Separator">or</p>
                <div className="Login-Signup-Separator"></div>

            </div>
            <button className="Signup-Button">Sign Up</button>
            {/*sill not connected*/}
        </form>)
}
