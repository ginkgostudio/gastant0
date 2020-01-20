import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {MuiPickersUtilsProvider, KeyboardDatePicker} from '@material-ui/pickers'


const Expense = (props) => {
    const [selectedDate, setSelectedDate] = React.useState(Date.now());
    
    const handleDateChange = date => {
        setSelectedDate(date);
    };
    

    return (
        <div className="row">
        <h3>Expense</h3>
            <form className="col s12">
                <div className="row">
                    <div className="input-field col s6">
                        <TextField id="amount" label="Amount" />
                    </div>
                </div>
                <div className="row">
                <div className="input-field col s6">
                        <TextField id="concept" label="Concepto" />
                    </div>
                </div>
                <div className="row">
                    <div className="col s6">
                        <div className="chips chips-placeholder"></div>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s6">
                        <select className="expense-currency">
                        <option value="1" defaultValue>ARS</option>
                        <option value="2">COP</option>
                        <option value="3">USD</option>
                        </select>
                        <label>Currency</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s6">
                        <select className="expense-method">
                        <option value="1" defaultValue>Efectivo/débito</option>
                        <option value="2">Tarjeta BBVA</option>
                        <option value="3">Tarjeta Santander</option>
                        <option value="4">Tarjeta Payoneer</option>
                        </select>
                        <label>Payment method</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s6">
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker
                                margin="normal"
                                id="date-picker-expense"
                                value={selectedDate}
                                label="date"
                                onChange={handleDateChange}
                                KeyboardButtonProps={{'aria-label': 'change date'}}
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

export default Expense;