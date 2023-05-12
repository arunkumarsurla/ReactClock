import {Component} from 'react'
import Clock from './components/Clock'

import './App.css'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {isVisible:false}
  }


  onToggleClock = () => {
    const {isVisible} = this.state
    this.setState({isVisible : !isVisible})
  }

  render() {
    const {isVisible} = this.state
    return (
      <div className="app-container">
        <button type="button" onClick={this.onToggleClock} className="toggle-button">
          {isVisible ? "Hide Clock" : "Show Clock"}
        </button>
        {isVisible && <Clock />}
      </div>
    )
  }
}

export default App
