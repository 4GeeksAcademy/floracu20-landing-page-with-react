import React from 'react'

const Card = () => {
  return (
    <div className="card" style={{"width": "18rem"}}>
        <img className="card-img-top" src="https://picsum.photos/300?grayscale" alt="Black and white random picture"/>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Maiores eos dolores repellendus temporibus nemo dicta exercitationem itaque, 
                illo nam delectus id!</p>
            <a href="#" className="btn btn-primary">Find out more!</a>
        </div>
    </div>
  )
}

export default Card