import React from 'react';
import { useState, useEffect } from 'react';

export default function Timer() {

    const [timer, setTimer] = useState(1);
    const [toggle, setToggle] = useState(true);

    useEffect(() => {

        const intervalID = setInterval(() => {

            setTimer(timer => timer + 1)
        }, 1000)

        return () => {
            alert('COMPOSANT DETRUIT !')
            clearInterval(intervalID);
        }
    }, [])

    return (
        <div>
            <h1>{timer}</h1>
        </div>
    )
}
