import React from 'react';
import { Button, Typography } from '@material-ui/core'

function Samples() {
  return (
    <React.Fragment>
      <div style={{textAlign: 'left'}}>
	<br /><br /><br />
        <Typography variant="h5">Sample programs</Typography>
        <ul>{/*TODO: Here need to figure out some*/}
	    <li><Button>{/*TODO: onClick={go to playground with code, etc.}*/}example1</Button></li>
	</ul>
      </div>
    </React.Fragment>
  )
}

export default Samples;
