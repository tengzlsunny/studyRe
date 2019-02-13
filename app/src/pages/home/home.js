
import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/footer'
import Slider from '../../components/slider'
import api from '../../../utils/api'


// const options = {
//     showPot: true,  //是否显示下方pot 默认为true
//     timeGap: 3000,   //时间间隔 默认3000
//     autoplay: true  //默认为true
// };

export default class NavigationBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            banner: []
        }
    }
    componentDidMount() {
        // api.axios.get(api.apiUrl + 'banner')
        //     .then(res => {
        //         this.setState({
        //             banner: res.data.banners
        //         })
        //     })
    }
    render() {
        return (
            <div>
                <Slider />
                <Footer text="0" />
            </div>
        )
    }
}


