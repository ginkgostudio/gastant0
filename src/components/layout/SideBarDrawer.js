import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import ListItemIcon from '@material-ui/core/ListItemIcon';
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

	const classes = useStyles();

	return (
		<Drawer open={props.opened} onClose={props.toggleDrawer(false)} anchor='left'>
			<div className={classes.list} role="presentation" onClick={props.toggleDrawer(false)} onKeyDown={props.toggleDrawer(false)}>
				<List>
					<ListItem button key='Dashboard'>
						<ListItemIcon><DashboardIcon /></ListItemIcon><ListItemText primary='Dashboard' />
					</ListItem>
				</List>
				<Divider />
				<List>
					<ListItem button key='all_money_in'>
						<ListItemIcon><AttachMoneyIcon /></ListItemIcon><ListItemText primary='All Money IN' />
					</ListItem>
					<ListItem button key='all_money_out'>
						<ListItemIcon><MoneyOffIcon /></ListItemIcon><ListItemText primary='All Money OUT' />
					</ListItem>
				</List>
				<Divider />
				<List>
					<ListItem button key='new_income'>
						<ListItemIcon><DashboardIcon /></ListItemIcon><ListItemText primary='New income' />
					</ListItem>
					<ListItem button key='new_payment'>
						<ListItemIcon><PaymentIcon /></ListItemIcon><ListItemText primary='New payment' />
					</ListItem>
				</List>
			</div>
		</Drawer>
	);
}

