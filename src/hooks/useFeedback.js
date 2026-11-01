import { createContext, useContext, useState, useEffect } from 'react';

const FeedbackContext = createContext();

export function FeedbackProvider({ children }) {
  const [message, setMessage] = useState(null);

  useEffect(() => {
    if (!message) return;
    const id = setTimeout(() => setMessage(null), 2000);
    return () => clearTimeout(id);
  }, [message]);

  const showMessage = (msg) => setMessage(msg);

  return (
    <FeedbackContext.Provider value={{ message, showMessage }}>
      {children}
    </FeedbackContext.Provider>
  );
}

export function useFeedback() {
  return useContext(FeedbackContext);
}