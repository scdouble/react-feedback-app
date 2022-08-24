import React from 'react';
import Card from './shared/Card';
import { useState } from 'react';
import Button from './shared/Button';

export default function FeedbackForm() {
  const [text, setText] = useState('');
  const [btnDisable, setBtnDisable] = useState(true);
  const [message, setMessage] = useState('');

  const handleTextChange = (e) => {
    if (text === '') {
      setBtnDisable(true);
      setMessage(null);
    } else if (text !== '' && text.trim().length <= 10) {
      setBtnDisable(true);
      setMessage('Text must be at least 10 characters');
    } else {
      setMessage(null)
      setBtnDisable(false)
    }
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
          <Button type="submit" isDisable={btnDisable}>
            Send
          </Button>
        </div>

        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}
