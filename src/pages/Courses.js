import React from 'react';
import { Button, Divider, Typography } from '@material-ui/core'

function Courses(props) {
    const navToCourse = course => {
	props.changeCourse(course);
	window.location.href = "/course";
    }

    return (
	<React.Fragment>
	    <div style={{textAlign: 'left'}}>
		<br /><br /><br />
		<Typography variant="h4">My courses</Typography>
		<Typography variant="h6">As a student:</Typography>
		<ul>
		    {props.user.courses.filter(x => x.status==="student").map(x => (
			<li><Button onClick={() => navToCourse(x)}>{x.name}</Button></li>
		    ))}
	    	</ul>
		<Divider />
		<Typography variant="h6">As a tutor:</Typography>
		<ul>
		    {props.user.courses.filter(x => x.status==="tutor").map(x => (
			<li><Button onClick={() => navToCourse(x)}>{x.name}</Button></li>
		    ))}
		</ul>
		<Divider />
		<Typography variant="h6">As an administrator:</Typography>
		<Button>Create</Button>{/*TODO, I'm not sure, may need to manually give consent*/}
		<ul>
		    {props.user.courses.filter(x => x.status==="administrator").map(x => (
			<li><Button onClick={() => navToCourse(x)}>{x.name}</Button></li>
		    ))}
		</ul>
	    </div>
	</React.Fragment>
    )
}

export default Courses;
