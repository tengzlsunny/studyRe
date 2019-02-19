import React from 'react'
import {Link} from 'react-router-dom'

import '../../static/components/header.scss';

export default class Header extends React.Component {
    constructor() {
        super()
        this.state = {
            indexType: 1
        }
    }
    render() {
        let that = this
        let iT = that.state.indexType

        return (
            <div className="index_header">
                <div className="header_base">
                    <span className='iconfont'>&#xe63d;</span>
                    <ul>
                        <li>
                            <Link to="/product" className={ iT == 0 ? 'liSelect' : ''}>
                                <span className='iconfont'>&#xe680;</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/product" className={ iT == 1 ? 'liSelect' : ''}>
                                <span className='iconfont'>&#xe618;</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/product" className={ iT == 2 ? 'liSelect' : ''}>
                                <span className='iconfont'>&#xe78f;</span>
                            </Link>
                        </li>
                    </ul>
                    <Link to="/product">
                        <span className='iconfont'>&#xe783;</span>
                    </Link>
                </div>
            </div>
        )
    }
}