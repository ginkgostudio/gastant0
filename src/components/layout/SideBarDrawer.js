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


const useStyles = makeStyles({
	list: {
		width: 'auto'
	}
});


export default function SideBarDrawer(props) {


	const toggle = () => {
		props.toggleDrawer(false);
	}


	const classes = useStyles();

	return (

		<Drawer open={props.opened} onClose={toggle}>
			<div className={classes.list} role="presentation" onClick={toggle} onKeyDown={toggle}>
				<List>
					<ListItem button key='Dashboard'>
						<ListItemIcon> <DashboardIcon /></ListItemIcon><ListItemText primary='Dashboard' />
					</ListItem>
					<ListItem button key='monthly_balance'>
						<ListItemIcon> <AccountBalanceWalletIcon /></ListItemIcon><ListItemText primary='Monthly balance' />
					</ListItem>
				</List>
				<Divider />
				<List>
					<ListItem button key='all_money_in'>
						<ListItemIcon> <AttachMoneyIcon /></ListItemIcon><ListItemText primary='All Money IN' />
					</ListItem>
					<ListItem button key='all_money_out'>
						<ListItemIcon> <MoneyOffIcon /></ListItemIcon><ListItemText primary='All Money OUT' />
					</ListItem>
				</List>
				<Divider />
				<List>
					<ListItem button key='new_income'>
						<ListItemIcon> <DashboardIcon /></ListItemIcon><ListItemText primary='New income' />
					</ListItem>
					<ListItem button key='new_payment'>
						<ListItemIcon> <PaymentIcon /></ListItemIcon><ListItemText primary='New payment' />
					</ListItem>
				</List>
			</div>
		</Drawer>
	);
}

