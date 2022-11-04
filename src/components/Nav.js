import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Books',
    },
    {
      id: 2,
      path: '/category',
      text: 'Category',
    },
  ];
  return (
    <div>
      <ul>
        {links.map((link) => <li key={link.id}><Link to={link.path}>{link.text}</Link></li>)}
      </ul>
    </div>
  );
}

export default Nav;
