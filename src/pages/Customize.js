import React from 'react';
import { Button, FormControl, InputLabel, MenuItem, Select, Typography } from '@material-ui/core';

function Customize(props) {
    const [colorScheme, setColorScheme] = React.useState(props.custom.colorScheme);
    const [fontSize, setFontSize] = React.useState(props.custom.fontSize);
    const [language, setLanguage] = React.useState(props.custom.language);

    const handleColorScheme = event => {
	setColorScheme(event.target.value);
	//TODO: generate preview
    };

    const handleFontSize = event => {
	setFontSize(event.target.value);
	//TODO: generate preview
    };

    const handleLanguage = event => {
	setLanguage(event.target.value);
	//TODO: generate preview
    };

    const applyCustomized = () => {
	props.changeCustom(colorScheme, fontSize, language);
	window.location.href = "/";
    }

    return (
	<React.Fragment>
	    <div style={{textAlign: 'left'}}>
		<br /><br /><br />
		<Typography variant="h3">Customize</Typography>
		<FormControl fullWidth>
		    <InputLabel id="color-scheme-label">Color Scheme</InputLabel>
		    <Select
			labelId="color-scheme-label"
			id="color-scheme"
			value={colorScheme}
			onChange={handleColorScheme}
		    >
			<MenuItem value={"Standard"}>Standard</MenuItem>
		    </Select>
		</FormControl>
		<FormControl fullWidth>
		    <InputLabel id="font-size-label">Font Size</InputLabel>
		    <Select
			labelId="font-size-label"
			id="font-size"
			value={fontSize}
			onChange={handleFontSize}
		    >
			<MenuItem value={"big"}>Big</MenuItem>
			<MenuItem value={"medium"}>Medium</MenuItem>
			<MenuItem value={"small"}>Small</MenuItem>
		    </Select>
		</FormControl>
		<FormControl fullWidth>
		    <InputLabel id="language-label">Language</InputLabel>
		    <Select
			labelId="language-label"
			id="language"
			value={language}
			onChange={handleLanguage}
		    >
			<MenuItem value={"English"}>English</MenuItem>
			<MenuItem value={"Chinese"}>Chinese</MenuItem>
			<MenuItem value={"French"}>French</MenuItem>
		    </Select>{/*TODO: other languages*/}
		</FormControl>
		<Button onClick={applyCustomized}>OK</Button>
	    </div>
	</React.Fragment>
    )
}

export default Customize;
