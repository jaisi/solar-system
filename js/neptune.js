"use strict";

function outputTo(domElement) {
      domElement.append(`<div class='col-md-6 wrapper'><div class='card text-center'><div class='card-block'>`
  						+ `<h4 class='card-title'>Neptune</h4>`
  						+`<h5 class='card-text'>Year Discovered:</h5>` 
  						+`<img src="images/earth.jpeg" alt="Photo of earth">`
  						+`<ul class="list-group list-group-flush">
							<li class="list-group-item">Discovered:</li>
							<li class="list-group-item">Mass:</li>
							<li class="list-group-item">Size:</li>
							<li class="list-group-item">Distance from Sun:</li>
							<li class="list-group-item">Atmospheric composition:</li>
							<li class="list-group-item">Satellites:</li>
							<li class="list-group-item">Probes/Orbiters/Explorers:</li>
							<li class="list-group-item"><a href="#" class="btn btn-primary">Full Report</a></li>
							</ul></div></div></div>`);

      console.log("i am in neptune.js within outputTo function");

    }



module.exports = outputTo;