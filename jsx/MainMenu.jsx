import React from "react";
import NavBar from "./NavBar.jsx"
import Card from "./Card.jsx"
import "../StyleFiles/NavBar.scss"

export default function MainMenu(props) {

    document.getElementById("root").style.cssText = "overflow-y: scroll; height: 100vh; background-color: #032039;";

    const test = "App Store have been taking 27.99 from your account for buying 'Minecraft' PE on Iphone SE"

    const warpStyle = {
        display: "flex", flexWrap: "wrap",
        height: "calc(100vh - 6rem)", overflow: "hidden"
    }

    return (
        <>
            <NavBar userName={props.userName}/>
            <div id="Main-Warp" style={warpStyle}>
                <Card title="App Store" description={test} image="AppStore.svg.png"/>
                <Card title="App Store" description={test} image="AppStore.svg.png"/>
                <Card title="App Store" description={test} image="AppStore.svg.png"/>
                <Card title="App Store" description={test} image="AppStore.svg.png"/>
                <Card title="App Store" description={test} image="AppStore.svg.png"/>
                <Card title="App Store" description={test} image="AppStore.svg.png"/>
                <Card title="App Store" description={test} image="AppStore.svg.png"/>
                <Card title="App Store" description={test} image="AppStore.svg.png"/>
                <Card title="App Store" description={test} image="AppStore.svg.png"/>
            </div>
        </>
    )
}