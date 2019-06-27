import React, { Component } from 'react';
import './css/index.css';
import Days from './Days';
import AllStats from './allStats/AllStats';
import DailyStats from './dailyStats/DailyStats';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div className="app">
      <div className="app__background"></div>
        <div className="app__container">
          <Days />
          <AllStats />
          <DailyStats />
        </div>
      </div>
     );
  }
}
 
export default App;