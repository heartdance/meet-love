import React, {PureComponent} from 'react';
import './index.css';

class Night extends PureComponent {

  state = {
    visible: false,
    opacity: 0,
  }

  componentDidMount() {
    const { onRef } = this.props;
    if (onRef) {
      onRef(this);
    }
  }

  toNight = () => {
    const { duration, onNightEnd } = this.props;
    this.setState({
      visible: true,
    }, () => {
      setTimeout(() => {
        this.setState({
          opacity: 1,
        })
      })
    })
    setTimeout(() => {
      if (onNightEnd) {
        onNightEnd();
      }
      this.setState({
        visible: false,
        opacity: 0,
      })
    }, duration)
  }

  render() {
    const { duration, timer = 'ease-out' } = this.props;
    const { visible, opacity } = this.state;

    return (
      <div>
        {visible && <div id="night-to-light-mask" style={{transition: `opacity ${duration}ms ${timer}`, opacity}} />}
      </div>
    )
  }
}

export default Night;
