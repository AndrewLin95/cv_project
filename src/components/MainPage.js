import React, { Component } from 'react';
import PersonalInfo from './CVForm/PersonalInfo';
import ExperienceInfo from './CVForm/ExperienceInfo';
import EducationInfo from './CVForm/EducationInfo';
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
                phone: '',
                email: '',
                location: '',
            },
            experiences: {},
            education: {},
        }

        this.handleChange = this.handleChange.bind(this);
        this.addExpSection = this.addExpSection.bind(this);
        this.deleteExpSection = this.deleteExpSection.bind(this);
        this.addEduSection = this.addEduSection.bind(this);
        this.handleEduChange = this.handleEduChange.bind(this);
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
    }

    addEduSection = () => {
        let tempEducation = this.state.education;
        tempEducation[uniqid()] = {
            course: '',
            university: '',
            startDate: '',
            endDate: '',
        };
        this.setState({
            education: tempEducation,
        })
    }

    deleteEduSection = (id) => {
        let tempEducation = this.state.education;
        delete tempEducation[id];
        this.setState({
            education: tempEducation,
        })
    }

    handleEduChange = (id, item, value) => {
        let tempEducation = this.state.education;
        tempEducation[id][item] = value;
        this.setState({
            education: tempEducation,
        })
    }

    render(){
        return(
            <div id='content'>
                <div id='cvInfo'>
                    <PersonalInfo recordInput={this.handleChange}/>
                    <ExperienceInfo recordInput={this.handleExpChange} addSection={this.addExpSection} expData={this.state.experiences} deleteSection={this.deleteExpSection}/>
                    <EducationInfo recordInput={this.handleEduChange} addSection={this.addEduSection} eduData={this.state.education} deleteSection={this.deleteEduSection}/>
                </div>
                <PreviewCV personalData={this.state.personal} experienceData={this.state.experiences} educationData={this.state.education}/>
            </div>
        );
    }

}

export default MainPage;