
import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/footer'
import Header from '../../components/header'
import Slider from '../../components/slider'
import api from '../../../utils/api'

import '@/static/home/home.scss'

import banner1 from '@/assets/imgs/1.jpg'
import banner2 from '@/assets/imgs/2.jpg'
import banner3 from '@/assets/imgs/3.jpg'
import banner4 from '@/assets/imgs/4.jpg'
import banner5 from '@/assets/imgs/5.jpg'
import banner6 from '@/assets/imgs/6.jpg'
import banner7 from '@/assets/imgs/7.jpg'
import banner8 from '@/assets/imgs/8.jpg'


export default class NavigationBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recommend: [],
            headerSelect: 0

        }
    }
    componentDidMount() {
        let that = this
        // api.axios.get(api.apiUrl + 'banner')
        // .then(res => {
        //     this.setState({
        //         banner: res.data.banners
        //     })
        // })
        api.axios.get('./app/static/json/tj.json')
            .then(res => {
                that.setState({
                    recommend: res.data.data
                })
            })
    }

    render() {
        let that = this
       

        let recommend = that.state.recommend
        let headerSelect = that.state.headerSelect

        if (recommend.length) {
            var tjList = recommend.map((v, i) => {
                return (
                    <li key={i}>
                        <Link to={v.route}>
                            <span className={v.icon +' iconfont'}></span>
                            <p>{v.content}</p>
                        </Link>
                    </li>
                )
            })
        }
        return (
            <div className="home_index">
                <Header/>
                
                <ul className="home_header">
                    <li className={ headerSelect == 0 ? 'header_select' : ''}><p>推荐</p></li>
                    <li className={ headerSelect == 1 ? 'header_select' : ''}><p>朋友</p></li>
                    <li className={ headerSelect == 2 ? 'header_select' : ''}><p>电台</p></li>
                </ul>

                <Home0 />

                <ul className="tj">
                    {tjList}
                </ul>

                <Footer text="0" />

            </div>
        )
    }
}

// 推荐页面
class Home0 extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            banner: [
                {
                    imgUrl: banner1,
                    addUrl: 'https://www.baidu.com'
                },
                {
                    imgUrl: banner2,
                    addUrl: 'https://www.baidu.com'
                },
                {
                    imgUrl: banner3,
                    addUrl: 'https://www.baidu.com'
                },
                {
                    imgUrl: banner4,
                    addUrl: 'https://www.baidu.com'
                },
                {
                    imgUrl: banner5,
                    addUrl: 'https://www.baidu.com'
                },
                {
                    imgUrl: banner6,
                    addUrl: 'https://www.baidu.com'
                },
                {
                    imgUrl: banner7,
                    addUrl: 'https://www.baidu.com'
                },
                {
                    imgUrl: banner8,
                    addUrl: 'https://www.baidu.com'
                }
            ]
        }
    }

    componentDidMount() {
        let that = this
        // api.axios.get(api.apiUrl + 'banner')
        // .then(res => {
        //     this.setState({
        //         banner: res.data.banners
        //     })
        // })
    }

    render() {
        let options = {
            showPot: true,  //是否显示下方pot 默认为true
            timeGap: 3000,   //时间间隔 默认3000
            autoplay: true,  //自动轮播默认为true
            showClick: false, // 是否显示左右箭头
            banner: this.state.banner
        };
        return (
            <div className="home0">
                <div className="home0_banner">
                    <div className="home0_bk"></div>
                    <Slider options={options} />
                </div>
            </div>
        )
    }
}

