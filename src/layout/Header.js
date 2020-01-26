import React from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { AppBar, Button, IconButton, Menu, MenuItem, Toolbar, Typography } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const ITEM_HEIGHT = 48;

function Header(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = event => {
	setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
	setAnchorEl(null);
    };

    return (
        <React.Fragment>
	   <AppBar>
		<Toolbar>
		    <Typography edge="start">
			Source Academy
		    </Typography>
		    {props.status==="visitor"
			? (
			    <Link to="/login">
				<Button color="inherit">Sign in</Button>
			    </Link>
			) : null
		    }
		    <div edge="end">
			<IconButton
                            aria-label="more"
                            aria-controls="menu"
                            aria-haspopup="true"
                            onClick={handleClick}
			>
                            <MoreVertIcon />
                        </IconButton>
			<Menu
                            id="menu"
                            anchorEl={anchorEl}
                            keepMounted
                            onClose={handleClose}
			    open={open}
                            PaperProps={{
                        	style: {
                        	    maxHeight: ITEM_HEIGHT * 3.5,
                                    width: 200,
                            	}
                            }}
			>
			    <MenuItem
				key="Mainpage"
				onClick={handleClose}
			    >
				<Link to="/">Playground</Link>
			    </MenuItem>
			    {props.status==="visitor"
				? (
				    <MenuItem
                                        key="Sign Up"
                                        onClick={handleClose}
				    >
                                        <Link to="/sign_up">Sign up</Link>
                                    </MenuItem>
				) : (
				    <React.Fragment>
                                        <MenuItem
                                            key="Manage courses"
                                            onClick={handleClose}
					>
                                            <Link to={`/courses/${props.user.id}`}>Manage courses</Link>
                                        </MenuItem>
                                        <MenuItem
                                            key="My programs"
                                            onClick={handleClose}
					>
                                            <Link to={`/programs/${props.user.id}`}>My programs</Link>
                                        </MenuItem>
                                    </React.Fragment>
				)
			    }
			    <MenuItem
                                key="Textbook"
                                onClick={handleClose}
			    >
                                <a href="https://sicp.comp.nus.edu.sg/" target="_blank">Textbook</a>
                            </MenuItem>
			    <MenuItem
                            	key="Customize"
                            	onClick={handleClose}
			    >
                                <Link to="/customize">Customize</Link>
                            </MenuItem>
			    <MenuItem
                            	key="About"
                            	onClick={handleClose}
			    >
                                <Link to="/about">About</Link>
                            </MenuItem>
			    <MenuItem
                            	key="Help"
                            	onClick={handleClose}
			    >
                                <Link to="/help">Help</Link>
                            </MenuItem>
			</Menu>
		    </div>
		</Toolbar>
	    </AppBar>
	</React.Fragment>
    )
}

export default Header


/*
{this.props.status==="visitor"
				? (
				    <MenuItem
                                        key="Sign Up"
                                        onClick={handleClose} >
                                        <Link to="/sign_up">Sign up</Link>
                                    </MenuItem>
				) : (
				    <React.Fragment>
                                        <MenuItem
                                            key="Manage courses"
                                            onClick={handleClose} >
                                            <Link to={`/courses/${this.props.user.id}`}>Manage courses</Link>
                                        </MenuItem>
                                        <MenuItem
                                            key="My programs"
                                            onClick={handleClose} >
                                            <Link to={`/programs/${this.props.user.id}`}>My programs</Link>
                                        </MenuItem>
                                    </React.Fragment>
				)
			    }
*/
