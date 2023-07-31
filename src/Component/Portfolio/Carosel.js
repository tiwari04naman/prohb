import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

export default function Carosel() {
    return (

        <div>
            {/* coursel  */}
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner mt-5 pt-5">
                    <div class="carousel-item active">
                        <img src="image/domenico-loia-EhTcC9sYXsw-unsplash.jpg" class="d-block w-100" alt="..." height={500} />
                    </div>
                    <div class="carousel-item">
                        <img src="image/igor-miske-Px3iBXV-4TU-unsplash.jpg" class="d-block w-100" alt="..." height={500} />
                    </div>
                    <div class="carousel-item">
                        <img src="image/olena-sergienko-dIMJWLx1YbE-unsplash.jpg" class="d-block w-100" alt="..." height={500} />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}
