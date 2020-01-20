import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers'
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
//import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';


class Cashin extends Component {


    // useStyles = makeStyles(theme => ({
    //     container: {
    //         display: 'flex',
    //         flexWrap: 'wrap',
    //     },
    //     textField: {
    //         marginLeft: theme.spacing(1),
    //         marginRight: theme.spacing(1),
    //         width: 200,
    //     },
    //     formControl: {
    //         margin: theme.spacing(1),
    //         minWidth: 120,
    //     },
    //     selectEmpty: {
    //         marginTop: theme.spacing(2),
    //     },
    // }));

    handleDateChange = date => {
        this.setState({'date':date});
      };
    


    // classes = this.useStyles();
    selectedDate = Date.now();
    state = {
        'description': '',
        'invoice': 0,
        'date': '',
        // 'invoice': '',
        // 'invoice': '',
        // 'invoice': '',
        // 'invoice': '',
    }


    handleChange = (e) => {
        console.log('heyjo');
        console.log(e);
        this.setState({
            [e.target.id]: e.target.value
        })
    };

    render() {
        return (

            <div className="row">
                <h3>Cash In </h3>
                <form action="" className="col s12">
                    <div className="row">
                        <div className="input-field col s6">

                            <FormControl /*className={this.classes.formControl}*/>
                                <InputLabel id="invoice-label">Invoice</InputLabel>
                                <Select
                                    labelId="invoice-label"
                                    id="invoice"
                                    value="{this.state.invoice}"
                                    onChange={this.handleChange}>
                                    <MenuItem value={10}>Nop</MenuItem>
                                    <MenuItem value={20}>F0001</MenuItem>
                                    <MenuItem value={30}>F0002</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <TextField id="description" label="Concept" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <TextField id="amount" label="Importe" />

                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <FormControl /*className={this.classes.formControl}*/>
                                <InputLabel id="currency-label">Currency</InputLabel>
                                <Select
                                    labelId="currency-label"
                                    id="currency"
                                    value={this.state.age}
                                    onChange={this.handleChange}
                                >
                                    <MenuItem value='ARS'>ARS</MenuItem>
                                    <MenuItem value='USD'>USD</MenuItem>
                                    <MenuItem value='COP'>COP</MenuItem>
                                </Select>
                            </FormControl>

                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <FormControl /*className={this.classes.formControl}*/>
                                <InputLabel id="bank-account-label">Bank Account</InputLabel>
                                <Select
                                    labelId="bank-account-label"
                                    id="bank-account"
                                    value={this.state.age}
                                    onChange={this.handleChange}
                                >
                                    <MenuItem value='ARS'>Santander Naty</MenuItem>
                                    <MenuItem value='ARS'>BBVA Naty</MenuItem>
                                    <MenuItem value='USD'>Santander Leo</MenuItem>
                                    <MenuItem value='COP'>Payoneer</MenuItem>
                                    <MenuItem value='COP'>Cash</MenuItem>
                                </Select>
                            </FormControl>


                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <KeyboardDatePicker
                                    margin="normal"
                                    id="date-picker-cashin"
                                    value={this.selectedDate}
                                    label="date"
                                    onChange={this.handleDateChange}
                                    KeyboardButtonProps={{ 'aria-label': 'change date' }}
                                />
                            </MuiPickersUtilsProvider>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s6">
                            <Button variant="contained" color="secondary">Submit</Button>
                        </div>
                    </div>
                </form>
            </div>

        );
    }

}

export default Cashin;