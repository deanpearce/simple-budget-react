import * as React from 'react';
import './App.css';
import { Button, Header } from 'semantic-ui-react';

const logo = require('./logo.svg');

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Header size="huge" color="blue">
            Welcome to Simple Budget
          </Header>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>
          <Button 
            label="This is neat!"
            content="Nifty Action"
            icon="github"
          />
        </p>
      </div>
    );
  }
}

export default App;
