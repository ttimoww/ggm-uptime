import React, { Component } from 'react';
import './css/index.css';
import Days from './days/Days';
import AllStats from './allStats/AllStats';
import DailyStats from './dailyStats/DailyStats';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      daysLoading: false,
      daysLoaded: false,
      selectedDays: [],
      stats: {},
      overalChartData: []
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
    this.setState({ daysLoading: true });
    const body = JSON.stringify({ids: this.state.selectedDays});

    fetch('/api/stats', {
      method: 'POST',
      body: body,
      headers: {
        'Content-type': 'Application/Json'
      }
    })
    .then(resp => resp.json())
    .then(data => {
      this.setState({ stats: data }); 
      if (data.overal){
        this.setState({  // Format chartData in state
          overalChartData: [
            {
              title: '200',
              value: Math.round(data.overal.s200.percentage),
              color: '#63CDDA'
            },
            {
              title: '400',
              value: Math.round(data.overal.s400.percentage),
              color: '#e67e22'
            },
            {
              title: '401',
              value: Math.round(data.overal.s401.percentage),
              color: '#e67e22'
            },
            {
              title: '403',
              value: Math.round(data.overal.s403.percentage),
              color: '#e67e22'
            },
            {
              title: '500',
              value: Math.round(data.overal.s500.percentage),
              color: '#e74c3c'
            },
            {
              title: '501',
              value: Math.round(data.overal.s501.percentage),
              color: '#e74c3c'
            },
            {
              title: '502',
              value: Math.round(data.overal.s501.percentage),
              color: '#e74c3c'
            },
            {
              title: '503',
              value: Math.round(data.overal.s503.percentage),
              color: '#e74c3c'
            }
          ] 
        }, () => this.setState({ daysLoading: false }));
      }
    })
  }

  render() { 

    return ( 
      <div className="app">
      <div className="app__background"></div>
        <div className="app__container">
          <Days selectedDaysChange={this.handleSelectedDaysChange} />
          <AllStats selectedDays={this.state.selectedDays} stats={this.state.stats} daysLoading={this.state.daysLoading} overalChartData={this.state.overalChartData} />
          <DailyStats />
        </div>
      </div>
     );
  }
}
 
export default App;