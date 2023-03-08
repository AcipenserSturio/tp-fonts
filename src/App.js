// import logo from './logo.svg';
// import './App.css';
import TextInput from './TextInput.js';
import ListBox from './ListBox.js';
import Bundle from './Bundle.js';
import all_valid_fonts from './FontLoader.js';
import { useState, useEffect } from 'react';


export default function App() {
  const [bundle, setBundle] = useState(Bundle());
  const [fontfaces, setFontfaces] = useState([]);
  const [sampletext, setSampletext] = useState("tomo tawa sewi mi li jo e kala linja mute mute");
  const dictionary = bundle['data']
  const fonts = bundle['fonts']
  console.log("fonts:")
  console.log(Object.keys(fonts).length)

  useEffect(() => {
    all_valid_fonts(fonts).then(valid_fonts => {
      console.log(valid_fonts);
      setFontfaces(valid_fonts);
    })
  }, []);

  return (
    <>
      <TextInput sampletext={sampletext} onchange={(e) => setSampletext(e.target.value)}/>
      <ListBox dictionary={fontfaces} sampletext={sampletext}/>
    </>
  );
}
