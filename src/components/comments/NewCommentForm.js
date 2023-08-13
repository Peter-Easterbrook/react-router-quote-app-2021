import { useEffect, useRef } from 'react';
import useHttp from '../../hooks/use-http';
import { addComment } from '../../lib/api';
import Card from '../UI/Card';
import LoadingSpinner from '../UI/LoadingSpinner';
import classes from './NewCommentForm.module.css';

const NewCommentForm = (props) => {
  const commentTextRef = useRef();

  const { sendRequest, status, error } = useHttp(addComment);

  const { onAddedComment } = props;

  useEffect(() => {
    if (status === 'completed' && !error) {
      onAddedComment();
    }
  }, [status, error, onAddedComment]);

  const submitFormHandler = (event) => {
    event.preventDefault();

    const enteredText = commentTextRef.current.value;

    sendRequest({ commentData: { text: enteredText }, quoteId: props.quoteId });

    // Clear the textarea input after submission
    commentTextRef.current.value = '';
  };

  return (
    <Card>
      <form className={classes.form} onSubmit={submitFormHandler}>
        {status === 'pending' && (
          <div className='centered'>
            <LoadingSpinner />
          </div>
        )}
        <div className={classes.control} onSubmit={submitFormHandler}>
          <label htmlFor='comment'>Your Comment</label>
          <textarea
            id='comment'
            rows='5'
            ref={commentTextRef}
            pattern='^(?!\s*$).+'
            required
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button className='btn'>Add Comment</button>
        </div>
      </form>
    </Card>
  );
};

export default NewCommentForm;
