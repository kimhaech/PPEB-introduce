import React from 'react';
import Header from '../../components/Header';
import Introduce from './Students/Introduce';
import MakeChart from './Students/MakeChart';
import ShowMember from './Students/ShowMember';
import Buttons from './Students/Buttons';


const Members = () => {
  return (
    <div>
      <Header />
      <Introduce />
      <Buttons/>
      <MakeChart/>
      <ShowMember/>
    </div>
  )
};

export default Members;