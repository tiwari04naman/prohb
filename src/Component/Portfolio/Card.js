import React from 'react';
import { Link } from 'react-router-dom';

export default function Card() {
  return (
// Card
    <div class="container mt-5 pt-5">
      <div class="row mt-5">
        <div class="col-md-6">
          <div class="card">
            <img src="image/1.png" height={400} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Day 1</h5>
              <p class="card-text">
                FirstComponent
              </p>
              <Link to="/firstComponent" class="btn btn-primary  " >Click </Link>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="card">
            <img src="image/2.png" height={400} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Day 2</h5>
              <p class="card-text">
                Galery1
              </p>
              <Link to="/galery1" class="btn btn-primary  " >Click </Link>
            </div>
          </div>
        </div>
        </div>
        <div class="row mt-5">
        <div class="col-md-6">
          <div class="card">
            <img src="image/download.png" height={400} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Day 3</h5>
              <p class="card-text">
                Evaluating Expression
              </p>
              <Link to="/display" class="btn btn-primary  " >Click </Link>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="card">
            <img src="image/download.png" height={400} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Day 4</h5>
              <p class="card-text">
                Display
              </p>
              <Link to="/display1" class="btn btn-primary  " >Click </Link>
            </div>
          </div>
        </div>
        </div>

        <div class="row mt-5">
        <div class="col-md-6">
          <div class="card">
            <img src="image/download.png" height={400} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Day 5</h5>
              <p class="card-text">
                Inline CSS
              </p>
              <Link to="/inlinecss" class="btn btn-primary  " >Click </Link>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="card">
            <img src="image/download.png" height={400} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Day 6</h5>
              <p class="card-text">
                External CSS
              </p>
              <Link to="/externalcss" class="btn btn-primary  " >Click </Link>
            </div>
          </div>
        </div>
        </div>




        <div class="row mt-5">
        <div class="col-md-6">
          <div class="card">
            <img src="image/download.png" height={400} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Day 7</h5>
              <p class="card-text">
                Product
              </p>
              <Link to="/product" class="btn btn-primary  " >Click </Link>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="card">
            <img src="image/download.png" height={400} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Day 8</h5>
              <p class="card-text">
                Counter
              </p>
              <Link to="/counter" class="btn btn-primary  " >Click </Link>
            </div>
          </div>
        </div>
        </div>





        <div class="row mt-5">
        <div class="col-md-6">
          <div class="card">
            <img src="image/download.png" height={400} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Day 9</h5>
              <p class="card-text">
                Like /Dislike
              </p>
              <Link to="/like" class="btn btn-primary  " >Click </Link>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="card">
            <img src="image/download.png" height={400} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Day 10</h5>
              <p class="card-text">
                To Do List
              </p>
              <Link to="/todo" class="btn btn-primary  " >Click </Link>
            </div>
          </div>
        </div>
        </div>





        <div class="row mt-5">
        <div class="col-md-6">
          <div class="card">
            <img src="image/download.png" height={400} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Day 11</h5>
              <p class="card-text">
                Local Storage
              </p>
              <Link to="/localstorage" class="btn btn-primary  " >Click </Link>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="card">
            <img src="image/download.png" height={400} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Day 12</h5>
              <p class="card-text">
                To Do List
              </p>
              <Link to="/todo" class="btn btn-primary  " >Click </Link>
            </div>
          </div>
        </div>
        </div>
    </div>



      
    
  );
}
