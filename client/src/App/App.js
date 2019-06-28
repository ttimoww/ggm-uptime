import React, { Component } from 'react';
import './css/index.css';
import Days from './days/Days';
import AllStats from './allStats/AllStats';
import DailyStats from './dailyStats/DailyStats';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      selectedDays : [],
      stats: {}
     }
  }

  /**
   * Handle the selected days
   * @param {String} id The id of the day to be removed
   */
  handleSelectedDaysChange = (givenId) => {
    if (this.state.selectedDays.includes(givenId)){
      this.setState(prevState => {
        return {selectedDays: prevState.selectedDays.filter(id => id !== givenId)}
      }, () => this.getStats())
    }else{
      this.setState(prevState => {
        return {selectedDays: [...prevState.selectedDays, givenId]}
      }, () =>  this.getStats())
    }
  }

  getStats = () => {
    const body = JSON.stringify({ids: this.state.selectedDays});

    fetch('/api/stats', {
      method: 'POST',
      body: body,
      headers: {
        'Content-type': 'Application/Json'
      }
    })
    .then(resp => resp.json())
    .then(data => this.setState({stats: data}));
  }

  render() { 
    return ( 
      <div className="app">
      <div className="app__background"></div>
        <div className="app__container">
          <Days selectedDaysChange={this.handleSelectedDaysChange} stats={this.state.stats} />
          <AllStats selectedDays={this.state.selectedDays} />
          <DailyStats />
        </div>
      </div>
     );
  }
}
 
export default App;