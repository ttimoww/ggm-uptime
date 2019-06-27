import React, { Component } from 'react';

class Day extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            id: props.id,
            selected : false
         }
    }

    handleSelect = () => {
        this.state.selected ? this.setState({selected: false}) : this.setState({selected: true});
        this.props.selectedDaysChange(this.state.id);
    }

    render() { 

        const selected = this.state.selected ? 'selected' : null;

        return ( 
            <div className={"day " + selected} onClick={this.handleSelect}>
                <div className="day__container">
                    <p className="day__day">{this.props.day}</p>
                    <p className="day__date">{this.props.date}</p>
                    <p className="day__id">{this.props.id}</p>
                </div>
            </div>
         );
    }
}
 
export default Day;