import React, { Component } from 'react';

class Experiences extends Component{



    render() {
        for (const [key, value] of Object.entries(this.props.expData)) {
            return (
                <div>
                    <input placeholder='Company'></input>
                    <input placeholder='Position'></input>
                    <input placeholder='Start Date'></input>
                    <input placeholder='End Date'></input>
                    <input placeholder='Description'></input>
                </div>
            )
        }

        return(
            <div id='experience'>
                <div>Experiences</div>
                <button onClick={this.props.addSection}>Add</button>
               
            </div>
        )
    }
}

export default Experiences;