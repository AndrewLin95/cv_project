import React, { Component } from 'react';

class EducationInfo extends Component {

    render() {
        return (
            <div>
                <div>Education</div>
                    {Object.entries(this.props.eduData).map(([key,value]) => {
                        return (
                            <div key={key} id={key} className='addInfo flexColumn newSubSection'> 
                                <input placeholder='Course / Program' onChange={(e)=>{this.props.recordInput(key, 'course', e.target.value)}}></input>
                                <input placeholder='University' onChange={(e)=>{this.props.recordInput(key, 'university', e.target.value)}}></input>
                                <input placeholder='Start Date' onChange={(e)=>{this.props.recordInput(key, 'startDate', e.target.value)}}></input>
                                <input placeholder='End Date' onChange={(e)=>{this.props.recordInput(key, 'endDate', e.target.value)}}></input>
                                <button className='btn' onClick={()=>{this.props.deleteSection(key)}}>Delete</button>
                            </div>
                        )
                    })}
                <button className='btn' onClick={this.props.addSection}>Add</button>
            </div>
        )
    }
}


export default EducationInfo;