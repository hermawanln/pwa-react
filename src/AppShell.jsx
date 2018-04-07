import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import Button from 'material-ui/Button';
import List from 'material-ui/List';
import Divider from 'material-ui/Divider';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton
from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import { MenuList, MenuItem } from 'material-ui/Menu';
import { ListItemIcon, ListItemText } from 'material-ui/List';
import InboxIcon from 'material-ui-icons/MoveToInbox';
import Build from 'material-ui-icons/Build';
import Contact from 'material-ui-icons/Phone';
import Home from 'material-ui-icons/Home';
import {
	Route,
	BrowserRouter as Router,
	NavLink,
	Redirect,
	Link
} from 'react-router-dom';

const styles = {
	list: {
		width: 250,
	},
	fullList: {
		width: 'auto',
	},
	root: {
		flexGrow: 1,
	},
	flex: {
		flex: 1,
	},
	menuButton: {
		marginLeft:-12,
		marginRight: 20,
	},
};
class TemporaryDrawer extends React.Component {
	state = {
		left: false,
	};
	toggleDrawer = (side, open) => () => {
		this.setState({
		[side]: open,
		});
	};

	render() {
	const { classes } = this.props;
	const sideList = (
		<div className={classes.list}>
			<MenuList>
			<Link to="/">
				<MenuItem className={classes.menuItem} 
				onClick={this.toggleDrawer('left', false)}>
					<ListItemIcon className={classes.icon}>
					<Home />
					</ListItemIcon>
					<ListItemText classes={{ primary: classes.primary }} 
					inset primary="Home" />
				</MenuItem>
			</Link>
			<Divider/>
			<Link to="/Contact">
				<MenuItem className={classes.menuItem} 
				onClick={this.toggleDrawer('left', false)}>
					<ListItemIcon className={classes.icon}>
					<Contact />
					</ListItemIcon>
					<ListItemText classes={{ primary: classes.primary }} 
					inset primary="Contact" />
				</MenuItem>
			</Link>
			<Divider/>
			<Link to="/About">
				<MenuItem className={classes.menuItem} 
				onClick={this.toggleDrawer('left', false)}>
					<ListItemIcon className={classes.icon}>
					<Build />
					</ListItemIcon>
					<ListItemText classes={{ primary: classes.primary }} 
					inset primary="About" />
				</MenuItem>
			</Link>
			<Divider/>
			</MenuList>
		</div>
	);
		return (
		<div>
			<div className={classes.root}>
				<AppBar position="fixed">
					<Toolbar>
						<IconButton onClick={this.toggleDrawer('left', true)} 
						className={classes.menuButton} color="inherit" aria-label="Menu">
						<MenuIcon />
						</IconButton>
						<Typography variant="title" color="inherit" 
						className={classes.flex}>
						Hermawan PWA
						</Typography>
						<Button color="inherit">Login</Button>
					</Toolbar>
				</AppBar>
			</div>
			<Drawer open={this.state.left} 
			onClose={this.toggleDrawer('left', false)}>
			<div
			tabIndex={0}
			role="button"
			onKeyDown={this.toggleDrawer('left', false)}>
			{sideList}
			</div>
			</Drawer>
		</div>
		);
	}
}
	TemporaryDrawer.propTypes = {
	classes: PropTypes.object.isRequired,
	};
export default withStyles(styles)(TemporaryDrawer);