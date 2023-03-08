// import './ActionRow.css';

export default function ActionRow(props) {
  const id = props.id;
  const content = props.content;
  const sampletext = props.sampletext;
  const fontface = content['filename'].split('.')[0];

  return (
    <div className="actionRow">
      <span>{id}</span>
      <span> </span>
      <span>{content['name_short']}</span>
      <br />
      <span> by </span>
      <span>{content['creator']}</span>
      <br />
      <span style={{fontFamily: fontface}}>{sampletext}</span>
    </div>
  );
}
