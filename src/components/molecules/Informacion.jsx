import React from "react";
import "./Informacion.css"
import {informacionData} from '../../data/informacion'

function Informacion() {
    return(
        <div className="informacion-container">
            <div className="informacion-grid">
                {informacionData.map((item, index) => (
                <div key={index} className="informacion-item">
                    <span>{item.texto}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Informacion;