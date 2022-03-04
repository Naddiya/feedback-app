import { createContext, useState } from "react";

const FeedbackContext = createContext();

export const FeebackProvider = ({ children }) => {
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: 'this is from context',
            rating: 10
        }
    ]);
    return <FeedbackContext.Provider value={
        feedback
    }>
        {children}
    </FeedbackContext.Provider>;
};

export default FeedbackContext;