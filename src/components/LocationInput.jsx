import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapPin } from '@fortawesome/free-solid-svg-icons'
 


class LocationInput extends React.Component {

    render() {
        return (
            <div>
            <form onSubmit={this.props.handleCitySubmit}>
                <label>
                    Search Weather in another city
                    <input placeholder="Enter city" onChange={this.props.handleCityChange}type="text"></input>
                </label>
                <button type="Submit">Search</button>
            </form>
            <button><FontAwesomeIcon icon={faMapPin} /></button>
            </div>
        );

    }
}

export default LocationInput