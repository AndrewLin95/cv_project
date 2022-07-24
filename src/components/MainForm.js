import React, { Component } from 'react';
import PersonalInput from './CVForm/PersonalInfo';
import Experiences from './CVForm/Experiences';
import PreviewForm from './CVPreview/PreviewForm'
import uniqid from "uniqid";
import '../styles/mainForm.css'

class MainForm extends Component {
    constructor() {
        super();

        this.state = {
            personal: {
                firstName: '',
                lastName: '',
                title: '',
                description: '',
            },
            experiences: {},
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (id, value) => {
        let tempPersonal = this.state.personal;
        tempPersonal[`${id}`] = value;
        this.setState({
            personal: tempPersonal,
        }
    )}

    addExpSection = () => {
        
    }

    render(){
        return(
            <div id='mainForm'>
                <PersonalInput recordInput={this.handleChange}/>
                <Experiences/>
                <PreviewForm personalData = {this.state.personal}/>
            </div>
        );
    }

}

export default MainForm;