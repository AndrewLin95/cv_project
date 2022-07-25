import React, { Component } from 'react';
import "../../styles/mainForm.css";

class ExperienceInfo extends Component{

    // object.entries returns an array. Can map that out?

    render() {


        return(
            <div id='experience'>
                <div>Experiences</div>
                {Object.entries(this.props.expData).map(([key, value]) => {
                    return (
                        <div key={key} id={key} className='addInfo'>
                            <input placeholder='Company'></input>
                            <input placeholder='Position'></input>
                            <input placeholder='Start Date'></input>
                            <input placeholder='End Date'></input>
                            <input placeholder='Description'></input>
                            <button onClick={() => {this.props.deleteSection(key)}}>Delete</button>
                        </div>
                    )
                })}
                <button onClick={this.props.addSection}>Add</button>
            </div>
        )
    }
}

export default ExperienceInfo;

/*
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
*/