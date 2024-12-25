import React from 'react';
import '../Outbox.css'; // Import the CSS for Outbox component

export default function Outbox(props) {
  return (
    <div className="outbox-container">
        <h3 className="outbox-title">{props.heading}</h3>
        <div className="mb-3">
          <textarea className="outbox-textarea" value={props.output} id="outbox" rows="8" readOnly></textarea>
          <button className="cast-spell-button" onClick={props.onClear}>
                    Clear
                </button>
        </div>
    </div>
  );
}
