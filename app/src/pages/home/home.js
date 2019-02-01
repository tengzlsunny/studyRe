
import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/footer'

export default class NavigationBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                <p>首页</p>
                <Footer text="0" />
            </div>
        )
    }
}

