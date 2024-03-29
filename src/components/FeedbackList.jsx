import { AnimatePresence, motion } from 'framer-motion';
import { useContext } from 'react';

import Spinner from './shared/Spinner';
import FeedbackItem from './FeedbackItem';
import FeedbackContext from '../context/FeedbackContext';

const FeedbackList = () => {
    const { feedback, handleDelete, isLoading } = useContext(FeedbackContext);

    if (!isLoading && (!feedback || feedback.length === 0)) {
        return <p>No Feedback Yet</p>;
    }
    if (!feedback || feedback.lenght === 0) {
        return <p>No Feedback Item</p>;
    }

    return isLoading ? <Spinner /> : (
        <div className='feeback-list'>
            <AnimatePresence>
                {feedback.map((item) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <FeedbackItem
                            key={item.id}
                            item={item}
                            handleDelete={handleDelete}
                        />
                    </motion.div>
                ))}
            </AnimatePresence>

        </div>
    );
};

export default FeedbackList;