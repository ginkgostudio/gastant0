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

export default function Currency() {
    const classes = useStyles();
    const [currency, setCurrency] = React.useState('');

    const handleChange = event => {
        setCurrency(event.target.value);
    };

    return (
        <div>
            <FormControl className={classes.formControl}>
                <InputLabel id="currency-label">Currency</InputLabel>
                <Select
                    labelId="currency-label"
                    id="currency"
                    value={currency}
                    onChange={handleChange}
                >
                    <MenuItem value='ARS'>ARS</MenuItem>
                    <MenuItem value='USD'>USD</MenuItem>
                    <MenuItem value='COP'>COP</MenuItem>
                    <MenuItem value='EUR'>COP</MenuItem>
                    
                </Select>
            </FormControl>
        </div>
    );
}
