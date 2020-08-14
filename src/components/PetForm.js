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
                <form className='pet-form'  >
                  <label id='name' htmlFor=""> Name </label>
                  <input id='name-field' type="text" placeholder="Pet's name"  />
                  <label id='breed' htmlFor=""> Breed </label>
                </form>
            </div>
        );
    }
}

export default PetForm;
