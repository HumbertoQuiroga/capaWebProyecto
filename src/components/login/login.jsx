import React from "react";
import loginImg from "../../login.png";




export class Login extends React.Component {

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>

        <div className="content">
          <div className="image">
            <img src={loginImg} alt="imagen" />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" name="emailUsuario" placeholder="email@itson.edu.mx" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Contraseña</label>
              <input type="password" name="contraseña" placeholder="contraseña" />
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="submit" className="btn">
            Login
          </button>
        </div>
      </div>
    );
  }
}


