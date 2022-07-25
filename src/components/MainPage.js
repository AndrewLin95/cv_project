import React, { Component } from 'react';
import PersonalInfo from './CVForm/PersonalInfo';
import ExperienceInfo from './CVForm/ExperienceInfo';
import PreviewCV from './CVPreview/PreviewCV'
import uniqid from "uniqid";
import '../styles/mainPage.css'

class MainPage extends Component {
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
            company: '',
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

    handleExpChange = (id, item, value) => {
        let tempExperiences = this.state.experiences;
        tempExperiences[`${id}`][`${item}`] = value;
        this.setState({
            experiences: tempExperiences,
        })
        console.log(this.state.experiences);
    }

    render(){
        return(
            <div id='content'>
                <div id='cvInfo'>
                    <PersonalInfo recordInput={this.handleChange}/>
                    <ExperienceInfo recordInput={this.handleExpChange} addSection={this.addExpSection} expData={this.state.experiences} deleteSection={this.deleteExpSection}/>
                </div>
                <PreviewCV personalData={this.state.personal} experienceData={this.state.experiences}/>
            </div>
        );
    }

}

export default MainPage;