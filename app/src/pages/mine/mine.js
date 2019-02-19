
import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/footer'

export default class Product extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <p>我的</p>
                <Footer text="3" />
            </div>
        )
    }
}

