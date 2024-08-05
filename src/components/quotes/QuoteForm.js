import { Fragment, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../UI/Card';
import LoadingSpinner from '../UI/LoadingSpinner';
import classes from './QuoteForm.module.css';

const QuoteForm = ({ isLoading, onAddQuote }) => {
  const [author, setAuthor] = useState('');
  const [text, setText] = useState('');
  const [latin, setLatin] = useState('');

  const navigate = useNavigate();

  function submitFormHandler(event) {
    event.preventDefault();

    if (author.trim() === '' || text.trim() === '') {
      return;
    }

    onAddQuote({ author, latin, text });

    setAuthor('');
    setLatin('');
    setText('');

    navigate('/quotes');
  }

  const loadingSpinner = isLoading && <LoadingSpinner />;

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
            <label htmlFor='latin'>Latin</label>
            <textarea
              type='text'
              id='latin'
              value={latin}
              rows='3'
              onChange={(event) => setLatin(event.target.value)}
              required
            />
          </div>
          <div className={classes.control}>
            <label htmlFor='text'>Text</label>
            <textarea
              type='text'
              id='text'
              value={text}
              rows='3'
              onChange={(event) => setText(event.target.value)}
              required
            />
          </div>

          <div className={classes.actions}>
            <button className='btn'>Add Quote</button>
          </div>
        </form>
      </Card>
    </Fragment>
  );
};

export default QuoteForm;
