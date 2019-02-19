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
                <Link to="/product"></Link>
                <span className='iconfont'>&#xe60e;</span>
                <span className='iconfont'>&#xe757;</span>
            </div>
        )
    }
}