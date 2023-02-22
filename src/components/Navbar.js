import React from "react";
import img from "./img.png";
export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg bg-primary">
  <div className="container-fluid ">
  
    <a className="navbar-brand" href="#"><h3><img src={img} alt=""/>{props.title}</h3></a>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav">
      <li className="nav-item">
          <a className="nav-link active" href="/Text_Utils"><h3>Home</h3></a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}