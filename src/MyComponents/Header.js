import React from 'react'
import PropTypes from 'prop-types';


export default function header(props) {
  return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
               <a className="navbar-brand" href="#">{props.title}</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                      <li className="nav-item">
                          <a className="nav-link active" aria-current="page" href="#">Find Doctors</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link active" aria-current="page" href="#">About</a>
                      </li>
                      <li className="nav-item dropdown">
                          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                              Health Products
                          </a>
                          <ul className="dropdown-menu">
                              <li><a className="dropdown-item" href="#">Skin Care</a></li>
                              <li><a className="dropdown-item" href="#">Pain Relief</a></li>
                              <li><a className="dropdown-item" href="#">Weight Management</a></li>
                              <li><a className="dropdown-item" href="#">Sexual Wellness</a></li>
                          </ul>
                      </li>
                  </ul>
                  {props.searchBar? <form className="d-flex" role="search">
                      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                      <button className="btn btn-outline-success" type="submit">Search</button>
                  </form> :""}
              </div>
          </div>
      </nav> 
  )
}

Headers.defaultProps = {
    title : "Your Title Here",
    searchbar :  true
    //if you have not passed the title or searchbar value to the function
}

Headers.propTypes = {
    title : PropTypes.string,
    searchBar : PropTypes.bool
}