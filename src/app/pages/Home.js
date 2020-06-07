import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import organized from '../layouts/organized.png';

export default class Home extends Component {
    render() {
        return (
            <div>
                <img className='image' src={organized} />
            </div>
        )
    }
}