// import './ListBox.css';
import ActionRow from './ActionRow.js';

export default function ListBox(props) {
  const dictionary = props.dictionary;
  const sampletext = props.sampletext;

  return (
    <div className="listBox">
      {
        Object.keys(dictionary).map((key, index) => (
          <ActionRow key={key} id={key} content={dictionary[key]} sampletext={sampletext}/>
        ))
      }
    </div>
  );
}
