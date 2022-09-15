import React from 'react';
import {getConstrastYIQ} from "../Helpers"
function Copied({color}) {
    return (
        <div className='copied' style={{'--bgColor':`#${color}`,'--textColor':`${getConstrastYIQ(color)}`}}>
        Copied     #{color} to ClipBoard
        </div>
    );
}

export default Copied;