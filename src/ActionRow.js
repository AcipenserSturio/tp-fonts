// import './ActionRow.css';

export default function ActionRow(props) {
  const id = props.id;
  const content = props.content;
  console.log(id, content);

  return (
    <>
      <div style={{padding: '3px', fontFamily: content['filename'].split('.')[0]}}>
        <span>{id}</span>
        <span> </span>
        <span>{content['name_short']}</span>
        <span> </span>
        <span>{content['creator']}</span>
      </div>
    </>
  );
}
