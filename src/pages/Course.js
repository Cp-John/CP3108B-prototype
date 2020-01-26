import React from 'react';
import { Button, Divider, Grid, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

function Course(props) {
    function studentCourse() {
	return (
	    <React.Fragment>
		<br /><br /><br />
		<Typography variant="h4">{props.course.name}</Typography>
		<Typography variant="h6">{props.course.info}</Typography>
		<Divider />
		<Grid container spacing={1}>
		    <Grid container item xs={12} spacing={3}>
			<Grid item xs={6}>
			    <a href={props.course.notifications} target="_blank"><Button>Notifications</Button></a>
			</Grid>
			<Grid item xs={6}>
			    <a href={props.course.forum} target="_blank"><Button>Forum</Button></a>
			</Grid>
		    </Grid>
		    <Grid container item xs={12} spacing={3}>
			<Grid item xs={6}>
			    <Button>Materials</Button>{/*TODO*/}
			</Grid>
			<Grid item xs={6}>
			    <Link to="/grade"><Button>Grade</Button></Link>
			</Grid>
		    </Grid>
		</Grid>
		<Divider />
		<ul>
		    {props.course.components.map(x => (
			<Link to={`/course/${x.name}`}><li>{x.name}</li></Link>
		    ))}
		</ul>
	    </React.Fragment>
	);
    }

    function tutorCourse() {/*TODO: can grade*/
    }

    function administratorCourse() {/*TODO: can change all the settings*/
    }

    return (
	<React.Fragment>
	    <div style={{textAlign: 'left'}}>
		{props.course.status==="student" ? studentCourse()
		: props.course.status==="tutor" ? tutorCourse()
		: administratorCourse()
		}
	    </div>
	</React.Fragment>
    )
}

export default Course;
