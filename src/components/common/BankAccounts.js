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

export default function BankAccounts(props) {
    const classes = useStyles();
    return (
        <div>
            <FormControl className={classes.formControl}>
                <InputLabel id="bank-account-label">Bank Account</InputLabel>
                <Select
                    labelId="bank-account-label"
                    id="bank-account"
                    value={props.bankAccount}
                    onChange={(e) => props.handleChange(e.target.value)}
                >
                    <MenuItem value='SRL'>Santander Leo</MenuItem>
                    <MenuItem value='SRN'>Santander Naty</MenuItem>
                    <MenuItem value='BVA'>BBVA</MenuItem>
                    <MenuItem value='BCL'>Bancolombia</MenuItem>
                    <MenuItem value='PYL'>Payoneer</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}