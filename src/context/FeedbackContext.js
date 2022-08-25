import { createContext, useState, useEffect } from 'react';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [feedback, setFeedback] = useState([]);

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  useEffect(() => {
    fetchFeedback();
  }, []);

  // Fetch feedback
  const fetchFeedback = async () => {
    const response = await fetch(`/feedback?_sort=id&_order=desc`);
    const data = await response.json();
    setFeedback(data);
    setIsLoading(false);
  };

  const deleteFeedback = (id) => {
    //  console.log("app", id)
    if (window.confirm('Are you sure you want to delete?')) {
      setFeedback(
        feedback.filter((item) => {
          return item.id !== id;
        }),
      );
    }
  };

  // Feedback更新
  const updateFeedback = (id, updItem) => {
    setFeedback(
      feedback.map((item) => {
        return item.id === id ? { ...item, ...updItem } : item;
      }),
    );
  };

  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  const addFeedback = async (newFeedback) => {
    const response = await fetch('/feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newFeedback),
    });

    const data = await response.json();

    setFeedback([data, ...feedback]);
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback: feedback,
        deleteFeedback,
        addFeedback,
        editFeedback, // Function
        feedbackEdit, // State
        updateFeedback,
        isLoading,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
