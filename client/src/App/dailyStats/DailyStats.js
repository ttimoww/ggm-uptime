import React, { Component } from 'react';
import ReactMinimalPieChart from 'react-minimal-pie-chart';

class DailyStats extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            toggledUp: false
         }
    }

    handleToggle = () => {
        this.state.toggledUp ? this.setState({toggledUp: false}) : this.setState({toggledUp: true});
    }

    render() { 

        const toggleUp = this.state.toggledUp ? {height: '50px'} : null;
        const rotateToggle = this.state.toggledUp ? {transform: 'rotate(180deg)'} : null;

        return ( 
            <section className="dailystats mainsection" style={toggleUp}>
            <header>
                <p>Stats by day</p>
                <div className="toggle" onClick={this.handleToggle} style={rotateToggle}></div>
            </header>
                <div className="dailystats__container mainsection__container">
                    <h1>List out stats by day</h1>
                </div>
            </section>
         );
    }
}
 
export default DailyStats;