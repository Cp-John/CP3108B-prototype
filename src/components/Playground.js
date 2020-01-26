import React from 'react';
import { Link } from 'react-router-dom';
import CodingTools from './CodingTools';
import CodingArea from './CodingArea';
import BriefingArea from './BriefingArea';
import REPL from './REPL';
import { Divider } from '@material-ui/core';

function Playground(props) {
    const [state, setState] = React.useState({
	autoRun: true,
	code: props.code,
	REPL: null,
	timeout: 1000,
	chapter: 4,
	libraries: {
	    runes: false,
	    curves: false,
	    sounds: false,
	    binaryTrees: false
	},
	testcases: [{
	    command: "1 + 1;",
	    expected: "1"
	}]
    });

    const changeAuto = () => {
	setState({
	    autoRun: !state.autoRun,
	    code: state.code,
	    REPL: state.REPL,
	    timeout: state.timeout,
	    chapter: state.chapter,
	    libraries: state.libraries,
	    testcases: state.testcases
	});
	//change auto-run status
    } //TODO

    const changeCode = code => {
	setState({
	    autoRun: state.autoRun,
	    code: code,
	    REPL: state.REPL,
	    timeout: state.timeout,
	    chapter: state.chapter,
	    libraries: state.libraries,
	    testcases: state.testcases
	});
    }

    const runCode = () => {
	//Run(state.code).under(chapter).using(libraries)
	//update substitutor/visualizer
    } //TODO

    const changeTimeout = t => {
	setState({
	    autoRun: state.autoRun,
	    code: state.code,
	    REPL: state.REPL,
	    timeout: t,
	    chapter: state.chapter,
	    libraries: state.libraries,
	    testcases: state.testcases
	});
    }

    const evalREPL = () => {
	//Eval??
    } //TODO

    const clearREPL = () => {
	setState({
	    autoRun: state.autoRun,
	    code: state.code,
	    REPL: null,
	    timeout: state.timeout,
	    chapter: state.chapter,
	    libraries: state.libraries,
	    testcases: state.testcases
	});
    } //TODO

    const save = () => {
	//Save(state.code, props.user)
    } //TODO

    const share = () => {
	// copy generated link of state.code
    } //TODO

    const startSession = () => {
	//start a new session and copy generated session code
    } //TODO

    const enterSession = sessionCode => {
	//go to the session
    } //TODO

    const changeChapter = n => {
	setState({
	    autoRun: state.autoRun,
	    code: state.code,
	    REPL: state.REPL,
	    timeout: state.timeout,
	    chapter: n,
	    libraries: state.libraries,
	    testcases: state.testcases
	});
    }

    const changeLibraries = (name, status) => {
	setState({
	    autoRun: state.autoRun,
	    code: state.code,
	    REPL: state.REPL,
	    timeout: state.timeout,
	    chapter: state.chapter,
	    libraries: {...state.libraries, [name]: status},
	    testcases: state.testcases
	});
    }

    const substitutor = () => {
	//Substitutor(this.state.code);
	//return (<...>);
    } //TODO

    const visualizer = () => {
	//Visualizer(this.state.code);
    } //TODO

    const addTestCase = (command, expected) => {
	setState({
	    autoRun: state.autoRun,
	    code: state.code,
	    REPL: state.REPL,
	    timeout: state.timeout,
	    chapter: state.chapter,
	    libraries: state.libraries,
	    testcases: state.testcases.push({
		command: command,
		expected: expected
	    })
	});
    }

    const runTestCases = () => {
	//state.testcases.map(x => runTestCase(x))
    } //TODO

    const runTestCase = testcase => {
	//runCode(testcase.command) === expected?
    } //TODO

    return (
        <React.Fragment>
	    <br /><br />
	    <CodingTools
		status={props.status}
		timeout={state.timeout}
		chapter={state.chapter}
		libraries={state.libraries}
		runCode={runCode}
		changeTimeout={changeTimeout}
		evalREPL={evalREPL}
		clearREPL={clearREPL}
		save={save}
		changeAuto={changeAuto}
		share={share}
		startSession={startSession}
		enterSession={enterSession}
		changeChapter={changeChapter}
		changeLibraries={changeLibraries}
	    />
	    <CodingArea
		code={state.code}
		hierachy={null}
		autoRun={state.autoRun}
		changeCode={changeCode}
	    />
	    <Divider />
	    <BriefingArea
		status={props.status}
		task={props.task}
		libraries={state.libraries}
		substitutor={substitutor}
		visualizer={visualizer}
		chapter={state.chapter}
		testcases={state.testcases}
		addTestCase={addTestCase}
		runTestCases={runTestCases}
		runTestCase={runTestCase}
	    />
	    <Divider />
	    <REPL />
	</React.Fragment>
    )
}

export default Playground

//I didn't find a way to manually set the sizes !!TODO
