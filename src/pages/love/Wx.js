import React, {PureComponent} from 'react';
import { calcCoords } from './util';
import image1 from "./image/wx1.png";
import image2 from "./image/wx2.png";
import './index.css';

class BeforeSleep extends PureComponent {

  showImage = () => {
    const { type, nextStep } = this.props;
    return (
      <div>
        <img src={type === 1 ? image1 : image2} border="0" useMap="#image2" alt="image2" width="100%" />
        <map name="image2" id="image2">
          <area shape="rect" coords={calcCoords("100,100,190,190")} alt="image2" onClick={nextStep} />
        </map>
      </div>
    )
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
