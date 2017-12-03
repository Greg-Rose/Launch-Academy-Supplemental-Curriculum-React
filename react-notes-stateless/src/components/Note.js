import React from 'react';

const Note = props => {
  let body = props.note.body;
  let date = props.note.updatedAt;

  return (
    <div className="large-12 columns note">
      <b>{body}</b>
      <p>{date}</p>
    </div>
  )
};

export default Note;
