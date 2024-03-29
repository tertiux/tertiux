import React from "react";

export default function AboutBig(props){
    const [copied, setCopied] = React.useState(false)

    function copyText(){
        if(!navigator.clipboard){
            alert("failed to copy text")
            return
        }

        if(copied === true){
            return
        }

        navigator.clipboard.writeText(`I am a creative solutions provider in front-end development. My user-centric approach combines technical skills with a deep understanding of what makes a website both aesthetically pleasing and easy to use.

        With an experience of about 2 years in the tech industry, I deliver exceptional results through diverse perspectives and approaches. My goal is to help clients create a web presence that provides a seamless user experience.
        
        Tertiux 创解 - Solving your web development needs through creativity.`)
        console.log("copied")
        setCopied(true)

        setTimeout(
            function(){
                setCopied(false)
            }, 5000
        )
    }


    return(
        <div className={props.className}>
            <div className="return" onClick={props.onPrev}>
                <i className="fa fa-arrow-left"/>
            </div>
            <h1>my Bio <i className="fa-solid fa-address-card"></i></h1>
            <div className="content">
                <p>
                    I am a creative solutions provider in front-end development. My user-centric approach combines technical skills with a deep understanding of what makes a website both aesthetically pleasing and easy to use.
                </p>
                <p>
                    With an experience of about 2 years in the tech industry, I deliver exceptional results through diverse perspectives and approaches. My goal is to help brands and companies create a unique web presence that provides a seamless user experience.
                </p>
                <p>
                    Tertiux 创解 - Solving your web development needs through creativity.
                </p>
            </div>
            <button className={copied ? "copy ing" : "copy"} onClick={copyText}>{copied ? "copied" : "copy"}</button>
        </div>
    )
}