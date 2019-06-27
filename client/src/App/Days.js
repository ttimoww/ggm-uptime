import React, { Component } from 'react';

class Days extends Component {
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
            <section className="days mainsection" style={toggleUp}>
            <header>
                <p>Days</p>
                <div className="toggle" onClick={this.handleToggle} style={rotateToggle}></div>
            </header>
                <div className="days__container">
                    <h1>List out all days</h1>
                </div>
            </section>
         );
    }
}
 
export default Days;