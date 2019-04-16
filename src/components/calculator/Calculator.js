import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-grid.css';
import 'bootstrap/dist/css/bootstrap-reboot.css';
import React, { Component } from 'react';

export class Calculator extends Component
{
    constructor() {
        super();
    }
    
    render() {
        return (
                <div class="container">
                    <div class="row">
                        <div class="jumbotron col-12">
                            <div class="row">
                                <div class="col-12">
                                        <div class="form-group">
                                            <input class="form-control text-right" id="calcscreen" disabled="disabled" type="text"/>
                                            
                                        </div>
                                        <div class="form-group"> 
                                            <input class="form-control text-right" id="numberscreen" type="text"/>
                                        </div>
                                </div>
                                
                                <div class="col-7">    
                                    <button class="btn btn-danger col-6 numbers border" id="ce" type="button">C</button>
                                    <button class="btn btn-danger col-6 numbers border" id="c" type="button">&larr;</button>
                                </div>
                                <div class="col-5"> 
                                    
                                    <button class="btn btn-lg btn-light col-6 operator border" func="(" type="button">( </button>
                                    <button class="btn btn-lg btn-light col-6 operator border" func=")" type="button">) </button>
                                </div>
                                <div class="col-7">
                                    <button class="btn btn-lg btn-light col-4 numbers border" func="7" type="button">7</button>
                                    <button class="btn btn-lg btn-light col-4 numbers border" func="8" type="button">8</button>
                                    <button class="btn btn-lg btn-light col-4 numbers border" func="9" type="button">9</button>
                                    <button class="btn btn-lg btn-light col-4 numbers border" func="4" type="button">4</button>
                                    <button class="btn btn-lg btn-light col-4 numbers border" func="5" type="button">5</button>
                                    <button class="btn btn-lg btn-light col-4 numbers border" func="6" type="button">6</button>
                                    <button class="btn btn-lg btn-light col-4 numbers border" func="1" type="button">1</button>
                                    <button class="btn btn-lg btn-light col-4 numbers border" func="2" type="button">2</button>
                                    <button class="btn btn-lg btn-light col-4 numbers border" func="3" type="button">3</button>
                                    <button class="btn btn-lg btn-light col-8 numbers border" func="0" type="button">0  </button>
                                    <button class="btn btn-lg btn-light col-4 numbers border" func="." type="button">.</button>
                                </div> 
                                <div class="col-5">    
                                    <button class="btn btn-lg btn-light col-6 operator border" func="/" type="button">/ </button>
                                    <button class="btn btn-lg btn-light col-6 operator border" func="%" type="button">% </button>
                                    <button class="btn btn-lg btn-light col-6 operator border" func="*" type="button">* </button>
                                    <button class="btn btn-lg btn-light btn-lg col-6 border" id="squareroot" func="√" type="button">√</button>
                                    <button class="btn btn-lg btn-light col-6 operator border" func="-" type="button">- </button>
                                    <button class="btn btn-lg btn-light col-6 operator border" func="+" type="button">+ </button>
                                    <button class="btn btn-lg btn-primary col-12" id="equals" func="=" type="button"> =</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}