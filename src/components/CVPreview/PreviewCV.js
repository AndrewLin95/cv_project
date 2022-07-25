import React from 'react';
import '../../styles/previewForm.css';

const PreviewCV = (props) => {
    const { personalData, experienceData, educationData } = props;

    return (
        <div id='previewForm'>
            <div id='previewHeader' className='defaultPadding'>
                <div id='previewName'>
                    <div id='previewFirstName'>{personalData.firstName}</div>
                    <div id='previewLastName'>{personalData.lastName}</div>
                </div>
                <div id='previewTitle'>{personalData.title}</div>
                <div id='seperator'></div>
            </div>
            <div>
                <div id='previewMain' className='defaultPadding'>
                    <div id='previewDesc' className='newSection'>{personalData.description}</div>
                    <div id='previewExperience' className='newSection'>Work Experiences</div>
                        {Object.entries(experienceData).map(([key]) => {
                            return (
                                <div key={key} className='newSubSection subPadding'>
                                    <div className='flexRow spaceBetween'>
                                        <div>{experienceData[key].position}</div>
                                        <div className='flexRow gap25'>
                                            <div>{experienceData[key].company}</div>
                                            <div>|| {experienceData[key].startDate} - {experienceData[key].endDate}</div>
                                        </div>
                                    </div>
                                    <div className='newSubSection'>{experienceData[key].expDescription}</div>
                                </div>
                            )
                        })}
                    <div id='previewEducation' className='newSection'>Education</div>
                        {Object.entries(educationData).map(([key]) => {
                            return(
                                <div key={key} className='newSubSection subPadding'>
                                    <div className='flexRow spaceBetween'>
                                            <div>{educationData[key].course}</div>
                                            <div className='flexRow gap25'>
                                                <div>{educationData[key].university}</div>
                                                <div>|| {educationData[key].startDate} - {educationData[key].endDate}</div>
                                            </div>
                                        </div>
                                </div>
                            )
                        })}
                </div>
                <div id='previewDetails'>
                </div>
            </div>
        </div>
    )
}

export default PreviewCV;