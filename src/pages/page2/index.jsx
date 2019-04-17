import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'components/button';

import './styles.scss';

const Page1 = () => (
  <div className="page2">
    <h1 className="page2__heading">Page 2</h1>
    <Link to="/profile">Go to Page 1</Link>
    <Button outlined>Another Cool Button</Button>
  </div>
);

export default Page1;
