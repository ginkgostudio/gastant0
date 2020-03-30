import React from 'react';
import Button from '@material-ui/core/Button';
import 'date-fns';
import Amount from './common/Amount'
import Description from './common/Description'
import Currency from './common/Currency'
import PaymentMethod from './common/PaymentMethod'
import Datepicker from './common/Datepicker'


export default function Expense() {
    const [selectedDate, setSelectedDate] = React.useState(Date.now());
    
    const handleDateChange = date => {
        setSelectedDate(date);
    };
    return (
        <div className="row">
        <h3>Expense</h3>
            <form action="" className="col s12">
                <div className="row">
                    <div className="input-field col s6">
                    <Amount />
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s6">
                        <Description />
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s6">
                        <Currency /> 
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s6">
                        <PaymentMethod />
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s6">
                        <Datepicker />
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


