import { useState, useContext, useEffect } from 'react';
import Card from './shared/Card';
import Button from './shared/Button';
import RatingSelect from './RatingSelect';
import FeedbackContext from '../context/FeedbackContext';

const FeedbackForm = () => {
    const [text, setText] = useState('');
    const [rating, setRating] = useState(10);
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [message, setMessage] = useState('');

    const { addFeedback, feedbackEdit, updateFeedback } = useContext(FeedbackContext);

    useEffect(() => {
        if (feedbackEdit.edit === true) {
            setBtnDisabled(false);
            console.log(feedbackEdit);
            setText(feedbackEdit.item.text);
            setRating(feedbackEdit.item.rating);
        }
    }, [feedbackEdit]);

    const handleTextChange = (e) => {
        const text = e.target.value;
        if (text === '') {
            setBtnDisabled(true);
            setMessage(null);
        } else if (text !== '' && text.trim().length <= 10) {
            setMessage('Text must be at least 10 characters');
            setBtnDisabled(true);
        } else {
            setMessage(null);
            setBtnDisabled(false);
        }
        setText(text);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim().length > 10) {
            const newFeedBack = {
                text,
                rating
            };

            if (feedbackEdit === true) {
                updateFeedback(feedbackEdit.item.id, newFeedBack);
            } else {
                addFeedback(newFeedBack)
            }

            addFeedback(newFeedBack);
            setText('')
        }
    };

    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>How would you rate your services with us ?</h2>
                <RatingSelect select={(rating) => setRating(rating)} />
                <div className="input-group">
                    <input
                        type="text"
                        placeholder="Write a review"
                        onChange={handleTextChange}
                        value={text}
                    />
                    <Button type="submit" isDisabled={btnDisabled}>Send</Button>
                </div>
                {message && <div className='message'>{message}</div>}
            </form>
        </Card>
    );
};

export default FeedbackForm;