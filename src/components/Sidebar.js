import React, { useState } from 'react';
import Modal from 'react-modal'
import {AiFillCloseCircle} from 'react-icons/ai'
function Sidebar() {
    const [modalIsOpen,setModalIsOpen]=useState(false)
    const toggleModal=()=>{
        setModalIsOpen(!modalIsOpen)
    }
  
    return (
        <>
            <aside className='sidebar'>
            <div className='logo'>
                <a>Brand<b>Colors</b></a>
            </div>
            <div className='description'>
                The biggiets collection of offical Brand colors code 
                around,Cureted by @brandcolors and friends.
            </div>
            <nav className='menu'>
                <ul>
                    <li>
                        <a onClick={toggleModal}>About Brand Colors</a>
                    </li>
                </ul>
            </nav>
            </aside>
            <Modal
            isOpen={modalIsOpen}
            onRequestClose={toggleModal}
            className="about-modal"
            overlayClassName="about-modal-overlay"
      >
        <h2>Hello</h2>
        <button onClick={toggleModal} ><AiFillCloseCircle className='modal-close-btn'/></button>
       <h3>AboutBrandColors</h3>
       <p>BrandColors was created by DesignBombs. The goal was to create a helpful reference for the brand color codes that are needed most often.</p>
       <p>It's been featured by Smashing Magazine, CSS-Tricks, Web Design Depot, Tuts+, and over 2 million pageviews. There are now over 600 brands with 1600 colors and the collection is always growing.</p>
      </Modal>
        </>
    );
}

export default Sidebar;