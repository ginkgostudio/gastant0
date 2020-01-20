import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Fab from '@material-ui/core/Fab';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Avatar from '@material-ui/core/Avatar';
import MenuIcon from '@material-ui/icons/Menu';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import MoneyOffIcon from '@material-ui/icons/MoneyOff';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import PaymentIcon from '@material-ui/icons/Payment';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';


const useStyles = makeStyles(theme => ({
	text: {
		padding: theme.spacing(2, 2, 0),
	},
	paper: {
		paddingBottom: 50,
	},
	list: {
		marginBottom: theme.spacing(2),
		width: 250,
	},

	fullList: {
		width: 'auto',
	},
	subheader: {
		backgroundColor: theme.palette.background.paper,
	},
	appBar: {
		top: 'auto',
		bottom: 0,
	},
	grow: {
		flexGrow: 1,
	},
	fabButton: {
		position: 'absolute',
		zIndex: 1,
		top: -30,
		left: 0,
		right: 0,
		margin: '0 auto',
	},
}));

//export default function TemporaryDrawer() {

const Navbar = (props) => {
	const classes = useStyles();
	const [state, setState] = React.useState({
		top: false,
		left: false,
		bottom: false,
		right: false,
	});

	const toggleDrawer = (side, open) => event => {
		if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
			return;
		}

		setState({ ...state, [side]: open });
	};

	const sideList = side => (
		<div
			className={classes.list}
			role="presentation"
			onClick={toggleDrawer(side, false)}
			onKeyDown={toggleDrawer(side, false)}
		>
			<List>
				<ListItem button key='Dashboard'>
				<Link to="/"><ListItemIcon> <DashboardIcon /></ListItemIcon><ListItemText primary='Dashboard' /></Link>
				</ListItem>
				<ListItem button key='Dashboard'>
					<ListItemIcon> <AccountBalanceWalletIcon /></ListItemIcon><ListItemText primary='Monthly balance' />
				</ListItem>
			</List>
			<Divider />
			<List>
				<ListItem button key='Dashboard'>
					<ListItemIcon> <AttachMoneyIcon /></ListItemIcon><ListItemText primary='All Money IN' />
				</ListItem>
				<ListItem button key='Dashboard'>
					<ListItemIcon> <MoneyOffIcon /></ListItemIcon><ListItemText primary='All Money OUT' />
				</ListItem>
			</List>
			<Divider />
			<List>
				<ListItem button key='Dashboard'>
					<ListItemIcon> <DashboardIcon /></ListItemIcon><ListItemText primary='New income' />
				</ListItem>
				<ListItem button key='Dashboard'>
					<ListItemIcon> <PaymentIcon /></ListItemIcon><ListItemText primary='New payment' />
				</ListItem>
			</List>
		</div>
	);

	return (
		<div>
			{/* <nav>
        <div className="nav-wrapper">
        <a href="#!" className="brand-logo"><i className="material-icons">cloud</i>Gastant0</a>
        <ul className="right hide-on-med-and-down">
            <li><Link to="/"><i className="material-icons">payment</i></Link></li>
            <li><NavLink to="/expense"><i className="material-icons">payment</i></NavLink></li>
            <li><NavLink to="/cashin"><i className="material-icons">monetization_on</i></NavLink></li>
            <li><a href="badges.html"><i className="material-icons">receipt</i></a></li>
            <li><a href="mobile.html"><i className="material-icons">more_vert</i></a></li>
        </ul>
        </div>
    </nav> */}
			<AppBar position="fixed" color="primary" className={classes.appBar}>
				<Toolbar>
					<IconButton edge="start" color="inherit" aria-label="open drawer" onClick={toggleDrawer('left', true)}>
						<MenuIcon />
					</IconButton>
					<Fab color="secondary" aria-label="add" className={classes.fabButton}>
						<AddIcon />
					</Fab>
					<div className={classes.grow} />
					<IconButton color="inherit">
						<SearchIcon />
					</IconButton>
					<IconButton edge="end" color="inherit">
						<MoreIcon />
					</IconButton>
				</Toolbar>
			</AppBar>
			<Drawer open={state.left} onClose={toggleDrawer('left', false)}>
				{sideList('left')}
			</Drawer>
		</div>
	);
}

export default withRouter(Navbar)
