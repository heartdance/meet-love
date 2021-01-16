import React, {PureComponent} from 'react';
import { calcCoords } from './util';
import image1 from "./image/0.png";
import './index.css';

class StartGame extends PureComponent {

  showImage = () => {
    const { nextStep } = this.props;
    return (
      <div>
        <img src={image1} border="0" useMap="#image1" alt="image1" width="100%" />
        <map name="image1" id="image1">
          <area shape="rect" coords={calcCoords("140,340,280,420")} alt="image1" onClick={nextStep} />
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

export default StartGame;
