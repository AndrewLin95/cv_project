import React, { Component } from 'react';
import "../../styles/mainPage.css";

class ExperienceInfo extends Component{

    // object.entries returns an array. Can map that out?

    render() {


        return(
            <div id='experience' className='newSection'>
                <div>Experiences</div>
                {Object.entries(this.props.expData).map(([key, value]) => {
                    return (
                        <div key={key} id={key} className='addInfo flexColumn newSubSection'>
                            <input placeholder='Company' onChange={(e) => {this.props.recordInput(key, 'company', e.target.value)}}></input>
                            <input placeholder='Position' onChange={(e) => {this.props.recordInput(key, 'position', e.target.value)}}></input>
                            <input placeholder='Start Date' onChange={(e) => {this.props.recordInput(key, 'startDate', e.target.value)}}></input>
                            <input placeholder='End Date' onChange={(e) => {this.props.recordInput(key, 'endDate', e.target.value)}}></input>
                            <textarea placeholder='Description' rows={4} columns={40} onChange={(e) => {this.props.recordInput(key, 'expDescription', e.target.value)}}></textarea>
                            <button className='btn' onClick={() => {this.props.deleteSection(key)}}>Delete</button>
                        </div>
                    )
                })}
                <button className='btn' onClick={this.props.addSection}>Add</button>
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