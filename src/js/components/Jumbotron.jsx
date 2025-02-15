import React from "react";

const Jumbotron = ()=>{


    return(
        <div className="container d-flex justify-content-center mt-3">
            <div class="jumbotron  bg-secondary">
                <h1 class="display-4">Hello, 4GeekAcademy!</h1>
                <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                <div className="d-flex justify-content-start m-3">
                    <a class="btn btn-primary btn-lg" href="#" role="button">Call to action!</a>
                </div>
                
    
            </div>
       </div>

    )
}

export default Jumbotron;