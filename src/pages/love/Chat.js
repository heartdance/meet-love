import React, {PureComponent} from 'react';
import { calcCoords, calcCoord } from './util';
import image1 from "./image/chat1.png";
import image2 from "./image/chat2.png";
import './index.css';

const top = calcCoord(120);
const left = calcCoord(75);
const width = calcCoord(235);
const maxHeight = calcCoord(320);
class BeforeSleep extends PureComponent {

  state = {
    showMessages: [
      {dir: "right", msg: "😞..."},
      {dir: "left", msg: "😜"},
      {dir: "left", msg: "👀"},
      {dir: "right", msg: "😑"},
      {dir: "right", msg: "👩"},
      {dir: "left", msg: "🤭"},
      {dir: "left", msg: "❌❌❌❌❌"},
      {dir: "right", msg: "😄"},
      {dir: "left", msg: "😎"},
      {dir: "right", msg: "😂"},
      {dir: "left", msg: "🔪🔪"},
      {dir: "right", msg: "🌙"},
      {dir: "left", msg: "🌙"},
      {dir: "left", msg: "❗"},
      {dir: "left", msg: "❤😉"},
      {dir: "right", msg: "😂(😮)"},
      {dir: "right", msg: "🌙"},
      {dir: "left", msg: "🙄"},
      {dir: "right", msg: "(...)"},
    ],
    showCount: 1,
  }

  componentDidMount() {
    this.delayShow();
  }

  delayShow = () => {
    setTimeout(() => {
      const { showCount, showMessages } = this.state;
      const showCountIncre = showCount + 1;
      this.setState({
        showCount: showCountIncre,
      }, () => {
        const mc = document.getElementById("messageContainer");
        mc.scrollTo(0, mc.scrollHeight)
      })
      if (showCountIncre < showMessages.length) {
        this.delayShow();
      }
    }, 1500)
  }

  showImage = () => {
    const { type, nextStep } = this.props;
    const { showMessages, showCount } = this.state;
    return (
      <div>
        <img src={type === 1 ? image1 : image2} border="0" useMap="#image2" alt="image2" width="100%" />
        <map name="image2" id="image2">
          <area
            shape="rect"
            coords={calcCoords("75,75,110,110")}
            alt="image2"
            onClick={showCount >= showMessages.length ? nextStep : () => {}}
          />
        </map>
      </div>
    )
  }

  showChat = () => {
    const { showMessages, showCount } = this.state;
    return (
      <div id="messageContainer" style={{ width, position: 'absolute', top, left, height: maxHeight, overflowY: 'auto' }}>
        {showMessages.map((message, index) => {
          if (showCount <= index) {
            return null;
          }
          const { dir, msg } = message;
          return (
            <div
              style={{
                position: 'absolute',
                marginTop: 40 * index,
                backgroundColor: '#8BC34A',
                borderRadius: 4,
                display: 'inline-block',
                padding: '5px 10px',
                [dir]: 0,
              }}
            >
              {msg}
            </div>
          )
        })}
      </div>
    )
  }

  render() {

    return (
      <div>
        {this.showImage()}
        {this.showChat()}
      </div>
    )
  }
}

export default BeforeSleep;
