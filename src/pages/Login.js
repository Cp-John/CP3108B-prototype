import React from 'react';
import { Button, TextField, Typography } from '@material-ui/core';

function Login() {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleEmail = e => {
	setEmail(e.target.value);
    }

    const handlePassword = e => {
	setPassword(e.target.value);
    }

    const signIn = () => {
	//check match or not and change the status & user: props.changeUser(?)
	window.location.href = "/";
    }

    return (
	<React.Fragment>
	    <div style={{textAlign: 'left'}}>
		<br /><br /><br />
		<Typography variant="h3">Sign in:</Typography>
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
		<Button onClick={signIn}>Sign in</Button>
	    </div>
	</React.Fragment>
    )
}

export default Login;
