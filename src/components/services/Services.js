import React from 'react'
import "./Services.css"

const services = () => {
  return (
    <div>
      <section className='my-8 z-0'>
      <div className="row">
        <h2 className="section-heading text-3xl font-bold">Our Services</h2>
      </div>
      <div className="row my-4">
        <div className="column">
          <div className="card">
            <div className="icon-wrapper">
              <i class="fa-solid fa-circle-user"></i>
            </div>
            <h3>Service Heading</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
              consequatur necessitatibus eaque.
            </p>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <div className="icon-wrapper z-0">
              <i className="fa-solid fa-calculator z-0"></i>
            </div>
            <h3>Service Heading</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
              consequatur necessitatibus eaque.
            </p>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <div className="icon-wrapper">
              <i class="fa-solid fa-bell"></i>
            </div>
            <h3>Service Heading</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
              consequatur necessitatibus eaque.
            </p>
          </div>
        </div>
                 
          
      
      </div>
    </section>
    </div>
  )
}

export default services
