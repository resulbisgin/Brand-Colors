import React from 'react';
import {GrSearch} from "react-icons/gr"
import { useContext } from 'react';
import MainContext from '../Maincontext';
function Search() {
     const {search,setSearch}=useContext(MainContext)
    return (
        <div className='search'>
            <div className='icon'>
            <GrSearch/>
            </div>
                <input type="text"  onChange={(e)=>setSearch(e.target.value)} placeholder="Search Brands" />
        </div>
    );
}

export default Search;