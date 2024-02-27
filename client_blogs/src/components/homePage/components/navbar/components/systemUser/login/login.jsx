import React, { useState } from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import clsx from "clsx";
import axios from "axios";

import style from "./login.module.scss";

import ModalSuccess from "../../../../../../modals/modals";

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

function Login() {
  const [status, setStatus] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (data) => {
    try {
      const response = await axios.post("http://localhost:8000/login", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      // Lưu token vào localStorage hoặc cookie
      localStorage.setItem("token", response.data.access_token);
      //Mở modal success
      setStatus(true);
      //tắt modal success sau 2 giây
      setTimeout(() => {
        navigate("/");
        setStatus(false);
      }, 2000);
    } catch (error) {
      console.error("Đăng nhập thất bại:", error);
    }
  };

  return (
    <div className={clsx(style.loginPage, "d-flex-c")}>
      <ModalSuccess status={status} />
      <div className={clsx(style.containerLogin, "d-flex-c")}>
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 600,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={handleSubmit}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Login
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
export default Login;
