import React, {PureComponent} from 'react';
import Night from 'component/Night'
import { calcCoord } from './util';
import image1 from "./image/road.png";
import image2 from "./image/plane.jpg";
import './index.css';

class StartGame extends PureComponent {

  state = {
    bottom: 0,
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        bottom: -500,
      })
    }, 100);
    setTimeout(() => {
      this.night.toNight();
    }, 1000);
  }

  showImage = () => {
    return (
      <div style={{ height: window.innerHeight, overflow: 'hidden' }}>
        <img style={{ position: "relative", bottom: this.state.bottom }} src={image1} border="0" useMap="#image1" alt="image1" width="100%" id="road"  />
        {/*<map name="image1" id="image1">*/}
        {/*  <area shape="rect" coords={calcCoords("140,340,280,420")} alt="image1" onClick={nextStep} />*/}
        {/*</map>*/}
      </div>
    )
  }

  render() {
    const { nextStep } = this.props;

    return (
      <div>
        {this.showImage()}
        <img style={{ position: "fixed", left: calcCoord(208), bottom: 20, width: calcCoord(120) }} src={image2} border="0"  />
        <Night
          duration={3000}
          onRef={ref => this.night = ref}
          onNightEnd={nextStep}
          timer="linear"
        />
      </div>
    )
  }
}

export default StartGame;
