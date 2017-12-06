import React, { Component } from 'react'
import ReactTransitionGroup from 'react-addons-transition-group'

// use with redux
// import connectWithTransitionGroup from 'connect-with-transition-group'


import Card from './components/Card'


import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      show: false
    }

  }

  componentDidMount() {
    console.log(this.appIntro)
    this.appIntro.innerText = "I changed the text using refs!"
  }

  


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro"  ref={ref => this.appIntro = ref}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={() => this.setState({show: !this.state.show})}>Toggle Card</button>


        <ReactTransitionGroup component="div">
        { 
          this.state.show &&
          <Card />
        }
        </ReactTransitionGroup>  
        
        
        </div>
        );
  }
}

export default App;

// export for redux connect.

// export default connectWithTransitionGroup( 
//   connect(mapStateToProps, { actionCreators }, null, {withRef: true})(App));
