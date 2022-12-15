import React from "react";
import "../style.css"

export default function Header(){

    return(
        <>
        <div className="header">
        <img className="headerbg" src="https://assets.nflxext.com/ffe/siteui/vlv3/a1543997-c1fd-4946-92d3-b0a3648b92c7/c98b1813-f5bd-4125-8128-840a98f795f2/PK-en-20220808-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="" />
        <img className="headerlogo" src="https://download.logo.wine/logo/Netflix/Netflix-Logo.wine.png" alt="" />
        <button className="headerbtn">Sign In</button>
        <div className="headertext">
        <h1 className="headerh1">Unlimited movies, TV shows, and more.</h1>
        <h4 className="headerh4">Watch anywhere. Cancel anytime.</h4>
        <h6 className="headerh6">Ready to watch? Enter your email to create or restart your membership.</h6>
        <div className="searchdiv">
        <input className="headerinput" type="text" placeholder="Email Adress" />
        <button className="headerbtn2">Get Started</button>
        </div>
        </div>
        </div>
        </>
    )
}