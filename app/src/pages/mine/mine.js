
import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/footer'

export default class Mine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div>
        <p>我的</p>
        <Footer text="3" />
      </div>
    )
  }
}

