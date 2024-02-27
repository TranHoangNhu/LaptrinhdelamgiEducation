import { useState, useEffect } from "react";
import { Button, Form, Input, Space } from "antd";
import { PasswordInput } from "antd-password-input-strength";
import { useNavigate } from "react-router-dom";
import clsx from "clsx";
import axios from "axios";

import style from "./register.module.scss";

import ModalSuccess from "../../../../../../modals/modals";

const SubmitButton = ({ form, children }) => {
  const [submittable, setSubmittable] = useState(false);

  // Watch all values
  const values = Form.useWatch([], form);
  useEffect(() => {
    form
      .validateFields({
        validateOnly: true,
      })
      .then(() => setSubmittable(true))
      .catch(() => setSubmittable(false));
  }, [form, values]);
  return (
    <Button type="primary" htmlType="submit" disabled={!submittable}>
      {children}
    </Button>
  );
};

function Register() {
  const [level, setLevel] = useState(0);
  const [status, setStatus] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/register",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      // Lưu token vào localStorage hoặc cookie
      localStorage.setItem("token", response.data.access_token);
      //Mở modal success
      setStatus(true);
      //tắt modal success sau 2 giây
      setTimeout(() => {
        navigate("/login");
        setStatus(false);
      }, 2000);
    } catch (error) {
      console.error("Đăng nhập thất bại:", error);
    }
  };

  const minLevel = 1;
  const errorMessage = "Password is too weak";

  const [form] = Form.useForm();
  return (
    <div className={clsx(style.registerPage, "d-flex-c")}>
      <ModalSuccess status={status} />
      <div className={clsx(style.containerRegister, "d-flex-c")}>
        <Form
          form={form}
          name="validateOnly"
          layout="vertical"
          autoComplete="off"
          onFinish={handleSubmit}
        >
          <Form.Item
            name="username"
            label="Username:"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="password"
            label="Password: "
            rules={[
              {
                required: true,
                validator: async () => {
                  return level >= minLevel
                    ? Promise.resolve()
                    : Promise.reject(errorMessage);
                },
                message: errorMessage,
              },
            ]}
          >
            <PasswordInput onLevelChange={setLevel} />
          </Form.Item>

          <Form.Item
            name="Confirm Password"
            label="Confirm Password:"
            rules={[
              {
                required: true,
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error("Wrong!"));
                },
              }),
            ]}
            dependencies={["password"]}
            hasFeedback
          >
            <Input.Password />
          </Form.Item>
          <Form.Item>
            <Space>
              <SubmitButton form={form}>Register</SubmitButton>
              <Button htmlType="reset">Reset</Button>
            </Space>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
export default Register;
