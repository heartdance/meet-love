import React, {PureComponent} from 'react';
import './index.css';

class Know extends PureComponent {

  state = {
    step: 1,
  }

  setStep = step => {
    this.setState({
      step,
    })
  }

  showImage = () => {
    const { step } = this.state;
  }

  render() {
    return (
      <div>
        {this.showImage()}
      </div>
    )
  }
}

export default Know;
