import React, {PureComponent} from 'react';
import NightToLight from 'component/NightToLight'
import Night from 'component/Night'
import Light from 'component/Light'
import './index.css';

class Meet extends PureComponent {

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
        <button onClick={() => this.nightToLight.start()}>click</button>
        <button onClick={() => this.night.toNight()}>click</button>
        <button onClick={() => this.light.toLight()}>click</button>
        <NightToLight duration={3000} onRef={ref => this.nightToLight = ref} />
        <Night duration={3000} onRef={ref => this.night = ref} />
        <Light duration={3000} onRef={ref => this.light = ref} />
      </div>
    )
  }
}

export default Meet;
