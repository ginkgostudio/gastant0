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

export default function PaymentMethod() {
    const classes = useStyles();
    const [paymentMethod, setPaymentMethod] = React.useState('');

    const handleChange = event => {
        setPaymentMethod(event.target.value);
    };

    return (
        <div>
            <FormControl className={classes.formControl}>
                <InputLabel id="payment-method-label">Payment Method</InputLabel>
                <Select
                    labelId="payment-method-label"
                    id="payment-method"
                    value={paymentMethod}
                    onChange={handleChange}
                >
                    <MenuItem value='CSH'>Efectivo</MenuItem>
                    <MenuItem value='DBT'>Débito</MenuItem>
                    <MenuItem value='TCB'>TC BBVA</MenuItem>
                    <MenuItem value='TCS'>TC Santander</MenuItem>
                    <MenuItem value='TCP'>TC Payoneer</MenuItem>
                    <MenuItem value='DBC'>TD Bancolombia</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}