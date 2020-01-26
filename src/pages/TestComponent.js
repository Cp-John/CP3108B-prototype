import React from 'react';
import { Button, Divider, Grid, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

function TestComponent(props) {
    function studentComponent() {
	return (
	    <React.Fragment>
		<br /><br /><br />
		
	    </React.Fragment>
	);
    } /*TODO*/
    function tutorComponent() {
    } /*TODO*/
    function administratorComponent() {
    } /*TODO*/

    return (
	<React.Fragment>
	    <br /><br /><br />
	    <div style={{textAlign: 'left'}}>
		<Typography variant="h4">{props.component.name}</Typography>
		{props.status==="student" ? studentComponent()
		: props.status==="tutor" ? tutorComponent()
		: administratorComponent()
		}
	    </div>
	</React.Fragment>
    )
}

export default TestComponent;
