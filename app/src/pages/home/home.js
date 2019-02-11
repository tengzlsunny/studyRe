
import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/footer'
import api from '../../../utils/api'

export default class NavigationBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    componentDidMount() {
        api.axios.get(api.apiUrl + 'banner')
        .then(res => {
            console.log(res)
        })
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

