import React, { Component } from 'react';
import PreviewForm from '../CVPreview/previewForm'
import '../../styles/mainForm.css'

class MainForm extends Component {
    constructor() {
        super();

        this.state = {
            firstName: '',
            lastName: '',
            title: '',
            description: '',
        }
    }

    handleChange = (id, value) => {
        this.setState({
            [`${id}`]: value,
        }
    )}

    render(){
        return(
            <div id='mainForm'>
                <div id='personalInformation'>
                    <div>Personal Information</div>
                    <input placeholder='First name' onChange={e=>{this.handleChange('firstName', e.target.value)}}></input>
                    <input placeholder='Last name' onChange={e=>{this.handleChange('lastName', e.target.value)}}></input>
                    <input placeholder='Title' onChange={e=>{this.handleChange('title', e.target.value)}}></input>
                    <textarea placeholder='Description' rows={4} columns={40} onChange={e=>{this.handleChange('description', e.target.value)}}></textarea>
                </div>
                <div id=''>

                </div>
                <PreviewForm personalData = {this.state}/>
            </div>
        );
    }

}

export default MainForm;