
import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/footer'

export default class Active extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                <p>电影</p>
                <Footer text="2" />
            </div>
        )
    }
}

