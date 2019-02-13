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

import '../../static/components/foot.scss';

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
            ulWidth: null,
            carousel_style: {
                transition: 'all 0.5s ease-in-out',
                transform: 'translateX(0)'
            },
            perIndex: 0,
            timer: null,
            startX: 0,
            endX: 0
        }
    }

    componentDidMount() {
        let options = this.props.options
        this.setState({
            ulWidth: document.querySelector('.banner_ul').clientWidth
        })
        window.addEventListener('resize', this.handleResize.bind(this))

        this.autoplay(options)
    }

    handleResize() {
        this.setState({
            ulWidth: document.querySelector('body').clientWidth
        })
    }



    render() {
        let that = this
        let arr = that.state.banner
        return (
            <div className="banner_div">
                <ul className="banner_ul" style={that.state.carousel_style} onTouchStart={this.touchstart.bind(this)}  onTouchEnd={this.touchend.bind(this)} onTouchMove={this.touchmove.bind(this)}>
                    <li style={{ left: this.state.ulWidth * arr.length }}>
                        <a href={arr[0].addUrl}>
                            <img src={arr[0].imgUrl} alt="图片加载失败" />
                        </a>
                    </li>
                    {
                        arr.map((item, index) => {
                            return (
                                <li key={index} style={{ left: this.state.ulWidth * index }}>
                                    <a href={item.addUrl}>
                                        <img src={item.imgUrl} alt="图片加载失败" />
                                    </a>
                                </li>
                            )
                        })
                    }
                    <li style={{ left: this.state.ulWidth * (-1) }}>
                        <a href={arr[arr.length - 1].addUrl}>
                            <img src={arr[arr.length - 1].imgUrl} alt="图片加载失败" />
                        </a>
                    </li>
                </ul>
                {
                    this.props.options.showPot ?
                        <ul className="banner_pot">
                            {
                                arr.map((v, i) => {
                                    return (
                                        <li key={i} className={that.state.perIndex == i ? 'select_pot' : ''} onClick={this.potClick.bind(this, i)}></li>
                                    )
                                })
                            }
                        </ul>
                        : ''
                }

                {
                    this.props.options.showClick ?
                        <div>
                            <span className="pre_click icon-jiantou2 iconfont" onClick={this.jtClick.bind(this, 0)}></span>
                            <span className="next_click icon-arrow-right-copy-copy iconfont" onClick={this.jtClick.bind(this, 1)}></span>
                        </div>
                        : ''
                }
            </div>
        )
    }

    // 自动轮播
    autoplay(options) {
        let that = this
        if (options.autoplay) {
            that.setState({
                timer: setInterval(() => {
                    that.publicRight()
                }, options.timeGap)
            })

        } else {
            window.clearInterval(that.state.timer)
        }
    }

    // pot点击
    potClick(index) {
        let that = this
        let options = JSON.parse(JSON.stringify(this.props.options))
        options.autoplay = false
        that.autoplay(options)
        that.setState({
            carousel_style: {
                transition: 'all 0s',
                transform: 'translateX(' + (-that.state.ulWidth * index) + 'px)'
            },
            perIndex: index
        })
        options.autoplay = true
        that.autoplay(options)
    }

    // 左右箭头点击
    jtClick(type) {
        let that = this
        let options = JSON.parse(JSON.stringify(this.props.options))

        options.autoplay = false
        that.autoplay(options)

        if (type == 0) { // 向左滑动
            that.publickLeft()
        } else { // 向右滑动
            that.publicRight()
        }

        options.autoplay = true
        that.autoplay(options)
    }

    // 滑屏开始
    touchstart(e) {
        let eve = e || window.event
        let touch = eve.touches[0];
        let that = this
        this.setState({
            startX: touch.pageX
        })
        let options = JSON.parse(JSON.stringify(this.props.options))
        options.autoplay = false
        that.autoplay(options)
    }

    // 滑屏
    touchmove(e) {
        let eve = e || window.event;
        let touch = eve.touches[0];
        this.setState({
            endX: touch.pageX
        })
    }

    // 滑屏结束
    touchend(e) {
        let temp = 0;
        let that = this
        temp = this.state.endX - this.state.startX
        if (temp > 10) { // 向左
            this.publickLeft()
        } else if (temp < 10) { // 向右
            this.publicRight()
        }
        let options = JSON.parse(JSON.stringify(this.props.options))
        that.autoplay(options)
    }


    // 向左滑动公共函数
    publickLeft() {
        let that = this
        let ulWidth = that.state.ulWidth
        let preIndex = that.state.perIndex - 1

        if (preIndex == -1) {
            that.setState({
                carousel_style: {
                    transition: 'all 0.5s ease-in-out',
                    transform: 'translateX(' + ulWidth + 'px)'
                },
            })
            preIndex = that.state.banner.length - 1
            setTimeout(() => {
                that.setState({
                    carousel_style: {
                        transition: 'all 0s',
                        transform: 'translateX(' + (-ulWidth * preIndex) + 'px)'
                    },
                })
            }, 500)
        } else {
            that.setState({
                carousel_style: {
                    transition: 'all 0.5s ease-in-out',
                    transform: 'translateX(' + (-ulWidth * preIndex) + 'px)'
                },
            })
        }
        that.setState({
            perIndex: preIndex
        })
    }

    // 向右移动公共函数
    publicRight() {
        let that = this
        let ulWidth = that.state.ulWidth
        let preIndex = that.state.perIndex + 1

        if (preIndex == that.state.banner.length) {
            that.setState({
                carousel_style: {
                    transition: 'all 0.5s ease-in-out',
                    transform: 'translateX(' + (-ulWidth * preIndex) + 'px)'
                },
            })
            preIndex = 0
            setTimeout(() => {
                that.setState({
                    carousel_style: {
                        transition: 'all 0s',
                        transform: 'translateX(' + (-ulWidth * preIndex) + 'px)'
                    },
                })
            }, 500)
        } else {
            that.setState({
                carousel_style: {
                    transition: 'all 0.5s ease-in-out',
                    transform: 'translateX(' + (-ulWidth * preIndex) + 'px)'
                },
            })
        }
        that.setState({
            perIndex: preIndex
        })
    }
}