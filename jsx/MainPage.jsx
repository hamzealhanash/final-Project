import React from "react";
import Login from "./Login.jsx";
import MainMenu from "./MainMenu.jsx";

export default function MainPage() {


    const [isLoggedIn, setISLoggedIn] = React.useState(false);
    const [password, setPassword] = React.useState("defaultPass")
    const [email, setEmail] = React.useState('default');

    return (
        <>
            <Login username={setEmail()} password={setPassword()} isLoggedIn={setISLoggedIn()}/>
            {isLoggedIn && <MainMenu userName={info.userName}/>}
        </>
    )

}

