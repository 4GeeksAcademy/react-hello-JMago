import React from "react";


const NavBar =() => {


    return(
        <nav class="navbar navbar-expand-lg bg-secondary">
        <div class="container-fluid">
          <a class="navbar-brand text-white" href="#">Start Boostraps</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item dropdown">
                <ul class="dropdown-menu">
            </ul>
              </li>
            </ul>
            <form class="d-flex" role="search">
                <ul class="nav justify-content-end">
                    <li class="nav-item">
                        <a class="nav-link active text-white" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white" href="#">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white" href="#">Services</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active text-white" aria-current="page">Contact</a>
                    </li>
                </ul>
             
            </form>
          </div>
        </div>
      </nav>
  
 
    )
}

export default NavBar;