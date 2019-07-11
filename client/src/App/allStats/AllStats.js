import React, { Component } from 'react';
import ReactMinimalPieChart from 'react-minimal-pie-chart';
import AllStatsData from './AllStatsData';

class AllStats extends Component {
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
        
        let chart = (
            <ReactMinimalPieChart
                data={this.props.overalChartData}
                    animate
                    lineWidth={20}
                    paddingAngle={5}
                    label
                    labelStyle={{
                        fontSize: '5px',
                        fontFamily: 'sans-serif',
                    }}
                />
        )

        let content;
        if (!this.props.selectedDays.length){
            // No days selected
        }else if (this.props.daysLoading){
            content = <div className="loading"></div>
        }else if (!this.props.daysLoading && this.props.selectedDays.length ){
            content = chart;
        }

        return ( 
            <section className="allstats mainsection" style={toggleUp}>
            <header>
                <p>All stats</p>
                <div className="toggle" onClick={this.handleToggle} style={rotateToggle}></div>
            </header>
                <div className="allstats__container mainsection__container scrollbar">
                    <div className="allstats__chart">
                        <div className="allstats__chart__container">
                            {content}
                        </div>
                    </div>
                    <div className="allstats__info">
                        {this.props.stats.overal && !this.props.daysLoading ? <AllStatsData stats={this.props.stats} /> : null}
                    </div>
                </div>
            </section>
         );
    }
}
 
export default AllStats;