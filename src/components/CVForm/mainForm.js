import React, { Component } from 'react';
import PreviewForm from '../CVPreview/previewForm'
import '../../styles/mainForm.css'

class MainForm extends Component {
    constructor() {
        super();

        this.state = {
            firstName: '',
            title: '',
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
                <div>Personal Information</div>
                <input placeholder='First name' onChange={e=>{this.handleChange('firstName', e.target.value)}}></input>
                <input placeholder='Title' onChange={e=>{this.handleChange('title', e.target.value)}}></input>
                <PreviewForm personalData = {this.state}/>
            </div>
        );
    }

}

export default MainForm;