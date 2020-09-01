import React from "react";
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';

const RenderMsg = ({whatMsgToShow, handleClose, anchorEl}) => {

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
  
    

    let msg;
    if(whatMsgToShow === 1){
      msg = <Typography >Account was created.</Typography>;
    }  else if (whatMsgToShow === 2) {
      msg = <Typography>Account with this email already exists.</Typography>
    }
    else if (whatMsgToShow === 3) {
      msg = <Typography>Fields can´t be empty.</Typography>
    }
    else if (whatMsgToShow === 4) {
      msg = <Typography>Password doesn´t match.</Typography>
    }
    else {
      msg = <Typography>Something went wrong. try again later.</Typography>
    }

    return(
<Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        {msg}
        {/* className={classes.typography} */}
       </Popover> 
    );
};

export default RenderMsg;