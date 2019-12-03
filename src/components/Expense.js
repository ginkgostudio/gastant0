import React, {Component} from 'react';
import M from "materialize-css";

class Expense extends Component{
   
    componentDidMount() {
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('select');
            var instances = M.FormSelect.init(elems);
            var options = {
                autoClose: true,
                defaultDate: new Date(),
                setDefaultDate: true

            }
            var elems1 = document.querySelectorAll('.datepicker');
            var instances = M.Datepicker.init(elems1, options);
            var options2 = {
                placeholder: 'Add Tag',
                secondaryPlaceholder: '+ Tag',
            }
            var elems2 = document.querySelectorAll('.chips');
            var instances = M.Chips.init(elems2, options2);
            
        });
    }
    render(){
        return (
            <div>

                <div className="row">
                    <form className="col s12">
                        <div className="row">
                            <div className="input-field col s6">
                                <input id="Importe" type="number" className="validate" />
                                <label for="Importe">Importe</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s6">
                                <input id="concepto" type="text" className="validate" />
                                <label for="concepto">Concepto</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s6">
                                <div className="chips chips-placeholder"></div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s6">
                                <select>
                                <option value="1" selected>ARS</option>
                                <option value="2">COP</option>
                                <option value="3">USD</option>
                                </select>
                                <label>Moneda</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s6">
                                <select>
                                <option value="1" selected>Efectivo/débito</option>
                                <option value="2">Tarjeta BBVA</option>
                                <option value="2">Tarjeta Santander</option>
                                <option value="2">Tarjeta Payoneer</option>
                                </select>
                                <label>Medio de pago</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s6">
                                <input id="expense-date" type="text" class="datepicker"/>
                                <label for="expense-date">Fecha del gasto</label>
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

            </div>
            );
        }
    }
    
    export default Expense;