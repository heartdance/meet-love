import React, {PureComponent} from 'react';
import Light from 'component/Light'
import { calcCoords } from './util';
import image1 from "./image/map.png";
import './index.css';

class BeforeSleep extends PureComponent {

  state = {
    step: 1,
  }

  componentDidMount() {
    this.light.toLight();
  }

  showImage = () => {
    const { nextStep } = this.props;
    return (
      <div>
        <img src={image1} border="0" useMap="#image1" alt="image1" width="100%" />
        <map name="image1" id="image1">
          <area shape="rect" coords={calcCoords("110,440,260,500")} alt="image1" onClick={nextStep} />
        </map>
      </div>
    )
  }

  render() {

    return (
      <div>
        {this.showImage()}
        <Light
          duration={3000}
          onRef={ref => this.light = ref}
        />
      </div>
    )
  }
}

export default BeforeSleep;
