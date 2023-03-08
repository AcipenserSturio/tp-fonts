export default function TextInput(props) {
  const sampletext = props.sampletext;
  const onchange = props.onchange;

  return (
    <div className="textInputWrapper">
      <input className="textInput"
        placeholder="nimi mute"
        value={sampletext}
        onChange={onchange}
        autocapitalize="none"
        autocomplete="off"
        autocorrect="off"
        spellcheck="false"
      />
    </div>
  );
}

