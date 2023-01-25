import { useState, useContext } from "react";
import Input from "../../form/Input";

import styles from "../../form/Form.module.css";

//context
import { Context } from "../../../context/UserContext";
import { Link } from "react-router-dom";

function Login() {
    function handleChange(e) {}

    return (
        <section className={styles.form_container}>
            <h1>Login</h1>
            <form>
                <Input
                    text="E-mail"
                    type="email"
                    name="email"
                    placeholder="Digite seu e-mail"
                    handleOnChange={handleChange}
                />

                <Input
                    text="Senha"
                    type="password"
                    name="password"
                    placeholder="Digite sua senha"
                    handleOnChange={handleChange}
                />

                <input type="submit" value="Entrar" />
            </form>

            <p>
                Não tem uma conta? <Link to="/register">Cadastre-se</Link>{" "}
            </p>
        </section>
    );
}

export default Login;
