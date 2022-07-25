import React, { Component } from 'react';
import PersonalInfo from './CVForm/PersonalInfo';
import ExperienceInfo from './CVForm/ExperienceInfo';
import PreviewCV from './CVPreview/PreviewCV'
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
        this.deleteExpSection = this.deleteExpSection.bind(this);
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
        console.log(this.state.experiences);
    }

    deleteExpSection = (id) => {
        let tempExperiences = this.state.experiences;
        delete tempExperiences[id];
        this.setState({
            experiences: tempExperiences,
        })
    }

    render(){
        return(
            <div id='mainForm'>
                <PersonalInfo recordInput={this.handleChange}/>
                <ExperienceInfo addSection={this.addExpSection} expData={this.state.experiences} deleteSection={this.deleteExpSection}/>
                <PreviewCV personalData = {this.state.personal}/>
            </div>
        );
    }

}

export default MainForm;