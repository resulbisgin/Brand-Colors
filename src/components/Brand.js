import React, { useContext } from 'react';
import ClipboardButton from 'react-clipboard.js';
import {getConstrastYIQ} from "../Helpers"
import MainContext from '../Maincontext';

function Brand({brand}) {  
        const {setSelectedBrand,selectedBrand,setCopied}=useContext(MainContext)   
    const toggleSelected=()=>{
            if(selectedBrand.includes(brand.slug)){
                setSelectedBrand(selectedBrand.filter(slug  => slug !==brand.slug))
            }else{
                setSelectedBrand([...selectedBrand,brand.slug])
            }
        }
        const setColor=(color)=>{
            setCopied(color)
        }
    return (
        <div className= {`brand ${selectedBrand.includes(brand.slug)?'selected':''}`}>
            <h5 onClick={toggleSelected}>{brand.title}</h5>
            <div className='brand-colors'>
                {brand.colors.map(color=>(
                    <ClipboardButton data-clipboard-text={color} key={color} onSuccess={()=>setColor(color)} component="span" style={{'--bgColor':`#${color}`,'--textColor':`${getConstrastYIQ(color)}`}}>
                        {color}
                    </ClipboardButton>
                    
                ))}
            </div>
            
        </div>
    );
}

export default Brand;