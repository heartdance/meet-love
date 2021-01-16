import React, {PureComponent} from 'react';
import Night from 'component/Night'
import { calcCoords } from './util';
import image1 from "./image/2-1.png";
import image2 from "./image/2-2.png";
import image3 from "./image/2-3.png";
import image4 from "./image/2-4.png";
import './index.css';

class BeforeSleep extends PureComponent {

  state = {
    step: 1,
  }

  showImage0 = (image, next) => (
    <div>
      <img src={image} border="0" useMap="#image1" alt="image1" width="100%" />
      <map name="image1" id="image1">
        <area shape="rect" coords={calcCoords("60,30,150,110")} alt="image1"
              onClick={next === 0 ? this.over : () => this.setState({ step: next })} />
      </map>
    </div>
  )

  over = () => {
    this.night.toNight();
  }

  showImage = () => {
    const { step } = this.state;
    if (step === 1) {
      return this.showImage0(image1, 2);
    }
    if (step === 2) {
      return this.showImage0(image2, 3);
    }
    if (step === 3) {
      return this.showImage0(image3, 4);
    }
    return this.showImage0(image4, 0);
  }

  render() {

    const { nextStep } = this.props;

    return (
      <div>
        {this.showImage()}
        <Night
          duration={3000}
          onRef={ref => this.night = ref}
          onNightEnd={nextStep}
        />
      </div>
    )
  }
}

export default BeforeSleep;
