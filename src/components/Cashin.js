import React from 'react';
import Button from '@material-ui/core/Button';
import 'date-fns';
import Datepicker from './common/Datepicker'
import BankAccounts from './common/BankAccounts'
import Currency from './common/Currency'
import InvoiceNumber from './common/InvoiceNumber'
import Description from './common/Description'
import Amount from './common/Amount'


export default function Cashin() {  

    const [selectedDate, setSelectedDate] = React.useState(Date.now());
    const [invoiceNumber, setInvoiceNumber] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [amount, setAmount] = React.useState('');
    const [currency, setCurrency] = React.useState('');
    const [bankAccount, setBankAccount] = React.useState('');
    
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(selectedDate);
    } 

        return (
            
            <div className="row">
                <h3>Cash In </h3>
                <form onSubmit={handleSubmit} className="col s12">
                    <div className="row">
                        <div className="input-field col s6">
                            <InvoiceNumber handleChange={setInvoiceNumber} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <Description handleChange={setDescription}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <Amount handleChange={setAmount}/>

                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <Currency handleChange={setCurrency} currency={currency}/> 

                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <BankAccounts handleChange={setBankAccount} bankAccount={bankAccount}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <Datepicker handleChange={setSelectedDate} selectedDate={selectedDate}/>
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