import classes from './HighlightedQuote.module.css';

const HighlightedQuote = ({ latin, text, author }) => {
  return (
    <figure className={classes.quote}>
      <p>{latin}</p>
      <p>{text}</p>
      <figcaption>{author}</figcaption>
    </figure>
  );
};

export default HighlightedQuote;
