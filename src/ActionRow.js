import './ActionRow.css';

export default function ActionRow(props) {
  const id = props.id;
  const content = props.content;
  console.log(id, content);

  return (
    <>
      <div style={{padding: '3px'}}>
        <span>{id}</span>
        <span> </span>
        <span>{content['usage_category']}</span>
        <span> </span>
        <span>{content['def']['en']}</span>
      </div>
    </>
  );
}
