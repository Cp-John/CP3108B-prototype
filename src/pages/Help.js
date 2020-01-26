import React from 'react';

function Help() {
  return (
    <React.Fragment>
      <div style={{textAlign: 'left'}}>
	<br /><br />
        <h1>Help</h1>
	<p>
	  Please use the following resources when you encounter issues with this system.
	</p>
	<p>
	  As of August 2019, we recommend the browsers <b>Google Chrome</b>, Version 75 or higher, or <b>Mozilla Firefox</b>, Version 70 or higher, to visit the Source Academy. If you encounter issues with the Source Academy using these browsers, please use the following resources.
	</p>
	<li>
	  <ul type="disc">
	    For critical technical issues that seriously affect your learning experience, email the Technical Services of the NUS School of Computing at techsvc@comp.nus.edu.sg or call 6516 2736.
	  </ul>
	  <ul>
	    For non-critical technical issues, such as enhancement suggestions, please use the issue system of the Source Academy repositories on GitHub.
	  </ul>
	  <ul>
	    For issues related to the content of missions, quests, paths and contests, use the respective forum at piazza, or approach your Avenger, Reflection instructor or lecturer.
	  </ul>
	</li>
      </div>
    </React.Fragment>
  )
}

export default Help;
