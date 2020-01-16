import React, {Component} from 'react';

class Cashin extends Component{
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