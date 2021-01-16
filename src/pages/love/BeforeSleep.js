import React, {PureComponent} from 'react';
import { calcCoords } from './util';
import image1 from "./image/1.png";
import image2 from "./image/2.png";
import './index.css';

class BeforeSleep extends PureComponent {

  state = {
    step: 1,
  }

  doorIsOpen = () => (
    <div>
      <img src={image1} border="0" useMap="#image1" alt="image1" width="100%" />
      <map name="image1" id="image1">
        <area shape="rect" coords={calcCoords("300,250,400,350")} alt="image1" onClick={() => this.setState({ step: 2 })} />
      </map>
    </div>
  )

  doorIsClose = () => {
    const { nextStep } = this.props;
    return (
      <div>
        <img src={image2} border="0" useMap="#image2" alt="image2" width="100%" />
        <map name="image2" id="image2">
          <area shape="rect" coords={calcCoords("90,220,120,250")} alt="image2" onClick={nextStep} />
        </map>
      </div>
    )
  }

  showImage = () => {
    const { step } = this.state;
    if (step === 1) {
      return this.doorIsOpen();
    }
    return this.doorIsClose();
  }

  render() {

    return (
      <div>
        {this.showImage()}
      </div>
    )
  }
}

export default BeforeSleep;
