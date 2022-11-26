import React from 'react'

function Slider() {
  return (
    <div>
        <div class="container-fluid">
    <div class="row">
      <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
        
        <ol class="carousel-indicators">
          <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
          <li data-target="#carousel-example-generic" data-slide-to="1"></li>
          <li data-target="#carousel-example-generic" data-slide-to="2"></li>
        </ol>
      
        
        <div class="carousel-inner carousel-image" role="listbox">
          <div class="item active">
            <img src="piza images/piza1.jpg" alt="pizza"/>
            <div class="carousel-caption">
              It's the pizza you want!
            </div>
          </div>
          <div class="item">
            <img src="piza images/piza10.jpg" alt="pizza"/>
            <div class="carousel-caption">
              It's the pizza you want!
            </div>
          </div>
          <div class="item">
            <img src="piza images/piza14.jpg" alt="pizza"/>
            <div class="carousel-caption">
              It's the pizza you want!
            </div>
          </div>
          <div class="item">
            <img src="piza images/piza15.jpg" alt="pizza"/>
            <div class="carousel-caption">
              It's the pizza you want!
            </div>
          </div>
          <div class="item">
            <img src="piza images/piza7.jpg" alt="pizza"/>
            <div class="carousel-caption">
              It's the pizza you want!
            </div>
          </div>
          ...
        </div>
      
        
        <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
          <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
          <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
  </div>

    </div>
    
  )
}

export default Slider