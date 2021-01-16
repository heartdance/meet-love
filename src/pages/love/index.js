import React, {PureComponent} from 'react';
import StartGame from "./StartGame";
import BeforeSleep from "./BeforeSleep";
import Wx from "./Wx";
import Chat from "./Chat";
import BeforeSleep2 from "./BeforeSleep2";
import GoHer from "./GoHer";
import Drive from "./Drive";
import MeetHer from "./MeetHer";
import './index.css';

class Love extends PureComponent {

  state = {
    step: 1,
  }

  setStep = step => {
    this.setState({
      step,
    })
  }

  showImage = () => {
    const { step } = this.state;
    if (step === 1) {
      return <StartGame nextStep={() => this.setStep(2)} />
    }
    if (step === 2) {
      return <BeforeSleep nextStep={() => this.setStep(3)} />
    }
    if (step === 3) {
      return <Wx type={1} nextStep={() => this.setStep(5)} />
    }
    if (step === 4) {
      return <Wx type={2} nextStep={() => this.setStep(6)} />
    }
    if (step === 5) {
      return <Chat type={1} nextStep={() => this.setStep(6)} />
    }
    if (step === 6) {
      return <BeforeSleep2 nextStep={() => this.setStep(7)} />
    }
    if (step === 7) {
      return <GoHer nextStep={() => this.setStep(8)} />
    }
    if (step === 8) {
      return <Drive nextStep={() => this.setStep(9)} />
    }
    if (step === 9) {
      return <MeetHer nextStep={() => this.setStep(10)} />
    }
    // if (step === 6) {
    //   return <Chat type={2} nextStep={() => this.setStep(5)} />
    // }
    return <div>???</div>;
  }

  render() {

    return (
      <div>
        {this.showImage()}
      </div>
    )
  }
}

export default Love;
