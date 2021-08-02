import React from "react";
import Dialog from "@material-ui/core/Dialog";
import FormPage from './formpage.component' ;

const Pop = ({ open, handleClose }) => {
  return (
    // props received from App.js
    <Dialog open={open} fullScreen={true} onClose={handleClose}>
      <FormPage handleClose={handleClose} />
    </Dialog>
  );
};

export default Pop;