import React from 'react';
import Button from '@material-ui/core/Button';
import 'date-fns';
import Amount from './common/Amount'
import Description from './common/Description'
import Currency from './common/Currency'
import PaymentMethod from './common/PaymentMethod'
import Datepicker from './common/Datepicker'
import axios from 'axios';


export default function Expense() {

    const [selectedDate, setSelectedDate] = React.useState(Date.now());
    const [amount, setAmount] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [currency, setCurrency] = React.useState('');
    const [paymentMethod, setPaymentMethod] = React.useState('CSH');


    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(selectedDate);
    } 

    return (
        <div className="row">
        <h3>Expense</h3>
            <form onSubmit={handleSubmit} className="col s12">
                <div className="row">
                    <div className="input-field col s6">
                    <Amount handleChange={setAmount} />
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s6">
                        <Description handleChange={setDescription}/>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s6">
                        <Currency handleChange={setCurrency} currency={currency}/> 
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s6">
                        <PaymentMethod handleChange={setPaymentMethod} paymentMethod={paymentMethod}/>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s6">
                        <Datepicker handleChange={setSelectedDate} selectedDate={selectedDate} />
                    </div>
                </div>
                <div className="row">
                    <div className="col s6">
                        <Button variant="contained" type="submit" color="secondary">Submit</Button>
                    </div>
                </div>
            </form>
        </div>
    );
}


