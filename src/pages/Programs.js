import React from 'react';
import { Button, Typography } from '@material-ui/core'

function Programs(props) {
  return (
    <React.Fragment>
      <div style={{textAlign: 'left'}}>
	<br /><br /><br />
        <Typography variant="h5">My programs</Typography>
	<Button>Add</Button>{/*TODO*/}
        <ul>{/*TODO: props.user.programs(?).map*/}
	    <li><Button>{/*TODO: onClick={go to playground with code, etc.}*/}example1</Button></li>
	</ul>
      </div>
    </React.Fragment>
  )
}

export default Programs;
