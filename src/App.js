import logo from './logo.svg';
import './App.css';
import { myPropTypes, UserData } from './profile/component';
import { Age } from './profile/component';
import { Thanks } from './profile/component';
import PropTypes from 'prop-types';
import img from './profile/user.png';



function App() {
  return (
    <div>
      <UserData name="Sara" jop="IT manager" bio=" Rodney Erickson is a content marketing professional at HubSpot, an inbound marketing and sales platform that helps companies attract visitors, convert leads, and close customers. Previously, Rodney worked as a marketing manager for a tech software startup. He graduated with honors from Columbia University with a dual degree in Business Administration and Creative Writing." >
        {img}
      </UserData>
      <Age />

      <Thanks name="Sara" />
      <myPropTypes />
      <props />
    </div >
  );
}

export default App;
