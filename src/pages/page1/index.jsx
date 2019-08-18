import React from 'react';
import { Link } from 'react-router-dom';

const Page1 = () => (
  <div>
    <h1>Page 1</h1>
    <Link to="/page2">Go to Page 2</Link>
    <button type="button">A Very Cool Button</button>
  </div>
);

export default Page1;
