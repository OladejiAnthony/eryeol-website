/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import "./Desc.scss";
import bot from "../../../../image/bg-bot.png"
import imgA from "../../../../image/p-img-a.png"
import imgB from "../../../../image/p-img-b.png"
import imgC from "../../../../image/b-img-c.png"
import imgD from "../../../../image/b-img-d.png"
import imgE from "../../../../image/bg-img-e.png"

const Desc = () => {
  return (
    <div className='project-desc'>
      <div className='top'>
        <img src={bot} alt='robot'/>
        <div className='textContainer'>
            <h2>So and so bot</h2>
            <div className='project-detail'>
                <div>
                    <p>Year</p>
                    <h5>2023</h5>
                </div>
                <div>
                    <p>Client</p>
                    <h5>So and so company</h5>
                </div>
            </div>
        </div>
      </div>
      <div className='center'>
        <button>About the project</button>
        <p>
            Consectetur nulla excepteur sint mollit commodo officia. Sit dolore labore est duis occaecat fugiat ullamco consectetur excepteur laborum laboris qui anim magna. Sunt mollit eu ea quis enim consectetur eu irure laboris consectetur in ut ad. Eiusmod veniam non consequat nisi sint veniam esse eu nulla est sit ad ea.
            Anim nisi nostrud do anim incididunt elit. Sit magna qui aute adipisicing exercitation. Eiusmod consectetur velit ad velit. Minim aliqua sit magna amet sunt pariatur tempor velit pariatur consectetur laborum fugiat aute. Adipisicing pariatur laboris culpa consectetur reprehenderit incididunt nostrud. 
        </p>
      </div>
      <section className='images'>
        <img src={imgE} alt='image-1' />
        <img src={imgA} alt='image-2' />
        <div>
            <img className='row-img' src={imgB} alt='image-1' />
            <img className='row-img' src={imgC} alt='image-1' />
        </div>
      </section>
      <section className='title'>
        <button>Title</button>
        <p>
            Consectetur nulla excepteur sint mollit commodo officia. Sit dolore labore est duis occaecat fugiat ullamco consectetur excepteur laborum laboris qui anim magna. Sunt mollit eu ea quis enim consectetur eu irure laboris consectetur in ut ad. Eiusmod veniam non consequat nisi sint veniam esse eu nulla est sit ad ea.
            Anim nisi nostrud do anim incididunt elit. Sit magna qui aute adipisicing exercitation. Eiusmod consectetur velit ad velit. Minim aliqua sit magna amet sunt pariatur tempor velit pariatur consectetur laborum fugiat aute. Adipisicing pariatur laboris culpa consectetur reprehenderit incididunt nostrud. 
        </p>
      </section>
      <section>
        <img src={imgD} alt='car' />
      </section>
    </div>
  )
}

export default Desc
