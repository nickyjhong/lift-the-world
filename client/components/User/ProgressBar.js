import React from "react";

const ProgressBar = (props)=>{
    const {percentage} = props;

    const filler = {
        height: '100%',
        width: `${percentage}%`,
        backgroundColor: '#FFC300',
        borderRadius: 'inherit',
        textAlign: 'right'
    }

    return (
    <div className="progress-container">
        <div style={filler} className="progress-label-container">
            <span className="progress-label">{`${percentage}%`}</span>
        </div>
        
    </div>
    )
}

export default ProgressBar;