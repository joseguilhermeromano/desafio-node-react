import React, { Component } from "react"
import Tada from 'react-reveal/Tada';

export default class SignUp extends Component {
    render() {
        return (
            <div className="auth-wrapper vertical-center">
                <div className="auth-inner">
                    <form>
                        <Tada>
                            <h3>CADASTRE-SE</h3>
                        </Tada>

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
                            Já sou cadastrado <a href="/signin">Acessar.</a>
                        </p>
                    </form>
                </div>
            </div>
        );
    }
}