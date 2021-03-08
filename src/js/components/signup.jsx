import React, { Component } from "react"
import { Link } from 'react-router-dom'

export default class SignUp extends Component {
    render() {
        return (
            <form>
                <h3>CADASTRE-SE</h3>

                <div className="form-group">
                    <label>Primeiro Nome</label>
                    <input type="text" className="form-control" placeholder="Primeiro Nome" />
                </div>

                <div className="form-group">
                    <label>Último Nome</label>
                    <input type="text" className="form-control" placeholder="Último Nome" />
                </div>

                <div className="form-group">
                    <label>Nome de Usuário</label>
                    <input type="text" className="form-control" placeholder="Nome de Usuário" />
                </div>

                <div className="form-group">
                    <label>Senha</label>
                    <input type="password" className="form-control" placeholder="Senha" />
                </div>
                <div className="text-center">
                    <button type="submit" className="btn btn-primary btn-lg waves-effect waves-light">Registrar</button>
                </div>
                <p className="forgot-password text-right">
                    Já é cadastrado <Link to="/sign-in">Logar?</Link>
                </p>
            </form>
        );
    }
}