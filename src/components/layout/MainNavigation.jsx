import { motion } from 'framer-motion';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './MainNavigation.module.css';

const LINKS = [
  {
    slug: 'quotes',
    label: 'All Quotes',
    to: '/quotes',
  },
  {
    slug: 'new-quote',
    label: 'Add Quote',
    to: '/new-quote',
  },
  // {
  //   slug: 'login',
  //   label: 'Login',
  //   href: '/login',
  // },
];

const MainNavigation = () => {
  const [hoveredNavItem, setHoveredNavItem] = useState(null);

  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <h1>"Great Quotes"</h1>
      </div>

      <nav className={classes.nav} onMouseLeave={() => setHoveredNavItem(null)}>
        <ul>
          {LINKS.map(({ slug, label, to }) => (
            <li
              key={slug}
              style={{
                zIndex: hoveredNavItem === slug ? 1 : 2,
              }}
            >
              {hoveredNavItem === slug && (
                <motion.div
                  layoutId='hovered'
                  className={classes.hovered}
                  initial={{
                    borderRadius: 32,
                  }}
                />
              )}

              <NavLink to={to} onMouseEnter={() => setHoveredNavItem(slug)}>
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
