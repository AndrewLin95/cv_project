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
        this.addExpSection = this.addExpSection.bind(this);
    }

    handleChange = (id, value) => {
        let tempPersonal = this.state.personal;
        tempPersonal[`${id}`] = value;
        this.setState({
            personal: tempPersonal,
        }
    )}

    addExpSection = () => {
        let tempExperiences = this.state.experiences;
        tempExperiences[uniqid()] = {
            company: 'test',
            position: '',
            startDate: '',
            endDate: '',
            expDescription: '',
        };
        this.setState({
            experiences: tempExperiences,
        })
    }

    render(){
        return(
            <div id='mainForm'>
                <PersonalInput recordInput={this.handleChange}/>
                <Experiences addSection={this.addExpSection} expData={this.state.experiences}/>
                <PreviewForm personalData = {this.state.personal}/>
            </div>
        );
    }

}

export default MainForm;