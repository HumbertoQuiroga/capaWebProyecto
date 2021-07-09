import React from "react";
import loginImg from "../../login.png";

export class Register extends React.Component {

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="content">
          <div className="image">
            <img src={loginImg} alt="imagen"/>
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="nombre">Nombre(s)</label>
              <input type="text" name="nombre" placeholder="nombre(s)" />
            </div>
            <div className="form-group">
              <label htmlFor="nombre">Apellido Paterno</label>
              <input type="text" name="apellidoPaterno" placeholder="apellido paterno" />
            </div>
            <div className="form-group">
              <label htmlFor="nombre">Apellido Materno</label>
              <input type="text" name="apellidoMaterno" placeholder="apellido materno" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" placeholder="email@itson.edu.mx" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Contraseña</label>
              <input type="password" name="contraseña" placeholder="contraseña deseada" />
            </div>
            <div className="form-group">
              <label htmlFor="tipoMaestro">Tipo de maestro(a)</label>
              <select name="seleccionTipo" id="seleccionTipo">
                <option value="planta">Planta</option>
                <option value="Auxiliar">Auxiliar</option>
              </select>
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn">
            Registrarse
          </button>
        </div>
      </div>
    );
  }
}
