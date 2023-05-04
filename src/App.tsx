import React from 'react';
import './App.css';
import { Accordion } from './components/Accordion/Accordion';
import { Rating } from './components/Accordion/Rating';

function App() {
  return (
    <div >

      <input />
      <input />

      <PageTitle title={'This is app component'} />
      <PageTitle title={'This is props'} />
      <Rating value={2} />
      <Accordion titleValue={'Menu'} collapsed={false} />
      <Accordion titleValue={'Friend'} collapsed={false} />
      <Rating value={4} />

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
