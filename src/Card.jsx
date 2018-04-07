import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardHeader } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Isi from './Isi';

const styles = {
	card: {
		minWidth: 275,
	},
	bullet: {
		display: 'inline-block',
		margin: '0 2px',
		transform: 'scale(0.8)',
	},
	title: {
		marginBottom: 16,
		fontSize: 14,
	},
	pos: {
		marginBottom: 12,
	},
};
function SimpleCard(props) {
	const { classes } = props;
	const bull = <span className={classes.bullet}>•</span>;
	return (
		<div>
			<Card className={classes.card}>
				<CardHeader title="Judul Content"/>
				<CardContent>
					<Typography component="p">
					lorem ipsum dolor sit amet lorem ipsum d
					olor sit amet 
					lorem ipsum dolor sit amet
					</Typography>
				</CardContent>
				<CardActions>
					
					<Isi/>

				</CardActions>
			</Card>
		</div>
	);
}
SimpleCard.propTypes = {
classes: PropTypes.object.isRequired
,
};
export default withStyles(styles)(SimpleCard);