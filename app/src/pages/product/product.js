
import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/footer'

export default class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                <p>音乐</p>
                <Footer text="1" />
            </div>
        )
    }
}

