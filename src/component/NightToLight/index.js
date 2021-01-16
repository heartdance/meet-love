import React, {PureComponent} from 'react';
import './index.css';

class NightToLight extends PureComponent {

  state = {
    visible: false,
    opacity: 0,
    transFunc: 'ease-out',
  }

  componentDidMount() {
    const { onRef } = this.props;
    if (onRef) {
      onRef(this);
    }
  }

  start = () => {
    const { duration } = this.props;
    this.toNight();
    setTimeout(this.toLight, duration);
  }

  toNight = () => {
    this.setState({
      visible: true,
      transFunc: 'ease-out',
    })
    setTimeout(() => {
      this.setState({
        opacity: 1,
      })
    })
  }

  toLight = () => {
    const { duration, onLightStart, onLightEnd } = this.props;
    this.setState({
      visible: true,
      opacity: 0,
      transFunc: 'ease-in',
    })
    if (onLightStart) {
      onLightStart();
    }
    setTimeout(() => {
      this.setState({
        visible: false,
      })
      if (onLightEnd) {
        onLightEnd();
      }
    }, duration);
  }

  render() {
    const { duration } = this.props;
    const { visible, opacity, transFunc } = this.state;

    return (
      <div>
        {visible && <div id="night-to-light-mask" style={{transition: `opacity ${duration}ms ${transFunc}`, opacity}} />}
      </div>
    )
  }
}

export default NightToLight;
