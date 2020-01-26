import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Box, Button, List, ListItem, ListItemText, Paper, Tab, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tabs, TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
	<Typography
	    component="div"
	    role="tabpanel"
	    hidden={value !== index}
	    id={`brief-tabpanel-${index}`}
	    aria-labelledby={`brief-tab-${index}`}
	    {...other}
	>
	    {value === index && <Box p={5}>{children}</Box>}
	</Typography>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `brief-tab-${index}`,
    'aria-controls': `brief-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
    root: {
	width: '100%',
	position: 'relative',
	overflow: 'auto',
	maxHeight: 260,
    }
}));

function BriefingArea(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const [open, setOpen] = React.useState(false);
    const [command, setCommand] = React.useState('');
    const [expected, setExpected] = React.useState('');
    const [testcases, setTestcases] = React.useState(props.testcases);

    const handleChange = (event, newValue) => {
	setValue(newValue);
    };

    const showForm = flag => {
	setOpen(flag);
    }

    const show = func => {
	//show a func in the library with a certain format
    } //TODO

    const handleCommand = event => {
	setCommand(event.target.value);
    }

    const handleExpected = event => {
	setExpected(event.target.value);
    }

    const submit = () => {
	props.addTestCase(command, expected);
	setTestcases(testcases.push({
	    command: command,
	    expected: expected
	}));
	showForm(false);
    } //TODO: this is not working as expected

    return (
        <React.Fragment>
	    <Tabs value={value} onChange={handleChange} aria-label="brief tabs">
		<Tab label="brief" {...a11yProps(0)} />
		<Tab label="lib" {...a11yProps(1)} />
		{props.chapter < 3
		    ? (<Tab label="substitutor" {...a11yProps(2)} />)
		    : (<Tab label="env" {...a11yProps(2)} />)
		}
		<Tab label="testcases" {...a11yProps(3)} />
		{props.status === "student"
		    ? (<Tab label="grade" {...a11yProps(4)} />)
		    : null
		}
	    </Tabs>
	    <Box className={classes.root}>
		<TabPanel value={value} index={0}>
		    <Typography align="left">
			Welcome to the Source Academy playground!
		    </Typography>
		    <Typography align="left">
			The language Source is the official language of the textbook <a href="https://sicp.comp.nus.edu.sg/" target="_blank"><i>Structure and Interpretation of Computer Programs, JavaScript Adaptation</i></a>. You have never heard of Source? No worries! It was invented just for the purpose of the book. Source is a sublanguage of ECMAScript 2016 (7th edition) and defined in <a href="https://sicp.comp.nus.edu.sg/source/" target="_blank">the documents titled "Source §x"</a>, where x refers to the respective textbook chapter. For example, Source §3 is suitable for textbook chapter 3 and the preceeding chapters.
		    </Typography>
		    <Typography align="left">
			The playground comes with an editor and a REPL, on the left and right of the screen, respectively. You may customise the layout of the playground by clicking and dragging on the right border of the editor, or the top border of the REPL.
		    </Typography>
		</TabPanel>
		<TabPanel value={value} index={1}>
		    <List dense>
			<ListItem>
			    In-built functions:
			    <List>
				<ListItem>display.....................</ListItem>
				<ListItem>error.....................</ListItem>
				{/* TODO:still need to figure out how to access the library functions */}
			    </List>
			</ListItem>
		    </List>
		</TabPanel>
		<TabPanel value={value} index={2}>
		    {props.chapter < 3 ? props.substitutor() : props.visualizer()}
		</TabPanel>
		<TabPanel value={value} index={3}>
		    <Button onClick={props.runTestCases}>Run all test cases</Button>
		    <Button onClick={() => showForm(true)}>+</Button>
		    {open
			? (
			    <div>
				<TextField
				    label="Command:"
				    value={command}
				    onChange={handleCommand}
				    fullWidth
				/>
				<TextField
				    label="Expected result:"
				    value={expected}
				    onChange={handleExpected}
				    fullWidth
				/>
				<Button onClick={submit}>OK</Button>
				<Button onClick={() => showForm(false)}>Cancel</Button>
			    </div>
			) : null
		    }
		    <TableContainer component={Paper}>
			<Table size="small">
			    <TableHead>
				<TableRow>
				    <TableCell>Command</TableCell>
				    <TableCell>Expected</TableCell>
				    <TableCell></TableCell>
				    <TableCell></TableCell>
				</TableRow>
			    </TableHead>
			    <TableBody>
				{testcases.map(tc => (
				    <TableRow>
					<TableCell>{tc.command}</TableCell>
					<TableCell>{tc.expected}</TableCell>
					<TableCell>
					    <Button onClick={() => props.runTestCase(tc)}>Run</Button>
					</TableCell>
					<TableCell><Button>Delete</Button></TableCell>{/*TODO: this is not working*/}
				    </TableRow>
				))}
			    </TableBody>
			</Table>
		    </TableContainer>
		</TabPanel>
		<TabPanel value={value} index={4}>
		    {/*TODO: user, task => grade*/}
		</TabPanel>
	    </Box>
	</React.Fragment>
    )
}

export default BriefingArea
