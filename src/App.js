// import logo from './logo.svg';
import './App.css';
import ListBox from './ListBox.js';
import Bundle from './Bundle.js';
import { useState } from 'react';


export default function App() {
  const [bundle, setBundle] = useState(Bundle());
  const dictionary = bundle['data']

  return (
    <>
      Hello World
      <ListBox dictionary={dictionary} />
    </>
  );
}
