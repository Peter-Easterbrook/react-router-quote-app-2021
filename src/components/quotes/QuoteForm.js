import { Fragment, useState } from 'react';
import Card from '../UI/Card';
import LoadingSpinner from '../UI/LoadingSpinner';
import classes from './QuoteForm.module.css';

const QuoteForm = (props) => {
  const [isEntering, setIsEntering] = useState(false);
  const [author, setAuthor] = useState('');
  const [text, setText] = useState('');

  function submitFormHandler(event) {
    event.preventDefault();

    if (author.trim() === '' || text.trim() === '') {
      return;
    }

    props.onAddQuote({ author, text });

    setAuthor('');
    setText('');
  }

  const loadingSpinner = props.isLoading && <LoadingSpinner />;

  return (
    <Fragment>
      <Card>
        <form className={classes.form} onSubmit={submitFormHandler}>
          {loadingSpinner}

          <div className={classes.control}>
            <label htmlFor='author'>Author</label>
            <input
              type='text'
              id='author'
              value={author}
              onChange={(event) => setAuthor(event.target.value)}
              pattern='^[A-Za-z]+(\s[A-Za-z]+){0,2}$'
              required
            />
          </div>
          <div className={classes.control}>
            <label htmlFor='text'>Text</label>
            <textarea
              id='text'
              rows='5'
              value={text}
              onChange={(event) => setText(event.target.value)}
              required
            ></textarea>
          </div>
          <div className={classes.actions}>
            <button onClick={() => setIsEntering(false)} className='btn'>
              Add Quote
            </button>
          </div>
        </form>
      </Card>
    </Fragment>
  );
};

export default QuoteForm;
