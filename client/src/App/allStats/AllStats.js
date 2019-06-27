import React, { Component } from 'react';

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

        return ( 
            <section className="allstats mainsection" style={toggleUp}>
            <header>
                <p>All stats</p>
                <div className="toggle" onClick={this.handleToggle} style={rotateToggle}></div>
            </header>
                <div className="allstats__container">
                    <h1>List out stats from all selected days</h1>
                </div>
            </section>
         );
    }
}
 
export default AllStats;