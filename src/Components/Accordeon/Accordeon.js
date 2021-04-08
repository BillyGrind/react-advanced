import React, { useState, useEffect, useRef } from 'react'
import './Accordeon.css'
import Chevron from './Chevron.png'

export default function Accordeon() {

    const [toggle, setToggle] = useState(true);
    const [heightEl, setHeightEl] = useState();

    const toggleState = () => {
        setToggle(!toggle)
    }
    const refHeight = useRef();

    useEffect(() => {
        setHeightEl(`${refHeight.current.scrollHeight}px`)
    }, [])


    return (
        <div className="accord">
            <div onClick={toggleState} className="accord-visible">
                <h2>Lorem ipsum dolor sit amet.</h2>
                <img src={Chevron} alt="chevron down" className="Chevron" />
            </div>
            <div ref={refHeight} className={toggle? 'accord-toggle animated':"accord-toggle"} style={{height : toggle? `${heightEl}` : "0px"}}>
                <p
                aria-hidden={toggle? "true" : "false"}
                //pour ne pas faire apparaitre le texte dans le dom , pour les ecrans des mal voyants 
                >Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci recusandae officiis perferendis blanditiis officia voluptates, ipsa vero possimus et nam, nisi consequatur amet sint pariatur corrupti quae. Rerum, eveniet deserunt!</p>
            </div>
        </div>
    )
}
