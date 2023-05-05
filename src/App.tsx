import React, { useState } from 'react';
import './App.css';
import { Accordion } from './components/Accordion/Accordion';
import { Rating, RatingValueType } from './components/Rating/Rating';
import { OnOff } from './components/OnOff/OnOff';
import { UncontroledAccordion } from './components/UncontroledAccordion/UncontroledAccordion';
import { UncontroledRating } from './components/UncontroledRating/UncontroledRating';
import { UncontrolledOnOff } from './components/UncontroledOnOff/UncontroledOnOff';

function App() {

  const [ratingValue, setRatingValue] = useState<RatingValueType>(0)

  const [acc, setAcc] = useState<boolean>(false)

  const [on, setOn] = useState<boolean>(false)

  return (
    <div >
      {/* <Rating value={ratingValue} onClick={setRatingValue} />
      <Accordion
        titleValue='menu'
        collapsed={acc}
        onChenge={() => { setAcc(!acc) }} /> */}

      <OnOff />

      <UncontrolledOnOff on={on} onChange={setOn} />
      <UncontroledAccordion titleValue={'menu'} />
      <UncontroledRating />
    </div>
  );
}
type PageTitleType = {
  title: string
}
const PageTitle = (props: PageTitleType) => {
  return (
    <h1> {props.title}</h1>
  )
}

export default App;
