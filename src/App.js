import React from 'react';
import {Link} from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

// the below line needed to be changed to import {useGrowl, Growl} from 'growl'  but unfortunately my PC was slow to complete the publish
import {useGrowl, Growl} from './growl';

function App() {
  // timeout for growl can be set as useGrown argument in milliseconds, if not set its default value is 3sec
  const [active, setActive] = useGrowl();

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <Link className='App-link' to='/other'>
          Go to the Other component
        </Link>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <a className='App-link' href='#' onClick={() => void setActive(true)}>
          Clik here to activate the growl
        </a>
      </header>
      <Growl
        onDismissed={() => setActive(false)}
        active={active}
        message='Hello World!'
      />
    </div>
  );
}

export default App;
