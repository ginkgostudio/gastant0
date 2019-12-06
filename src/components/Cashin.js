import React, {Component} from 'react';
import M from "materialize-css";

class Cashin extends Component{
    componentDidMount(){
        document.addEventListener('DOMContentLoaded', function() {

            var cashin_invoice = document.querySelectorAll('.cashin_invoice');
            var cashin_invoice_instance = M.FormSelect.init(cashin_invoice);

            var cashin_currency = document.querySelectorAll('.cashin-currency');
            var cashin_currency_instance = M.FormSelect.init(cashin_currency);

            var cashin_destination = document.querySelectorAll('.cashin-destination');
            var cashin_destination_instance = M.FormSelect.init(cashin_destination);

            var cashin_datepicker_options = {
                autoClose: true,
                defaultDate: new Date(),
                setDefaultDate: true

            }
            var cashin_datepicker = document.querySelectorAll('.datepicker');
            var cashin_datepicker_instance = M.Datepicker.init(cashin_datepicker, cashin_datepicker_options);
            
            var cashin_chips_options = {
                placeholder: 'Add Tag',
                secondaryPlaceholder: '+ Tag',
            }
            var cashin_chips = document.querySelectorAll('.chips');
            var cashin_chips_instances = M.Chips.init(cashin_chips, cashin_chips_options);
            
        });
    }
    render(){
        return (

                <div className="row">
                    <h3>Cash In </h3>
                    <form action="" className="col s12">
                        <div className="row">
                            <div className="input-field col s6">
                                <select className="cashin-invoice">
                                <option value="0" defaultValue>Nop</option>
                                <option value="F0001">F0001</option>
                                <option value="F0002">F0002</option>
                                </select>
                                <label>Invoice?</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s6">
                                <input id="cashin-concepto" type="text" className="validate" />
                                <label htmlFor="cashin-concepto">Concepto</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s6">
                                <input id="cashin-importe" type="number" className="validate" />
                                <label htmlFor="cashin-importe">Importe</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s6">
                                <select className="cashin-currency">
                                <option value="1" defaultValue>ARS</option>
                                <option value="2">COP</option>
                                <option value="3">USD</option>
                                </select>
                                <label>Moneda</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s6">
                                <select className="cashin-destination">
                                <option value="1" defaultValue>Santander Leo</option>
                                <option value="2">Santander Naty</option>
                                <option value="3">BBVA Naty</option>
                                <option value="4">Payoneer</option>
                                <option value="5">Cash</option>
                                </select>
                                <label>Bank account</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s6">
                                <input id="cashin-date" type="text" className="datepicker"/>
                                <label htmlFor="cashin-date">Date</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s6">
                                <button className="btn waves-effect waves-light" type="submit" name="action">Submit
                                    <i className="material-icons right">send</i>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>

            );
        }
}

export default Cashin;