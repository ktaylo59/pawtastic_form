import React, { Component } from 'react';

class Nav extends Component {
    render() {
        return (
            <div className='side-bar' >
                <img id='pal' src="./assets/goldie.jpg" alt=""/>
                <h1> PAWTASTIC </h1>
            <div className= 'form'>
                   <button> </button>
                   <button></button>
                   <button></button>
                   <button></button>
            </div>
            
            <div className= 'labels'>
              <label id='confirm' > Confirm </label>
              <label id='human' > Human Profile </label>
            </div>
            </div>
            );
    }
}
export default Nav;