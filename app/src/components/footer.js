import React from 'react'
import {Link} from 'react-router-dom'

import '../../static/components/foot.scss';
import img1 from '@/assets/imgs/1.jpg'

export default class Footer extends React.Component {
    constructor() {
        super()
        this.state = {
            isSC: false,
            isPlay: false
        }
    }

    playStatus() {
        this.setState({
            isPlay: !this.state.isPlay
        })
    }

    scStatus() {
        this.setState({
            isSC: !this.state.isSC
        })
    }

    render() {
        let that = this,
            state = that.state

        return (
            <div className="index_footer">
                <Link to="/product">
                    <img src={img1} alt=""/>
                    <div>
                        <p>111111111</p>
                        <p>2222222</p>
                    </div>
                </Link>
                <div>
                    <span className={'iconfont ' + (state.isPlay ? 'icon-bofang' : 'icon-zanting')} onClick={that.playStatus.bind(that)}></span>
                    <span className={'iconfont icon_sc ' + (state.isSC ? 'sc_icon' : '')} onClick={that.scStatus.bind(that)}>&#xe757;</span>
                </div>
            </div>
        )
    }
}