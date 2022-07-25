import React, { Component } from 'react';

class PersonalInfo extends Component {

    render(){
        return(
            <div id='personalInformation' className='flexColumn newSubSection'>
                <div>Personal Information</div>
                <input placeholder='First name' onChange={e=>{this.props.recordInput('firstName', e.target.value)}}></input>
                <input placeholder='Last name' onChange={e=>{this.props.recordInput('lastName', e.target.value)}}></input>
                <input placeholder='Title' onChange={e=>{this.props.recordInput('title', e.target.value)}}></input>
                <textarea placeholder='Description' rows={4} columns={40} onChange={e=>{this.props.recordInput('description', e.target.value)}}></textarea>
            </div>
        )
    }
}



export default PersonalInfo