import React from 'react';
import { Typography } from '@material-ui/core'

function About() {
  return (
    <React.Fragment>
      <div style={{textAlign: 'left'}}>
	<br /><br />
        <h1>About</h1>
        <Typography>
	  The <i>Source Academy</i> is a computer-mediated learning environment for studying the structure and interpretation of computer programs. Students write and run their programs in their web browser, using sublanguages of JavaScript called <a href="https://sicp.comp.nus.edu.sg/source/" target="_blank">Source §1, Source §2, Source §3 and Source §4</a>, designed for the first four chapters of the textbook <a href="https://sicp.comp.nus.edu.sg/" target="_blank">Structure and Interpretation of Computer Programs, JavaScript Adaptation</a>.
	</Typography>
	<Typography>
	  The Source Academy is available under the Apache License 2.0 at our GitHub organisation, <a href="https://github.com/source-academy" target="_blank">Source Academy</a>. The National University of Singapore uses the Source Academy for teaching Programming Methodology to freshmen Computer Science students in the course <a href="https://www.comp.nus.edu.sg/~cs1101s/" target="_blank">CS1101S</a>.
	</Typography>
      </div>
    </React.Fragment>
  )
}

export default About;
