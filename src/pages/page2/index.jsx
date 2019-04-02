import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const Page1 = () => (
  <div className="page2">
    <h1 className="page2__heading">Page 2</h1>
    <Link to="/">Go to Page 1</Link>
  </div>
);

export default Page1;
