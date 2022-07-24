import React from 'react';
import './previewForm.css';

const PreviewForm = (props) => {
    const { personalData } = props;

    return (
        <div id='previewForm'>
            <div>Header</div>
                <div>{personalData.firstName}</div>
            <div>Description</div>
                <div>{personalData.title}</div>
            <div>Experience</div>
        </div>
    )
}

export default PreviewForm;