import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../layouts/App.css'

export default class MainLayout extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{ background: '#b0a093' }}>
                <ul className="error">
                    <li>
                        <Link to="/" style={{ color: "white" }}>Home</Link>
                    </li>
                    <li>
                        <Link to="/crud" style={{ color: "white" }}>Todo List</Link>
                    </li>
                    <li>
                        <Link to="/http" style={{ color: "white" }}>HTTP</Link>
                    </li>
                </ul>
                {this.props.children}
            </div>
        )
    }
}