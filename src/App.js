import React from 'react';
import './App.css';
import PetForm from './components/PetForm';
import Nav from './components/Nav';

class App extends React.Component {
  render() {
  return (
    <div className="App">
     <PetForm/>
     <Nav/>
    </div>
   );
 }
}
export default App;
