import React, {Component} from 'react';
import M from "materialize-css";

class Expense extends Component{
   
    componentDidMount() {
        document.addEventListener('DOMContentLoaded', function() {

            var expense_currency = document.querySelectorAll('.expense-currency');
            var expense_currency_instances = M.FormSelect.init(expense_currency);
            
            
            var expense_method = document.querySelectorAll('.expense-method');
            var expense_method = M.FormSelect.init(expense_method);


            var expense_datepicker_options = {
                autoClose: true,
                defaultDate: new Date(),
                setDefaultDate: true
            }
            var expense_datepicker = document.querySelectorAll('.datepicker');
            var expense_datepicker_instances = M.Datepicker.init(expense_datepicker, expense_datepicker_options);
            
            var expenses_selector_options = {
                placeholder: 'Add Tag',
                secondaryPlaceholder: '+ Tag',
            }
            var expenses_chips = document.querySelectorAll('.chips');
            var expense_chips_instances = M.Chips.init(expenses_chips, expenses_selector_options);
            
        });
    }
    render(){
        return (

                <div className="row">
                <h3>Expense</h3>
                    <form className="col s12">
                        <div className="row">
                            <div className="input-field col s6">
                                <input id="expense-importe" type="number" className="validate" />
                                <label htmlFor="expense-importe">Importe</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s6">
                                <input id="expense-concepto" type="text" className="validate" />
                                <label htmlFor="expense-concepto">Concepto</label>
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
                                <option value="2">Tarjeta Santander</option>
                                <option value="2">Tarjeta Payoneer</option>
                                </select>
                                <label>Payment method</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s6">
                                <input id="expense-date" type="text" className="datepicker"/>
                                <label htmlFor="expense-date">Date</label>
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
    
    export default Expense;