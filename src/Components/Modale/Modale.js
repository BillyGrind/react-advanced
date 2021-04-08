import React, { useState } from 'react'
import './Modale.css'

export default function Modale() {

    const [modale, setModale] = useState(false);

    const toggleModale = () => {
        setModale(!modale);

    }


    return (
        <>
            <button onClick={toggleModale} className="btn-modal">Open</button>
            {modale &&
                <div className="overlay">
                    <div className="modal">
                        <div className="modal-content">
                            <h2>Hello Modale</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate, adipisci explicabo voluptate maiores mollitia deserunt dignissimos eaque reprehenderit non nisi doloribus dolorum quasi repellendus quisquam officia assumenda iusto odio ea ducimus beatae nobis amet. Quod, facilis eaque. Assumenda fuga, eligendi illum iure mollitia maxime dolore repudiandae, odio a voluptate voluptates!
                       </p>
                            <button className="close-modal" onClick={toggleModale}>Close</button>
                        </div>
                    </div>

                </div>
            }
        </>
    )
}
