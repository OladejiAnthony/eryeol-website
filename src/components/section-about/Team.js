/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import "./Team.scss"
import aam from "../../image/bsam.svg"
import am from "../../image/eyinbo.svg"
import aaw from "../../image/blacki.svg"
import td from "../../image/td.svg"

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
                        <h3>Name</h3>
                        <h3>Surname</h3>
                        <p>CEO, Team lead</p>
                    </div>
                    <img src={aam} alt='image' />
                </div>
                <div className='item-1'>
                    <div>
                        <h3>Name</h3>
                        <h3>Surname</h3>
                        <p>CEO, Team lead</p>
                    </div>
                    <img src={am} alt='image' />
                </div>
                <div className='item-2'>
                    <div>
                        <h3>Name</h3>
                        <h3>Surname</h3>
                        <p>CEO, Team lead</p>
                    </div>
                    <img src={aaw} alt='image' />
                </div>
            </div>
            <div className='row-2'>
                <div className='item-3'>
                    <div>
                        <h3>Name</h3>
                        <h3>Surname</h3>
                        <p>CEO, Team lead</p>
                    </div>
                    <img src={td} alt='image' />
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


