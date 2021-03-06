import React from 'react';


class PetForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    }

    render() {
        return (
            
            <div className='page' >
                <h1 id='title'> Yay, we love dogs! Give us <br/> the basics about your pup. </h1>
                <form className='pet-form'>
                  <label id='name' htmlFor=""> Name </label>
                  <input id='name-field' type="text" placeholder="Pet's name" />
                  <input id='photo' type="button" src='' />
                  <label id='photo-label'> Upload a photo </label>
                  <label id='breed' htmlFor=""> Breed </label>
                  <input id='breed-field' type="text" placeholder="Pet's breed" />
                  <label id='birthday' htmlFor=""> Birthday </label>
                  <input id='birthday-field' type="text" placeholder="MM/DD/YYYY" />
                  <label id='gender' htmlFor=""> Gender </label>
                  <input id='gender-check' type="checkbox" />
                  <label id= 'fixed' htmlFor=""> Spayed or Neutered </label>
                  <input id='fixed-check' type="checkbox"/>
                  <label id='weight' htmlFor=""> Weight </label>
                  <input id='weight-check' type="checkbox"/>
                  
                  <div id= 'next'>
                    <button> Back </button>
                    <button> Next </button>  
                  </div>
                  </form>              
            </div>
            
        );
    }
}

export default PetForm;
