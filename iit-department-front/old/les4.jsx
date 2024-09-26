import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const AppLink = (props) => ({
    render: () => (
        <Link {...props} activeClassName={"active"} />
    )
})

class Connector extends Component {
    render() {
        return (
            <Router>
                <nav>
                    <AppLink to="/" activeClassName="active">Home</AppLink>
                    <AppLink to="/contacts" activeClassName="active">Contacts</AppLink>
                    <AppLink to="/map" activeClassName="active">Map</AppLink>
                </nav>
            </Router>
        );
    }
}

export default Connector;