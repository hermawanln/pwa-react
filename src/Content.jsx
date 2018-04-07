import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import { FormLabel, FormControlLabel } from 'material-ui/Form';
import Radio, { RadioGroup } from 'material-ui/Radio';
import Paper from 'material-ui/Paper';
import Card from './Card';

const styles = theme => ({
	root: {
		flexGrow: 1,
		paddingLeft: 20,
		paddingRight:20,
	},
	paper: {
		height: 140,
		width: 100,
	},
	control: {
		padding: theme.spacing.unit * 2,
	},
});

class GuttersGrid extends 
React.Component {
	state = {
		spacing: '16',
	};
	handleChange = key => (event, value) => {
		this.setState({
		[key]: value,
		});
	};

	render() {
		const { classes } = this.props;
		const { spacing } = this.state;

	return (
		<Grid container className={classes.root}>
			<Grid item xs={12}>
				<Grid container className={classes.demo} justify="center" spacing={Number(spacing)}>
				{[0, 1, 2,3,4,5,6,7,8,9].map(value => (
				<Grid key={value} item xs={12} sm={6} md={4}>
				<Card />
				</Grid>
				))}
				</Grid>
			</Grid>
		</Grid>
	);
	}
}
	GuttersGrid.propTypes = {
		classes: PropTypes.object.isRequired,
	};
export default withStyles(styles)(GuttersGrid);
