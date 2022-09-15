import MainContext from './Maincontext';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import BrandData from "./brand.json"
import React ,{useEffect, useState} from "react"
import './App.css';
import Copied from './components/Copied';

function App() {
  const brandsArray=[]
  Object.keys(BrandData).map(key=>{
      brandsArray.push(BrandData[key])
  })
  const [brands,setBrands]=useState(brandsArray)
  const [selectedBrand,setSelectedBrand]=useState([])
  const [copied,setCopied]=useState(false)
  const [search,setSearch]=useState('')
    useEffect(()=>{
      console.log(selectedBrand)
    },[selectedBrand])
    useEffect(()=>{
      if(copied){
      const timeout= setTimeout(()=>{
          setCopied(false)
        },1000)
        return ()=>{
          clearTimeout(timeout)
        }
      }
    },[copied])
    useEffect(()=>{
        setBrands(brandsArray.filter(brand=>brand.title.toLowerCase().includes(search)))
    },[search])
  const data={
    brands,
    selectedBrand,
    setSelectedBrand,
    setCopied,
    search,
    setSearch
  }
  return (
   <>
   <MainContext.Provider value={data}>

    {copied &&<Copied color={copied}/>}
<Sidebar/>
    <Content/>
   
  </MainContext.Provider>    
    </>
  );
}

export default App;
