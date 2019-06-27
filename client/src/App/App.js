import React, { Component } from 'react';
import './css/index.css';
import Days from './days/Days';
import AllStats from './allStats/AllStats';
import DailyStats from './dailyStats/DailyStats';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      selectedDays : []
     }
  }

  handleSelectedDaysChange = (id) => {
    if (this.state.selectedDays.includes(id)){
      this.setState(prevState => ({selectedDays: prevState.selectedDays.filter(id => {
        return id !== id;
      })}))
    }else{
      this.setState(prevState => {
        return {selectedDays: [...prevState.selectedDays, id]}
      })
    }
  }

  render() { 
    return ( 
      <div className="app">
      <div className="app__background"></div>
        <div className="app__container">
          <Days selectedDaysChange={this.handleSelectedDaysChange} />
          <AllStats />
          <DailyStats />
        </div>
      </div>
     );
  }
}
 
export default App;