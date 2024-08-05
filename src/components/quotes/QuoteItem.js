import { BiExpand } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import classes from './QuoteItem.module.css';

const QuoteItem = ({ latin, text, author, id }) => {
  return (
    <li className={classes.item}>
      <figure>
        <blockquote>
          <p>{latin}</p>
        </blockquote>
        <blockquote>
          <p>{text}</p>
        </blockquote>
        <figcaption>{author}</figcaption>
      </figure>
      <Link to={`/quotes/${id}`} className='btn-icon'>
        <BiExpand />
      </Link>
    </li>
  );
};

export default QuoteItem;
