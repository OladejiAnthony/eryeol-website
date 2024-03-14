/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import "./Team.scss"
import aam from "../../image/fash_1.svg"
import am from "../../image/jessie_1.svg"
import aaw from "../../image/blacki.svg"
import td from "../../image/tony.svg"
import todd from "../../image/todd.svg"
import adewumi from "../../image/Adewusi-blessing.png"

const Team = () => {
  return (
    <div className='team'>
      <div className='wrapper'>
        <div className='top'>
            <button>Our Team</button>
            <h3>Meet the Minds Behind the Magic.</h3>
        </div>
        <div className='middle'>
            <div className='row'>
                <div className='item'>
                    <div>
                        <h3>Samson</h3>
                        <h3>Fashola</h3>
                        <p>Director Research and Development.</p>
                    </div>
                    <img src={aam} alt='image' />
                </div>
                <div className='item-1'>
                    <div>
                        <h3>Jessie </h3>
                        <h3>Liu</h3>
                        <p>CEO, Yiwu Sale/ Chief Marketing Director</p>
                    </div>
                    <img src={am} alt='image' />
                </div>
                <div className='item-2'>
                    <div>
                        <h3>Akindele</h3>
                        <h3> Bewaji </h3>
                        <p>Procurement Manager</p>
                    </div>
                    <img src={aaw} alt='image' />
                </div>
            </div>
            <div className='row-2'>
                <div className='item-3'>
                    <div>
                        <h3>Todd Ojeifo</h3>
                        <h3>Akharaiyi</h3>
                        <p>Corporate Management/Customer Relationship Manager</p>
                    </div>
                    <img src={todd} alt='image' />
                </div>
                <div className='item-4'>
                    <div>
                        <h3>Oladeji</h3>
                        <h3>Anthony</h3>
                        <p>Software Engineer</p>
                    </div>
                    <img src={td} alt='image' />
                </div>
                <div className='item-5'>
                    <div>
                        <h3>Adewusi </h3>
                        <h3>Blessing Gloria</h3>
                        <p>Director Environmental Policy, Social and Health</p>
                    </div>
                    <img src={adewumi} alt='image' />
                </div>
                
          {/*      <div className='item-2'>
                    <div>
                        <h3>Name</h3>
                        <h3>Surname</h3>
                        <p>CEO, Team lead</p>
                    </div>
                    <img src={am} alt='image' />
                </div>
                <div className='item-3'> 
                    <div>
                        <h3>Name</h3>
                        <h3>Surname</h3>
                        <p>CEO, Team lead</p>
                    </div>
                    <img src={aaw} alt='image' />
                </div>
                */}
            </div>
        </div>
      </div>
    </div>
  )
}

export default Team


