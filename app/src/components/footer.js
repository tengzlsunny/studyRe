import React from 'react'
import {Link} from 'react-router-dom'

import '../../static/components/foot.scss';

export default class Footer extends React.Component {
    constructor() {
        super()
    }
    render() {
        var text = this.props.text
        return (
            <div className="index_footer">
                <Link to="/" className={text == 0 ? 'footer_select' : ''}>
                    <span className="iconfont icon-shouye"></span>
                    <span>首页</span>
                </Link>
                <Link to="/product" className={text == 1 ? 'footer_select' : ''}>
                    <span className="iconfont icon-yinyue"></span>
                    <span>音乐</span>
                </Link>
                <Link to="/active" className={text == 2 ? 'footer_select' : ''}>
                    <span className="iconfont icon-dianying"></span>
                    <span>电影</span>
                </Link>
                <Link to="/mine" className={text == 3 ? 'footer_select' : ''}>
                    <span className="iconfont icon-wode"></span>
                    <span>我的</span>
                </Link>
            </div>
        )
    }
}