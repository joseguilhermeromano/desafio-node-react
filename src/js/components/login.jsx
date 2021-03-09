import React, { Component } from "react"
import Tada from 'react-reveal/Tada'
import { Alert } from 'react-bootstrap';

export default class Login extends Component {
    render() {
        return (
            <div className="auth-wrapper vertical-center">
                <div className="auth-inner">
                    <form>

                        <Tada>
                            <h3>ACESSAR</h3>
                        </Tada>
                        <br></br>

                        <Alert bsStyle="warning">
                            <strong>Holy guacamole!</strong> Best check yo self, you're not looking too
                            good.
                        </Alert>

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
                            Ainda não é cadastrado? <a href="/signup">Cadastre-se!</a>
                        </p>
                    </form>
                </div>
            </div>
        );
    }
}