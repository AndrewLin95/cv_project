import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationPin, faPhone } from '@fortawesome/free-solid-svg-icons';
import '../../styles/previewForm.css';

const PreviewCV = (props) => {
    const { personalData, experienceData, educationData } = props;
    const phoneIcon = <FontAwesomeIcon icon={faPhone}/>
    const emailIcon = <FontAwesomeIcon icon={faEnvelope}/>
    const locationIcon = <FontAwesomeIcon icon={faLocationPin}/>

    return (
        <div id='previewForm'>
            <div id='previewHeader' className='defaultPadding flexColumn'>
                <div className='flexRow spaceBetween'>
                    <div>
                        <div id='previewName'>
                            <div id='previewFirstName'>{personalData.firstName}</div>
                            <div id='previewLastName'>{personalData.lastName}</div>
                        </div>
                        <div id='previewTitle'>{personalData.title}</div>
                    </div>
                    <div id='contactInfo'>
                        <div>{phoneIcon}</div>
                        <div>{emailIcon}</div>
                        <div>{locationIcon}</div>
                    </div>
                </div>
                <div className='seperator'></div>
            </div>
            <div>
                <div id='previewMain' className='defaultPadding'>
                    <div id='previewDesc' className='newSection'>{personalData.description}</div>
                    <div id='previewExperience' className='newSection sectionTitle'>Work Experiences</div>
                        {Object.entries(experienceData).map(([key]) => {
                            return (
                                <div key={key} className='newSubSection subPadding'>
                                    <div className='flexRow spaceBetween'>
                                        <div className='bold'>{experienceData[key].position}</div>
                                        <div className='flexRow gap25 supplementInfo'>
                                            <div>{experienceData[key].company}</div>
                                            <div className='bold'>| {experienceData[key].startDate} - {experienceData[key].endDate}</div>
                                        </div>
                                    </div>
                                    <div className='newSubSection'>{experienceData[key].expDescription}</div>
                                </div>
                            )
                        })}
                    <div id='previewEducation' className='newSection sectionTitle'>Education</div>
                        {Object.entries(educationData).map(([key]) => {
                            return(
                                <div key={key} className='newSubSection subPadding'>
                                    <div className='flexRow spaceBetween'>
                                        <div className='bold'>{educationData[key].course}</div>
                                        <div className='flexRow gap25 supplementInfo'>
                                            <div>{educationData[key].university}</div>
                                            <div className='bold'>| {educationData[key].startDate} - {educationData[key].endDate}</div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                </div>
            </div>
        </div>
    )
}

export default PreviewCV;