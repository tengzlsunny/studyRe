import React from 'react'
import '@/static/components/slider.scss';

import banner1 from '@/assets/imgs/1.jpg'
import banner2 from '@/assets/imgs/2.jpg'
import banner3 from '@/assets/imgs/3.jpg'
import banner4 from '@/assets/imgs/4.jpg'
import banner5 from '@/assets/imgs/5.jpg'
import banner6 from '@/assets/imgs/6.jpg'
import banner7 from '@/assets/imgs/7.jpg'
import banner8 from '@/assets/imgs/8.jpg'

export default class Slider extends React.Component {
    constructor() {
        super()
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
            ],
        }
    }

    componentDidMount() {
        let arr = this.state.banner
        arr.push(arr[0])
        arr.unshift(arr[arr.length-1])
        this.setState({
            banner: arr
        })
    }

    render() {
        // var text = this.props.text
        return (
            <div className="banner_div">
                <ul className="banner_ul">
                    {
                        this.state.banner.map((item, index) => {
                            return (
                                <li key={index}>
                                    <a href={item.addUrl}>
                                        <img src={item.imgUrl} alt="图片加载失败" />
                                    </a>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}