import React, {useEffect, useState} from "react";
import style from "./Login.module.css";
import logo from "../../assets/img/sibdevLogo.png";
import {Form, Input, Button} from "antd";
import {Redirect} from "react-router-dom";

const LoginForm = (props) => {
    return (
        <Form
            name="loginForm"
            className={style.login_form}
            onFinish={props.onSubmit}>
            <Form.Item name="login">

                <Input
                    placeholder="Username"
                />
            </Form.Item>
            <Form.Item
                name="password">
                <Input
                    type="password"
                    placeholder="Password"
                />
            </Form.Item>
            <Form.Item>
                <Button
                    type="primary"
                    htmlType="submit"
                    className={style.login_form_button}
                >
                    Войти
                </Button>
            </Form.Item>
        </Form>
    );
};

const Login = (props) => {
    const onSubmit = (data) => {
        props.login(data);
    };
    if (props.isAuth) {
        return <Redirect to="/page"/>;
    }
    return (
        <div className={style.login}>
            <img className={style.login_img} src={logo} alt=""/>
            <div className={style.login_title}>Вход</div>
            <LoginForm onSubmit={onSubmit}/>
        </div>
    );
};

export default Login;
