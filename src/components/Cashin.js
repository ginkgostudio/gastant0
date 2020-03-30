import React from 'react';
import Button from '@material-ui/core/Button';
import 'date-fns';
import MaterialUIPicker from './common/Datepicker'
import BankAccounts from './common/BankAccounts'
import Currency from './common/Currency'
import InvoiceNumber from './common/InvoiceNumber'
import Description from './common/Description'
import Amount from './common/Amount'


export default function Cashin() {  

        return (
            
            <div className="row">
                <h3>Cash In </h3>
                <form action="" className="col s12">
                    <div className="row">
                        <div className="input-field col s6">
                            <InvoiceNumber />
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <Description />
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <Amount />

                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <Currency /> 

                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <BankAccounts />

                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <MaterialUIPicker />
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