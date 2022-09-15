import React, { useContext } from 'react';
import Search from './Search';
import Brand from './Brand';
import MainContext from '../Maincontext';
import LazyLoad from 'react-lazyload';
import Download from './Download';

function Content() {
        const {brands,selectedBrand}= useContext(MainContext)
    return (
        <main className='content'>
            <header className='header'>
                <Search/>
                {selectedBrand.length !==0 && <Download/>}
            </header>
            <section className='brands'>
                {brands.map(brand=>(
                    <LazyLoad once={true} key={brand.slug} overflow={true} placeholder="Yükleniyor...">
                    <Brand brand={brand}/>
                    </LazyLoad>
                ))}
            </section>
        </main>
    );
}

export default Content;