import React from 'react';
import { Link } from 'react-router-dom';
import profile from '../assets/profile.png';

function Nav() {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'BOOKS',
    },
    {
      id: 2,
      path: '/category',
      text: 'CATEGORIES',
    },
  ];
  return (
    <div className="nav">
      <div className="navBar">
        <h1>BookStore CMS</h1>
        <ul>
          {links.map((link) => <li key={link.id} className="listing-books"><Link to={link.path}>{link.text}</Link></li>)}
        </ul>
      </div>
      <div className="profile">
        <img src={profile} alt="profile" />
      </div>
    </div>
  );
}

export default Nav;
