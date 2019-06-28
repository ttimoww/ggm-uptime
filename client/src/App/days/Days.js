import React, { Component } from 'react';
import Day from './Day';

class Days extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            toggledUp: false,
            daysLoaded: false,
            days: []
         }
    }

    handleToggle = () => {
        this.state.toggledUp ? this.setState({toggledUp: false}) : this.setState({toggledUp: true});
    }

    componentDidMount = () => {
        fetch('/api/days')
        .then(resp => resp.json())
        .then(data => {this.setState({days: data, daysLoaded: true})});
      }

    render() { 

        // Toggling
        const toggleUp = this.state.toggledUp ? 'collapse' : null;
        const rotateToggle = this.state.toggledUp ? {transform: 'rotate(180deg)'} : null;
        
        // Rendering of days
        const days = this.state.days.map(day => (
            <Day 
                key={day._id} 
                id={day._id} 
                day={day.day} 
                date={day.date} 
                selectedDaysChange={this.props.selectedDaysChange} 
             />
        ));

        return ( 
            <section className={"days mainsection " + toggleUp} >
            <header>
                <p>Days</p>
                <div className="toggle" onClick={this.handleToggle} style={rotateToggle}></div>
            </header>
                <div className="days__container mainsection__container scrollbar">
                    {this.state.daysLoaded ? days : <div className="loading"></div>}
                </div>
            </section>
         );
    }
}
 
export default Days;