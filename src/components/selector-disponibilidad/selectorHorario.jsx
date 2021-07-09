import React from "react";
import loginImg from "../../login.png";


export class SelectorHorario extends React.Component {

    render() {
        return (
            <div>
            <div className="base-container" ref={this.props.containerRef}>
                <div className="content">
                    <div className="image">
                        <img src={loginImg} alt="imagen" />
                    </div>
                    <div className="form">
                        <table>
                            <tr>
                                <td>
                                    <div className="form-group">
                                        <label htmlFor="lunes">Lunes de:</label>
                                        <select name="lunes" id="lunes">
                                            <option value="7:00">7:00</option>
                                            <option value="7:30">7:30</option>
                                            <option value="8:00">7:00</option>
                                            <option value="8:30">7:30</option>
                                            <option value="9:00">7:00</option>
                                            <option value="9:30">7:30</option>
                                            <option value="10:00">7:00</option>
                                            <option value="10:30">7:30</option>
                                            <option value="11:00">7:00</option>
                                            <option value="11:30">7:30</option>
                                            <option value="12:00">7:00</option>
                                            <option value="12:30">7:30</option>
                                            <option value="13:00">7:00</option>
                                            <option value="13:30">7:30</option>
                                            <option value="14:00">7:00</option>
                                            <option value="14:30">7:30</option>
                                            <option value="15:00">7:00</option>
                                            <option value="15:30">7:30</option>
                                            <option value="16:00">7:00</option>
                                            <option value="16:30">7:30</option>
                                            <option value="17:00">7:00</option>
                                            <option value="17:30">7:30</option>
                                            <option value="18:00">7:00</option>
                                            <option value="18:30">7:30</option>
                                            <option value="19:00">7:00</option>
                                            <option value="19:30">7:30</option>
                                            <option value="20:00">7:00</option>
                                            <option value="20:30">7:30</option>
                                            <option value="21:00">7:30</option>
                                        </select>
                                    </div>
                                </td>
                                <td>
                                    <div className="form-group">
                                        <label htmlFor="lunes a">a: </label>
                                        <select name="lunes" id="lunes">
                                            <option value="7:00">7:00</option>
                                            <option value="7:30">7:30</option>
                                            <option value="8:00">7:00</option>
                                            <option value="8:30">7:30</option>
                                            <option value="9:00">7:00</option>
                                            <option value="9:30">7:30</option>
                                            <option value="10:00">7:00</option>
                                            <option value="10:30">7:30</option>
                                            <option value="11:00">7:00</option>
                                            <option value="11:30">7:30</option>
                                            <option value="12:00">7:00</option>
                                            <option value="12:30">7:30</option>
                                            <option value="13:00">7:00</option>
                                            <option value="13:30">7:30</option>
                                            <option value="14:00">7:00</option>
                                            <option value="14:30">7:30</option>
                                            <option value="15:00">7:00</option>
                                            <option value="15:30">7:30</option>
                                            <option value="16:00">7:00</option>
                                            <option value="16:30">7:30</option>
                                            <option value="17:00">7:00</option>
                                            <option value="17:30">7:30</option>
                                            <option value="18:00">7:00</option>
                                            <option value="18:30">7:30</option>
                                            <option value="19:00">7:00</option>
                                            <option value="19:30">7:30</option>
                                            <option value="20:00">7:00</option>
                                            <option value="20:30">7:30</option>
                                            <option value="21:00">7:30</option>
                                        </select>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="form-group">
                                        <label htmlFor="martes">Martes de: </label>
                                        <select name="martes" id="martes">
                                            <option value="7:00">7:00</option>
                                            <option value="7:30">7:30</option>
                                            <option value="8:00">7:00</option>
                                            <option value="8:30">7:30</option>
                                            <option value="9:00">7:00</option>
                                            <option value="9:30">7:30</option>
                                            <option value="10:00">7:00</option>
                                            <option value="10:30">7:30</option>
                                            <option value="11:00">7:00</option>
                                            <option value="11:30">7:30</option>
                                            <option value="12:00">7:00</option>
                                            <option value="12:30">7:30</option>
                                            <option value="13:00">7:00</option>
                                            <option value="13:30">7:30</option>
                                            <option value="14:00">7:00</option>
                                            <option value="14:30">7:30</option>
                                            <option value="15:00">7:00</option>
                                            <option value="15:30">7:30</option>
                                            <option value="16:00">7:00</option>
                                            <option value="16:30">7:30</option>
                                            <option value="17:00">7:00</option>
                                            <option value="17:30">7:30</option>
                                            <option value="18:00">7:00</option>
                                            <option value="18:30">7:30</option>
                                            <option value="19:00">7:00</option>
                                            <option value="19:30">7:30</option>
                                            <option value="20:00">7:00</option>
                                            <option value="20:30">7:30</option>
                                            <option value="21:00">7:30</option>
                                        </select>
                                    </div>
                                </td>
                                <td>
                                    <div className="form-group">
                                        <label htmlFor="martes a">a: </label>
                                        <select name="martes a" id="martes a">
                                            <option value="7:00">7:00</option>
                                            <option value="7:30">7:30</option>
                                            <option value="8:00">7:00</option>
                                            <option value="8:30">7:30</option>
                                            <option value="9:00">7:00</option>
                                            <option value="9:30">7:30</option>
                                            <option value="10:00">7:00</option>
                                            <option value="10:30">7:30</option>
                                            <option value="11:00">7:00</option>
                                            <option value="11:30">7:30</option>
                                            <option value="12:00">7:00</option>
                                            <option value="12:30">7:30</option>
                                            <option value="13:00">7:00</option>
                                            <option value="13:30">7:30</option>
                                            <option value="14:00">7:00</option>
                                            <option value="14:30">7:30</option>
                                            <option value="15:00">7:00</option>
                                            <option value="15:30">7:30</option>
                                            <option value="16:00">7:00</option>
                                            <option value="16:30">7:30</option>
                                            <option value="17:00">7:00</option>
                                            <option value="17:30">7:30</option>
                                            <option value="18:00">7:00</option>
                                            <option value="18:30">7:30</option>
                                            <option value="19:00">7:00</option>
                                            <option value="19:30">7:30</option>
                                            <option value="20:00">7:00</option>
                                            <option value="20:30">7:30</option>
                                            <option value="21:00">7:30</option>
                                        </select>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="form-group">
                                        <label htmlFor="miercoles">Miercoles de:</label>
                                        <select name="miercoles" id="miercoles">
                                            <option value="7:00">7:00</option>
                                            <option value="7:30">7:30</option>
                                            <option value="8:00">7:00</option>
                                            <option value="8:30">7:30</option>
                                            <option value="9:00">7:00</option>
                                            <option value="9:30">7:30</option>
                                            <option value="10:00">7:00</option>
                                            <option value="10:30">7:30</option>
                                            <option value="11:00">7:00</option>
                                            <option value="11:30">7:30</option>
                                            <option value="12:00">7:00</option>
                                            <option value="12:30">7:30</option>
                                            <option value="13:00">7:00</option>
                                            <option value="13:30">7:30</option>
                                            <option value="14:00">7:00</option>
                                            <option value="14:30">7:30</option>
                                            <option value="15:00">7:00</option>
                                            <option value="15:30">7:30</option>
                                            <option value="16:00">7:00</option>
                                            <option value="16:30">7:30</option>
                                            <option value="17:00">7:00</option>
                                            <option value="17:30">7:30</option>
                                            <option value="18:00">7:00</option>
                                            <option value="18:30">7:30</option>
                                            <option value="19:00">7:00</option>
                                            <option value="19:30">7:30</option>
                                            <option value="20:00">7:00</option>
                                            <option value="20:30">7:30</option>
                                            <option value="21:00">7:30</option>
                                        </select>
                                    </div>
                                </td>
                                <td>
                                    <div className="form-group">
                                        <label htmlFor="miercoles a">a: </label>
                                        <select name="miercoles a" id="miercoles a">
                                            <option value="7:00">7:00</option>
                                            <option value="7:30">7:30</option>
                                            <option value="8:00">7:00</option>
                                            <option value="8:30">7:30</option>
                                            <option value="9:00">7:00</option>
                                            <option value="9:30">7:30</option>
                                            <option value="10:00">7:00</option>
                                            <option value="10:30">7:30</option>
                                            <option value="11:00">7:00</option>
                                            <option value="11:30">7:30</option>
                                            <option value="12:00">7:00</option>
                                            <option value="12:30">7:30</option>
                                            <option value="13:00">7:00</option>
                                            <option value="13:30">7:30</option>
                                            <option value="14:00">7:00</option>
                                            <option value="14:30">7:30</option>
                                            <option value="15:00">7:00</option>
                                            <option value="15:30">7:30</option>
                                            <option value="16:00">7:00</option>
                                            <option value="16:30">7:30</option>
                                            <option value="17:00">7:00</option>
                                            <option value="17:30">7:30</option>
                                            <option value="18:00">7:00</option>
                                            <option value="18:30">7:30</option>
                                            <option value="19:00">7:00</option>
                                            <option value="19:30">7:30</option>
                                            <option value="20:00">7:00</option>
                                            <option value="20:30">7:30</option>
                                            <option value="21:00">7:30</option>
                                        </select>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="form-group">
                                        <label htmlFor="jueves">Jueves de:</label>
                                        <select name="jueves" id="jueves">
                                            <option value="7:00">7:00</option>
                                            <option value="7:30">7:30</option>
                                            <option value="8:00">7:00</option>
                                            <option value="8:30">7:30</option>
                                            <option value="9:00">7:00</option>
                                            <option value="9:30">7:30</option>
                                            <option value="10:00">7:00</option>
                                            <option value="10:30">7:30</option>
                                            <option value="11:00">7:00</option>
                                            <option value="11:30">7:30</option>
                                            <option value="12:00">7:00</option>
                                            <option value="12:30">7:30</option>
                                            <option value="13:00">7:00</option>
                                            <option value="13:30">7:30</option>
                                            <option value="14:00">7:00</option>
                                            <option value="14:30">7:30</option>
                                            <option value="15:00">7:00</option>
                                            <option value="15:30">7:30</option>
                                            <option value="16:00">7:00</option>
                                            <option value="16:30">7:30</option>
                                            <option value="17:00">7:00</option>
                                            <option value="17:30">7:30</option>
                                            <option value="18:00">7:00</option>
                                            <option value="18:30">7:30</option>
                                            <option value="19:00">7:00</option>
                                            <option value="19:30">7:30</option>
                                            <option value="20:00">7:00</option>
                                            <option value="20:30">7:30</option>
                                            <option value="21:00">7:30</option>
                                        </select>
                                    </div>
                                </td>
                                <td>
                                    <div className="form-group">
                                        <label htmlFor="jueves a">a: </label>
                                        <select name="jueves a" id="jueves a">
                                            <option value="7:00">7:00</option>
                                            <option value="7:30">7:30</option>
                                            <option value="8:00">7:00</option>
                                            <option value="8:30">7:30</option>
                                            <option value="9:00">7:00</option>
                                            <option value="9:30">7:30</option>
                                            <option value="10:00">7:00</option>
                                            <option value="10:30">7:30</option>
                                            <option value="11:00">7:00</option>
                                            <option value="11:30">7:30</option>
                                            <option value="12:00">7:00</option>
                                            <option value="12:30">7:30</option>
                                            <option value="13:00">7:00</option>
                                            <option value="13:30">7:30</option>
                                            <option value="14:00">7:00</option>
                                            <option value="14:30">7:30</option>
                                            <option value="15:00">7:00</option>
                                            <option value="15:30">7:30</option>
                                            <option value="16:00">7:00</option>
                                            <option value="16:30">7:30</option>
                                            <option value="17:00">7:00</option>
                                            <option value="17:30">7:30</option>
                                            <option value="18:00">7:00</option>
                                            <option value="18:30">7:30</option>
                                            <option value="19:00">7:00</option>
                                            <option value="19:30">7:30</option>
                                            <option value="20:00">7:00</option>
                                            <option value="20:30">7:30</option>
                                            <option value="21:00">7:30</option>
                                        </select>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="form-group">
                                        <label htmlFor="vienres">Viernes de:</label>
                                        <select name="viernes" id="viernes">
                                            <option value="7:00">7:00</option>
                                            <option value="7:30">7:30</option>
                                            <option value="8:00">7:00</option>
                                            <option value="8:30">7:30</option>
                                            <option value="9:00">7:00</option>
                                            <option value="9:30">7:30</option>
                                            <option value="10:00">7:00</option>
                                            <option value="10:30">7:30</option>
                                            <option value="11:00">7:00</option>
                                            <option value="11:30">7:30</option>
                                            <option value="12:00">7:00</option>
                                            <option value="12:30">7:30</option>
                                            <option value="13:00">7:00</option>
                                            <option value="13:30">7:30</option>
                                            <option value="14:00">7:00</option>
                                            <option value="14:30">7:30</option>
                                            <option value="15:00">7:00</option>
                                            <option value="15:30">7:30</option>
                                            <option value="16:00">7:00</option>
                                            <option value="16:30">7:30</option>
                                            <option value="17:00">7:00</option>
                                            <option value="17:30">7:30</option>
                                            <option value="18:00">7:00</option>
                                            <option value="18:30">7:30</option>
                                            <option value="19:00">7:00</option>
                                            <option value="19:30">7:30</option>
                                            <option value="20:00">7:00</option>
                                            <option value="20:30">7:30</option>
                                            <option value="21:00">7:30</option>
                                        </select>
                                    </div>
                                </td>
                                <td>
                                    <div className="form-group">
                                        <label htmlFor="viernes a">a: </label>
                                        <select name="viernes a" id="viernes a">
                                            <option value="7:00">7:00</option>
                                            <option value="7:30">7:30</option>
                                            <option value="8:00">7:00</option>
                                            <option value="8:30">7:30</option>
                                            <option value="9:00">7:00</option>
                                            <option value="9:30">7:30</option>
                                            <option value="10:00">7:00</option>
                                            <option value="10:30">7:30</option>
                                            <option value="11:00">7:00</option>
                                            <option value="11:30">7:30</option>
                                            <option value="12:00">7:00</option>
                                            <option value="12:30">7:30</option>
                                            <option value="13:00">7:00</option>
                                            <option value="13:30">7:30</option>
                                            <option value="14:00">7:00</option>
                                            <option value="14:30">7:30</option>
                                            <option value="15:00">7:00</option>
                                            <option value="15:30">7:30</option>
                                            <option value="16:00">7:00</option>
                                            <option value="16:30">7:30</option>
                                            <option value="17:00">7:00</option>
                                            <option value="17:30">7:30</option>
                                            <option value="18:00">7:00</option>
                                            <option value="18:30">7:30</option>
                                            <option value="19:00">7:00</option>
                                            <option value="19:30">7:30</option>
                                            <option value="20:00">7:00</option>
                                            <option value="20:30">7:30</option>
                                            <option value="21:00">7:30</option>
                                        </select>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="form-group">
                                        <label htmlFor="sabado">Sabado de:</label>
                                        <select name="sabado" id="sabado">
                                            <option value="7:00">7:00</option>
                                            <option value="7:30">7:30</option>
                                            <option value="8:00">7:00</option>
                                            <option value="8:30">7:30</option>
                                            <option value="9:00">7:00</option>
                                            <option value="9:30">7:30</option>
                                            <option value="10:00">7:00</option>
                                            <option value="10:30">7:30</option>
                                            <option value="11:00">7:00</option>
                                            <option value="11:30">7:30</option>
                                            <option value="12:00">7:00</option>
                                            <option value="12:30">7:30</option>
                                            <option value="13:00">7:00</option>
                                            <option value="13:30">7:30</option>
                                            <option value="14:00">7:00</option>
                                            <option value="14:30">7:30</option>
                                            <option value="15:00">7:00</option>
                                            <option value="15:30">7:30</option>
                                            <option value="16:00">7:00</option>
                                            <option value="16:30">7:30</option>
                                            <option value="17:00">7:00</option>
                                            <option value="17:30">7:30</option>
                                            <option value="18:00">7:00</option>
                                            <option value="18:30">7:30</option>
                                            <option value="19:00">7:00</option>
                                            <option value="19:30">7:30</option>
                                            <option value="20:00">7:00</option>
                                            <option value="20:30">7:30</option>
                                            <option value="21:00">7:30</option>
                                        </select>
                                    </div>
                                </td>
                                <td>
                                    <div className="form-group">
                                        <label htmlFor="sabado a">a: </label>
                                        <select name="sabado a" id="sabado a">
                                            <option value="7:00">7:00</option>
                                            <option value="7:30">7:30</option>
                                            <option value="8:00">7:00</option>
                                            <option value="8:30">7:30</option>
                                            <option value="9:00">7:00</option>
                                            <option value="9:30">7:30</option>
                                            <option value="10:00">7:00</option>
                                            <option value="10:30">7:30</option>
                                            <option value="11:00">7:00</option>
                                            <option value="11:30">7:30</option>
                                            <option value="12:00">7:00</option>
                                            <option value="12:30">7:30</option>
                                            <option value="13:00">7:00</option>
                                            <option value="13:30">7:30</option>
                                            <option value="14:00">7:00</option>
                                            <option value="14:30">7:30</option>
                                            <option value="15:00">7:00</option>
                                            <option value="15:30">7:30</option>
                                            <option value="16:00">7:00</option>
                                            <option value="16:30">7:30</option>
                                            <option value="17:00">7:00</option>
                                            <option value="17:30">7:30</option>
                                            <option value="18:00">7:00</option>
                                            <option value="18:30">7:30</option>
                                            <option value="19:00">7:00</option>
                                            <option value="19:30">7:30</option>
                                            <option value="20:00">7:00</option>
                                            <option value="20:30">7:30</option>
                                            <option value="21:00">7:30</option>
                                        </select>
                                    </div>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div className="footer">
                    <button type="button" className="btn">
                        Crear disponibilidad
                    </button>
                </div>
            </div>
            </div>
        );
    }
}

