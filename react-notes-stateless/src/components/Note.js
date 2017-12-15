import React from 'react';

const Note = props => {
  let body = props.note.body;
  let date = props.note.updatedAt;

  if(body.length > 35) {
    body = body.substring(0, 35) + "...";
  }

  return (
    <div className={props.className + " large-12 columns note"} onClick={props.handler} >
      <b>{body}</b>
      <p>{date}</p>
    </div>
  )
};

export default Note;
