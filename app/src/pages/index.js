

import React from 'react';
import ReactDOM from 'react-dom';
 
import { routes } from '../route';
import { HashRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

export default class Index extends React.Component{
    render() {
        return (
            <div>
                <HashRouter>
                    <div>
                        {renderRoutes(routes)}
                    </div>
                </HashRouter>
            </div>
            
        )
    }
}

