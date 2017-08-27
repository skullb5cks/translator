import React from 'react';
import AppBar from 'material-ui/AppBar';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */
const Bar = () => (
	<MuiThemeProvider>
		<AppBar
			title='Papago Translator'
			iconClassNameRight='muidocs-icon-navigation-expand-more'
		/>
	</MuiThemeProvider>
);

export default Bar;