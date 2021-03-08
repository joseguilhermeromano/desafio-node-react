import React, { Component } from "react"
import { Link } from 'react-router-dom'

export default class Login extends Component {
    render() {
        return (
            <form>
                <h3>ACESSAR</h3>

                <div className="form-group">
                    <label><i className="fa fa-user" aria-hidden="true"></i> Nome de Usuário</label>
                    <input type="email" className="form-control" placeholder="Digite o nome de usuário" />
                </div>

                <div className="form-group">
                    <label><i className="fa fa-lock" aria-hidden="true"></i> Senha</label>
                    <input type="password" className="form-control" placeholder="Digite a sua senha" />
                </div>

                <div className="text-center">
                    <button type="submit" className="btn btn-primary btn-lg waves-effect waves-light"><span className="fa fa-sign-in fa-lg"></span> Entrar</button>
                </div>
                <p className="forgot-password text-right">
                    <br></br>
                    Ainda não é cadastrado? <Link to="/sign-up">Cadastre-se!</Link>
                </p>
            </form>
        );
    }
}