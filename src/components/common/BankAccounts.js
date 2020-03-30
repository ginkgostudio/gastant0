import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
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
    const [age, setAge] = React.useState('');

    const inputLabel = React.useRef(null);
    const [labelWidth, setLabelWidth] = React.useState(0);
    React.useEffect(() => {
        setLabelWidth(inputLabel.current.offsetWidth);
    }, []);

    const handleChange = event => {
        setAge(event.target.value);
    };

    return (
        <div>
            <FormControl /*className={this.classes.formControl}*/>
                <InputLabel id="bank-account-label">Bank Account</InputLabel>
                <Select
                    labelId="bank-account-label"
                    id="bank-account"
                    value={age}
                    onChange={handleChange}
                >
                    <MenuItem /*value='ARS'*/>Santander Naty</MenuItem>
                    <MenuItem /*value='ARS'*/>BBVA Naty</MenuItem>
                    <MenuItem /*value='USD'*/>Santander Leo</MenuItem>
                    <MenuItem /*value='COP'*/>Payoneer</MenuItem>
                    <MenuItem /*value='COP'*/>Cash</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}
