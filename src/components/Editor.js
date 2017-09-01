import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class Editor extends Component {
	render() {
		return (
			<MuiThemeProvider>
				<TextField
                    hintText="Hint Text"
                    multiLine={true}
                    rows={2}
                    fullWidth={true}
                />
			</MuiThemeProvider>
		);
	}
}

export default Editor;