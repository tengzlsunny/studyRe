import React from 'react';
import ReactDOM from 'react-dom';
import 'lib-flexible'
import Index from './src/pages'

import './static/public/iconfont.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
        <Index />
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));