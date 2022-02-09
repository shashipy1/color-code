import React, { useState, useEffect } from "react";
import rgbToHex from "./utils";


const SingleColor = ({ rgb, weight, index, hexColor }) => {
    const [alert, setAlert] = useState(false);
    const bcg = rgb.join(',');
    const hex = rgbToHex(...rgb)
    const hexValue = `#${hexColor}`    // copy # with color name


    // time interval on clipboard
    useEffect(() => {
        const timeout = setTimeout(() => {
            setAlert(false)
        }, 2000)
        return () => {
            clearTimeout(timeout);
        }
    }, [alert])


    return (
        <article className={`color ${index > 10 && 'color-light'}`}
            style={{ backgroundColor: `rgb(${bcg})` }}
            onClick={() => {                  // if on click on clipboard than show        
                setAlert(true)            

                // for copy color on clipboard
                navigator.clipboard.writeText(hexValue);
            }}
        >
            <p className="percent-value">{weight}%</p>
            <p className="'color-value">{hexValue}</p>

            {/* show on clip board */}

            {alert && <p className="alert">copied to clipboard</p>}
        </article>
    )
}

export default SingleColor;     