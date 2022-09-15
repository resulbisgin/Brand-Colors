import React, { useContext, useEffect, useState } from 'react';
import MainContext from '../Maincontext';
import {GrLink,GrDownload,GrClose} from "react-icons/gr"
function Download() {
const {selectedBrand,brands,setSelectedBrand}=useContext(MainContext)
const [downloadUrl,setDownloadUrl]=useState()
const [cssMethod,setcssMethod]=useState('css')
const getLink =()=>{
     prompt('Here s the URL to share',`http://localhost:3000/${selectedBrand.join(',')}`)
}
useEffect(()=>{
    if(selectedBrand.length>0){
        let output='';
        switch(cssMethod){
            case 'css':
                output +=':root{\n'
                selectedBrand.map(slug=>{
                    let brand =brands.find(brand=>brand.slug===slug)
                    brand.colors.map((color,key)=>{
                        output += `--${slug}-${key}:#${color};\n`
                    })
                    output +='}'
                })
                break;
                case 'scss':
                    selectedBrand.map(slug=>{
                        let brand =brands.find(brand=>brand.slug===slug)
                        brand.colors.map((color,key)=>{
                            output += `\$${slug}-${key}:#${color};\n`
                        })
                    })
                    break;
                    case 'less':
                        selectedBrand.map(slug=>{
                            let brand =brands.find(brand=>brand.slug===slug)
                            brand.colors.map((color,key)=>{
                                output += `@${slug}-${key}:#${color};\n`
                            })
                        })
                        break;
        }
      
 
        const blob=new Blob([output])
        const url=URL.createObjectURL(blob)
        setDownloadUrl(url)
        return ()=>{
            URL.revokeObjectURL(url)
            setDownloadUrl('')
        }
    }
},[selectedBrand,cssMethod])
    return (
        <div className='download'>
            <div className='actions'>
            <select onChange={(e)=>{
                    setcssMethod(e.target.value)
                }}>
                    <option value="css">CSS</option>
                    <option value="scss">SCSS</option>
                    <option value="less">LESS</option>
                </select>

                <a download={`brand.${cssMethod}`} href={downloadUrl}>
                    <GrDownload/>
                </a>
            
                <button onClick={getLink}>
                    <GrLink/>
                </button>
            </div>
             <div className='selected' onClick={()=>setSelectedBrand([])}>
               <GrClose/>
                {selectedBrand.length} brand collected
             </div>
        </div>
    );
}

export default Download;