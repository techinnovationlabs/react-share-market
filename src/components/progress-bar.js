import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar'

const ProgressBarComponent = (props) => {

    const positiveBar = () => {
        return <ProgressBar variant='success' now={props.value}></ProgressBar>
    }

    const positiveAndNegativeBar = () => {
        const value = props.value;
        if (value >= 0) {
            return <ProgressBar>
                <ProgressBar bsPrefix now={50}></ProgressBar>
                <ProgressBar variant='success' now={value / 2}></ProgressBar>
            </ProgressBar>
        }
        else if (value < 0) {
            return <ProgressBar>
                <ProgressBar bsPrefix now={50 - ((-value) / 2)}></ProgressBar>
                <ProgressBar variant='danger' now={(-value) / 2}></ProgressBar>
                <ProgressBar bsPrefix now={50}></ProgressBar>
            </ProgressBar>
        }

    }

    return <div>
        {props.type === 'positiveBar' ? positiveBar() : positiveAndNegativeBar()}
    </div>
        ;
}

export default ProgressBarComponent;
