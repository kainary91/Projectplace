import React, {useContext, useState} from "react";
import styled from "styled-components/macro";
import UserContext from "../contexts/UserContext";
import { useHistory } from "react-router-dom";
import {Button, TextField} from "@material-ui/core";

const initialCredentials = {
    username: "",
    password: ""
}

export default function LoginPage() {

    const [credentials, setCredentials] = useState(initialCredentials);
    const {postLogin} = useContext(UserContext);
    const history = useHistory();
    const [error, setError] = useState("");

    return(
        <>
            <HeaderStyled title="Login">Welcome!</HeaderStyled>
            <main>
                <Form autoComplete="off" onSubmit={handleSubmit}>
                    <TextField
                        name="username"
                        label="Username"
                        value={credentials.username}
                        onChange={handleChange}
                        type="text"
                        variant="outlined"/>
                    <TextField
                        name="password"
                        label="Password"
                        value={credentials.password}
                        onChange={handleChange}
                        type="password"
                        variant="outlined"/>
                    <Button type="submit">Login</Button>
                </Form>
                {error && <div>{error}</div>}
            </main>
        </>
    );

    function handleSubmit(event) {
        event.preventDefault();
        postLogin(credentials).then(() => history.push("/success")).catch(() => setError("Invalid credentials!"));
    }

    function handleChange(event) {
        setCredentials({...credentials, [event.target.name]: event.target.value})
    }
}

const Form = styled.form`
  padding: var(--size-l);
  display: grid;
  grid-auto-rows: min-content;
  gap: var(--size-m);
  
  input {
    display: block;
    width: 100%;
  }
  
  button {
    padding: var(--size-m);
    border: none;
    background: var(--red);
    color: white;
    border-radius: var(--size-s);
    font-size: 1em;
  }
`

const HeaderStyled = styled.header`
  text-align: center;
  padding: var(--size-l);
  background-color: var(--brown);
  font-size: 115%;
`;