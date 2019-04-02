import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material/react-button';

const Page1 = () => (
  <div>
    <h1>Page 1</h1>
    <Link to="/page2">Go to Page 2</Link>
    <Button unelevated>A Very Cool Button</Button>
  </div>
);

export default Page1;
