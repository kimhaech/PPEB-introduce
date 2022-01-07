import { Component, React } from 'react';
import Header from '../../../Header';
import IntroduceGraduate from './IntroduceGraduate';
import ShowGraduate from './ShowGraduate';
import Buttons from '../Buttons';
import Band from './Band';

class Graduates extends Component {

  render() {
    return(
      <div>
        <Header></Header>
        <IntroduceGraduate></IntroduceGraduate>
        <Buttons></Buttons>
        <Band></Band>
        <ShowGraduate></ShowGraduate>
      </div>
    )
  }
}
export default Graduates;
