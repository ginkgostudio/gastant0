import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import 'date-fns';
import Amount from './common/Amount'
import Description from './common/Description'
import Currency from './common/Currency'
import PaymentMethod from './common/PaymentMethod'
import Datepicker from './common/Datepicker'
import { useMutation } from '@apollo/react-hooks';
import { ADD_EXPENSE } from '../graphql/queries'


const Expense = (props) => {

    //State variables
    const [selectedDate, setSelectedDate] = useState(Date.now());
    const [amount, setAmount] = useState('');
    const [description, setDescription] = useState('');
    const [currency, setCurrency] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('CSH');


    //GraphQL Hook
    const [addExpense, { data }]  = useMutation(ADD_EXPENSE); 
   

    const handleSubmit = (event) => {
        console.log(1)
        event.preventDefault();
        console.log(selectedDate);
        
        addExpense({ 
            variables: { 
                amount: amount, 
                description: description, 
                currency: currency,
                date: selectedDate,
                paymentMethod: paymentMethod
            } 
        });
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
                        <Description handleChange={setDescription} />
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s6">
                        <Currency handleChange={setCurrency} currency={currency} />
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s6">
                        <PaymentMethod handleChange={setPaymentMethod} paymentMethod={paymentMethod} />
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


export default Expense;