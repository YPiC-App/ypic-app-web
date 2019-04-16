import React from 'react';
import { ToastContainer } from 'react-toastify';
import './styles.scss';

export { toast } from 'react-toastify';

const Toaster = () => (
  <ToastContainer
    autoClose={8000}
    position="top-center"
    toastClassName="toaster"
  />
);

export default Toaster;
