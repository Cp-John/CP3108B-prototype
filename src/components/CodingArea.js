import React from 'react';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';

const ITEM_HEIGHT = 48;

function CodingArea(props) {
    const [value, setValue] = React.useState(props.code);

    const handleChange = event => {
	setValue(event.target.value);
	props.changeCode(value);
    };

    return (
        <React.Fragment>
	    <form noValidate autoComplete="off">
		<TextField
		    id="playground-code"
		    multiline
		    fullWidth
		    rows="10"
		    defaultValue={props.code}
		    value={value}
		    onChange={handleChange}
		/>
	    </form>
	</React.Fragment>
    )
}

export default CodingArea
