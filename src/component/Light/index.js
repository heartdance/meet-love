import React, {PureComponent} from 'react';
import './index.css';

class Light extends PureComponent {

  state = {
    visible: false,
    opacity: 1,
  }

  componentDidMount() {
    const { onRef } = this.props;
    if (onRef) {
      onRef(this);
    }
  }

  toLight = () => {
    const { duration, onLightEnd } = this.props;
    this.setState({
      visible: true,
    }, () => {
      setTimeout(() => {
        this.setState({
          opacity: 0,
        })
      })
    })
    setTimeout(() => {
      this.setState({
        opacity: 1,
        visible: false,
      })
      if (onLightEnd) {
        onLightEnd();
      }
    }, duration)
  }

  render() {
    const { duration, timer = 'ease-in' } = this.props;
    const { visible, opacity } = this.state;

    return (
      <div>
        {visible && <div id="night-to-light-mask" style={{transition: `opacity ${duration}ms ${timer}`, opacity}} />}
      </div>
    )
  }
}

export default Light;
