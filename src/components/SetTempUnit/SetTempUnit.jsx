import React from 'react';

function SetTempUnit(props) {

    const {handleSetTempUnitSubmit, tempUnit} = props

    return (
        <div>
            <button onClick={handleSetTempUnitSubmit}>
                {tempUnit === 'metric' ? '\u00b0F': '\u00b0C'}
            </button>
        </div>
    )
}

export default SetTempUnit