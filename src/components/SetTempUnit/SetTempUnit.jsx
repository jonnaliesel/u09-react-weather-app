import React from 'react';

function SetTempUnit(props) {

    const {handleSetTempUnitSubmit} = props

    return (
        <div>
            <button onClick={handleSetTempUnitSubmit}>{'\u00b0C'}</button>
            <button onClick={handleSetTempUnitSubmit}>{'\u00b0F'}</button>
        </div>
    )
}

export default SetTempUnit