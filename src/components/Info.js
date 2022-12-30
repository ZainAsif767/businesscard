import React from "react"
import mypic from "../images/pic2.jpg"
import logo from "../images/logo192.png"

export default function Info() {
    return (<div className="info">
        <img
            className="DP"
            src={mypic}
            alt="my profile"
        />
        <div className="logo-div">
            <img src={logo}
                className="logo"
                alt="logo" />
            <h2 className="name">Zain Asif</h2>
        </div>


        <p className="dev">Frontend Developer</p>
        <div className="btn">
            <a href="www.google.com"><button className="button1" >Email</button></a>
            <a href="https://www.linkedin.com/in/zainasif767/" ><button className="button2">LinkedIn</button></a>
        </div>
    </div>
    )
}