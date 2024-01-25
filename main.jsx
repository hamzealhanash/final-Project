import React from "react";
import ReactDOM from "react-dom/client";
import {Login} from "./jsx/Login.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));

const Page = () => {
    return (<Login/>)
}
root.render(<Page/>)
