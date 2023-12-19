import React from 'react'
import "./Awards.scss"

const Awards = () => {
  return (
    <div className='awards'>
      <div className='a-wrapper'>
        <div className='top'>
            <button>Awards and Recognition</button>
            <h3>Excellence that speaks</h3>
        </div>
        <div className='bottom'>
            <div className='item'>
                <h3>Awards title</h3>
                <div>
                    <p>Presented by</p>
                    <p>2023</p>
                </div>
            </div>
            <div className='item'>
                <h3>Awards title</h3>
                <div>
                    <p>Presented by</p>
                    <p>2023</p>
                </div>
            </div>
            <div className='item'>
                <h3>Awards title</h3>
                <div>
                    <p>Presented by</p>
                    <p>2023</p>
                </div>
            </div>
            <div className='item'>
                <h3>Awards title</h3>
                <div>
                    <p>Presented by</p>
                    <p>2023</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Awards
