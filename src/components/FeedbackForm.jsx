import React from 'react';
import Card from './shared/Card';
import { useState } from 'react';

export default function FeedbackForm() {
  const [text, setText] = useState('');

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  return (
    <Card>
      <form action="">
        <h2>How would you rate your service with us?</h2>
        <div className="input-group">
          <input
            type="text"
            placeholder="Write a review"
            onChange={handleTextChange}
            value={text}
          />
          <button type="submit">Send</button>
        </div>
      </form>
    </Card>
  );
}
