import { createContext, useState } from 'react';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([{ id: 1, text: 'this item is from context' }]);
  return <FeedbackContext.Provider value={{feedback:feedback}}>{children}</FeedbackContext.Provider>;
};

export default FeedbackContext
