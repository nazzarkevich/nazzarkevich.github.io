import React from 'react';
import { Link } from 'react-router-dom';

import './routes.css';

import * as ROUTES from './constants';

const Navigation = () => (
  <div>
    <ul className="nav">
      <li> <Link to={ROUTES.LANDING}>Venues search</Link> </li>
      <li> <Link to={ROUTES.SIGN_UP}>Sign Up</Link> </li>
    </ul>
  </div>
);

export default Navigation;