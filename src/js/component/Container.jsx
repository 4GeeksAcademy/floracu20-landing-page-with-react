import React from 'react'

const Container = () => {
  return (
    <div>
        <div className="container-fluid bg-dark text-light p-5">
            <div className="container bg-dark p-5">
                <h1 className="display-4">A warm welcome! :)</h1>
                <hr/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quas maxime necessitatibus autem! Iure ipsam eligendi cum nihil
                    nisi ex neque delectus nobis, repellat vitae tempore asperiores hic impedit!</p>
                <a href="#" className="btn btn-primary">Call to action!</a>
            </div>
        </div>
    </div>
  )
}

export default Container