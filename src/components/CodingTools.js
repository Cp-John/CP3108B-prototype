import React from 'react';
import { Link } from 'react-router-dom';
import { Button, ButtonGroup, Checkbox, Divider, FormControl, FormControlLabel, FormGroup, FormLabel, InputLabel, MenuItem, Select, Switch, SwipeableDrawer, TextField, Typography } from '@material-ui/core';


const ITEM_HEIGHT = 48;

function CodingTools(props) {
    const [state, setState] = React.useState({
	checked: !props.autoRun, //The setting inverses
	openMore: false,
	timeout: props.timeout,
	sessionCode: null,
	chapter: props.chapter
    });

    const [libraries, setLibraries] = React.useState({
	runes: props.libraries.runes,
	curves: props.libraries.curves,
	sounds: props.libraries.sounds,
	binaryTrees: props.libraries.binaryTrees
    });

    const handleChangeLibraries = name => event => {
	const flag = event.target.checked
	setLibraries({ ...libraries, [name]: flag });
	props.changeLibraries(name, flag);
    };

    const handleChangeAuto = e => {
	setState({
	    checked: e.target.checked,
	    openMore: state.openMore,
	    timeout: state.timeout,
	    sessionCode: state.sessionCode,
	    chapter: state.chapter
	});
    };

    const handleClickMore = event => {
	setState({
	    checked: state.checked,
	    openMore: event.currentTarget,
	    timeout: state.timeout,
	    sessionCode: state.sessionCode,
	    chapter: state.chapter
	});
    };

    const handleCloseMore = () => {
	setState({
	    checked: state.checked,
	    openMore: null,
	    timeout: state.timeout,
	    sessionCode: state.sessionCode,
	    chapter: state.chapter
	});
    };

    const toggleDrawer = open => event => {
	if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
	    return;
	}
	setState({
	    checked: state.checked,
	    openMore: open,
	    timeout: state.timeout,
	    sessionCode: state.sessionCode,
	    chapter: state.chapter
	});
    };

    const handleChangeTimeout = event => {
	setState({
	    checked: state.checked,
	    openMore: state.openMore,
	    timeout: event.target.value,
	    sessionCode: state.sessionCode,
	    chapter: state.chapter
	});
	props.changeTimeout(state.timeout);
    };

    const handleChangeSession = event => {
	setState({
	    checked: state.checked,
	    openMore: state.openMore,
	    timeout: state.timeout,
	    sessionCode: event.target.value,
	    chapter: state.chapter
	});
    };

    const handleChangeChapter = event => {
	setState({
	    checked: state.checked,
	    openMore: state.openMore,
	    timeout: state.timeout,
	    sessionCode: state.sessionCode,
	    chapter: event.target.value
	});
	props.changeChapter(state.chapter);
    }

    return (
        <React.Fragment>
	    <br />
	    <FormControlLabel
		control={
		    <Switch
			checked={state.checked}
			onChange={handleChangeAuto}
			value="checked"
			color="primary"
		    />
		}
		label="Auto"
	    />
	    <ButtonGroup color="primary" aria-label="outlined primary button group">
		<Button 
		    onClick={props.runCode}
		    size="small"
		>
		    Run
		</Button>
		<Button
		    onClick={props.evalREPL}
		    size="small"
		>
		    Eval
		</Button>
		<Button
		    onClick={props.clearREPL}
		    size="small"
		>
		    Clear
		</Button>
		{props.status !== "visitor"
		    ? (
			<Button
			    onClick={props.save}
			    size="small"
			>
			    Save
			</Button>
		    ) : null
		}
		<Button
		    size="small"
		    onClick={toggleDrawer(true)}
		>
		    ...
		</Button>
		<SwipeableDrawer
		    anchor="bottom"
		    open={state.openMore}
		    onClose={toggleDrawer(false)}
		    onOpen={toggleDrawer(true)}
		>
		    <div
			className="moreTools"
			role="presentation"
		    >
			<div>
			    <ButtonGroup color="primary" aria-label="outlined primary button group">
				<Button
				    onClick={props.share}
				>
				    Share
				</Button>
				<Typography>Timeout:</Typography>
				<TextField
				    margin="dense"
				    defaultValue={state.timeout}
				    value={state.timeout}
				    onChange={handleChangeTimeout}
				/>
			    </ButtonGroup>
			</div>
			<Divider />
			<div>
			    <Button
				onClick={props.startSession}
			    >
				Start a new session
			    </Button>
			    <TextField
				label="Enter session code ... "
				value={state.sessionCode}
				onChange={handleChangeSession}
			    />
			    <Button
				onClick={() => props.enterSession(state.sessionCode)}
			    >
				Enter
			    </Button>
			</div>
			<Divider />
			<div>
			    <FormControl
				fullWidth
			    >
				<InputLabel id="chapter-label">Source Chapter</InputLabel>
				<Select
				    labelId="chapter-label"
				    id="chapter"
				    value={state.chapter}
				    onChange={handleChangeChapter}
				>
				    <MenuItem value={1}>Chapter 1</MenuItem>
				    <MenuItem value={2}>Chapter 2</MenuItem>
				    <MenuItem value={3}>Chapter 3</MenuItem>
				    <MenuItem value={4}>Chapter 4</MenuItem>
				</Select>
			    </FormControl>
			</div>
			<div>
			    <FormControl
				fullWidth
				component="fieldset"
			    >
				<FormLabel component="legend">External libraries:</FormLabel>
				<FormGroup>
				    <FormControlLabel
					control={
					    <Checkbox
						checked={libraries.runes}
						onChange={handleChangeLibraries('runes')}
						value="runes"
					    />
					}
					label="Runes"
				    />
				    <FormControlLabel
					control={
					    <Checkbox
						checked={libraries.curves}
						onChange={handleChangeLibraries('curves')}
						value="curves"
					    />
					}
					label="Curves"
				    />
				    <FormControlLabel
					control={
					    <Checkbox
						checked={libraries.sounds}
						onChange={handleChangeLibraries('sounds')}
						value="sounds"
					    />
					}
					label="Sounds"
				    />
				    <FormControlLabel
					control={
					    <Checkbox
						checked={libraries.binaryTrees}
						onChange={handleChangeLibraries('binaryTrees')}
						value="binaryTrees"
					    />
					}
					label="Binary Trees"
				    />
				</FormGroup>
			    </FormControl>
			</div>
			<Divider />
			<div>
			    <Link to="/sample_programs">View some sample programs</Link>
			</div>
		    </div>
		</SwipeableDrawer>
	    </ButtonGroup>
	</React.Fragment>
    )
}

export default CodingTools
