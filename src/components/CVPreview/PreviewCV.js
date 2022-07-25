import React from 'react';
import '../../styles/previewForm.css';

const PreviewCV = (props) => {
    const { personalData, experienceData } = props;

    return (
        <div id='previewForm'>
            <div id='previewHeader'>
                <div id='previewName'>
                    <div id='previewFirstName'>{personalData.firstName}</div>
                    <div id='previewLastName'>{personalData.lastName}</div>
                </div>
                <div id='previewTitle'>{personalData.title}</div>
            </div>
            <div>
                <div id='previewMain'>
                    <div id='previewDescription'>Description</div>
                        <div id='previewDesc'>{personalData.description}</div>
                    <div id='previewExperience'>Experience</div>
                        {Object.entries(experienceData).map(([key]) => {
                            return (
                                <div key={key}>
                                    <div>{experienceData[key].position}</div>
                                    <div>{experienceData[key].expDescription}</div>
                                </div>
                            )
                        })}
                    <div id='previewEducation'>Education</div>
                </div>
                <div id='previewDetails'>
                </div>
            </div>
        </div>
    )
}

export default PreviewCV;