import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default function BankAccounts() {
    const classes = useStyles();
    const [bankAccount, setBankAccount] = React.useState('');

    const handleChange = event => {
        setBankAccount(event.target.value);
    };

    return (
        <div>
            <FormControl className={classes.formControl}>
                <InputLabel id="bank-account-label">Bank Account</InputLabel>
                <Select
                    labelId="bank-account-label"
                    id="bank-account"
                    value={bankAccount}
                    onChange={handleChange}
                >
                    <MenuItem value='SRL'>Santander Leo</MenuItem>
                    <MenuItem value='SRN'>Santander Naty</MenuItem>
                    <MenuItem value='BCL'>Bancolombia</MenuItem>
                    <MenuItem value='PYL'>Payoneer</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}