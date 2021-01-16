import React, {PureComponent} from 'react';
import './index.css';

class Forget extends PureComponent {

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

export default Forget;
