import React from 'react'

const Navbar = () => {
  return (
    <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{"color": "white", "backgroundColor": "lightGray"}}>
            <div className="container-fluid">
                <a className="navbar-brand"><strong>Start Bootstrap</strong></a>
                <ul className="navbar-nav me-2 mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Services</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    </>
  )
}

export default Navbar