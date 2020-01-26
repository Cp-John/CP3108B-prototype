import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

//layout:
import Header from './layout/Header';

//page:
import About from './pages/About';
import Help from './pages/Help';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Customize from './pages/Customize';
import Samples from './pages/Samples';
import Programs from './pages/Programs';
import Courses from './pages/Courses';
import Course from './pages/Course';
import TestComponent from './pages/TestComponent';

//component:
import Playground from './components/Playground';

class App extends React.Component {
    state = {
        users: [],
        status: "student",
        user: {
	    id: 1,
	    status: "student",
	    courses: [{
		name: "CS1101S",
		info: "programming methodology I",
		status: "student",
		notifications: "https://luminus.nus.edu.sg/",
		forum: "https://www.piazza.com/",
		materials: [],
		xp: 0,
		components: [
		    {
			name: "Mission",
			content: [] //TODO
		    },
		    {
			name: "Quest",
			content: [] //TODO
		    }
		]
	    }]
	},
        custom: {
	    colorScheme: "Standard",
	    fontSize: "medium",
	    language: "English"
        },
	code: '',
	course: {
	    name: "CS1101S",
	    info: "programming methodology I",
	    status: "student",
	    notifications: [],
	    forum: "https://www.piazza.com/",
	    materials: [],
	    xp: 0,
	    components: [
		{
		    name: "Mission",
		    content: [] //TODO
		},
		{
		    name: "Quest",
		    content: [] //TODO
		}
	    ]
	}
    }

    changeUser = id => {
	
    } //TODO

    signUp = (name, email, pwd) => {
    } //TODO

    changeCustom = (colorScheme, fontSize, language) => {
	this.setState({
	    users: this.state.users,
	    status: this.state.status,
	    user: this.state.user,
	    custom: {
		colorScheme: colorScheme,
		fontSize: fontSize,
		language: language
	    },
	    code: this.state.code,
	    course: this.state.course
	});
    } //TODO: Remember for users, and apply the changes

    changeCourse = course => {
	this.setState({
	    users: this.state.users,
	    status: this.state.status,
	    user: this.state.user,
	    custom: this.state.custom,
	    code: this.state.code,
	    course: course
	});
    }

    render () {
        return (
            <Router>
                <div className="App">
                    <div className="container">
                        <Header
			    status={this.state.status}
			    user={this.state.user}
			/>
                        <Route exact path="/" render={props => (
                            <React.Fragment>
				<Playground
				    status={this.state.status}
				    user={this.state.user}
				    code={this.state.code}
				/>
                            </React.Fragment>
                        )} />
			<Route path="/about" component={About} />
                        <Route path="/help" component={Help} />
                        <Route path="/customize" render={props => (
                            <Customize changeCustom={this.changeCustom} custom={this.state.custom} />
                        )} />
                        <Route path="/login" render={props => (
			    <Login changeUser={this.changeUser} />
			)} />
                        <Route path="/sign_up" render={props => (
                            <SignUp signUp={this.signUp} />
                        )} />
			<Route path="/sample_programs" component={Samples} />
                        <Route path="/courses/" render={props => (
                            <Courses user={this.state.user} changeCourse={this.changeCourse} />
                        )} />
                        <Route path="/programs" render={props => (
                            <Programs user={this.state.user} />
                        )} />
			<Route exact path="/course" render={props => (
			    <Course course={this.state.course} user={this.state.user} />
			)} />
			<Route path="/course/:componentName" render={props => (
			    <TestComponent user={this.state.user} status={this.state.course.status} component={this.state.course.components.filter(x => x.name === props.match.params.componentName)[0]} />
			)} />
			<Route path="/grade" render={props => (
			    <p></p>
			)} />
                    </div>
                </div>
            </Router>
        )
    }
}

export default App
//props.match.params.userId
