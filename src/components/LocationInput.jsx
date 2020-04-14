import React from "react";

class LocationInput extends React.Component {

    render() {
        return (
            <form onSubmit={this.props.handleCitySubmit}>
                <label>
                    Search Weather in another city
                    <input placeholder="Enter city" onChange={this.props.handleCityChange}type="text"></input>
                </label>
                <button type="Submit">Search</button>
            </form>
        );

    }
}

export default LocationInput