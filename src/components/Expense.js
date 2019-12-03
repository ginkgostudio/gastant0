import React, {Component} from 'react';
import M from "materialize-css";

class Expense extends Component{
   
    componentDidMount() {
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('select');
            let options = {
                inDuration: 300,
                outDuration: 300,
                hover: true, // Activate on hover
                coverTrigger: false, // Displays dropdown below the button
            };
            var instances = M.FormSelect.init(elems, options);
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
                            <div className="input-field col s12">
                                <select>
                                <option value="" disabled selected>Choose your option</option>
                                <option value="1">ARS></option>
                                <option value="2">COP</option>
                                <option value="3">USD</option>
                                </select>
                                <label>Materialize Select</label>
                            </div>
                        </div>
                    </form>
                </div>

            </div>
            );
        }
    }
    
    export default Expense;