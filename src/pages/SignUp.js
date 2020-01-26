import React from 'react';
import { Button, TextField, Typography } from '@material-ui/core';

function SignUp() {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [name, setName] = React.useState('');

    const handleName = e => {
	setName(e.target.value);
    }

    const handleEmail = e => {
	setEmail(e.target.value);
    }

    const handlePassword = e => {
	setPassword(e.target.value);
    }

    const signUp = () => {
	//check correct or not: props.signUp(?) then sign in
	window.location.href = "/";
    }

    return (
	<React.Fragment>
	    <div style={{textAlign: 'left'}}>
		<br /><br /><br />
		<Typography variant="h3">Sign up:</Typography>
		<TextField
		    label="name"
		    value={name}
		    onChange={handleName}
		    fullWidth
		/>
		<TextField
		    label="email"
		    value={email}
		    onChange={handleEmail}
		    fullWidth
		/>
		<TextField
		    label="password"
		    value={password}
		    onChange={handlePassword}
		    type="password"
		    fullWidth
		/>
		<Button onClick={signUp}>Sign up</Button>
	    </div>
	</React.Fragment>
    )
}

export default SignUp;
