"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Form, Input, Button, Row, Col } from "antd";
import { ReactSVG } from "react-svg";
import { UilFacebook, UilTwitter, UilGithub } from "@iconscout/react-unicons";
import { CheckBox } from "@/components/Checkbox";
import { LoginAction, LoginState, useAppDispatch } from "@/redux";
import { signIn } from "next-auth/react";

function SignIn() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const dispatch = useAppDispatch();

  const [data, setData] = useState<LoginState>({
    username: "admin",
    password: "123",
  });

  const handleLogin = async (req: LoginState) => {
    try {
      setError("");
      setLoading(true);
      // dispatch(LoginAction(req)).then(() => {});
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError("Failed to Login!");
    }
  };

  const [form] = Form.useForm();
  const [state, setState] = useState({
    checked: false,
  });

  const checkboxChange = (checked: any) => {
    setState({ ...state, checked });
  };

  useEffect(() => {
    const email = document.querySelector('input[type="text"]');
    const emailValue = (email as HTMLInputElement).value;
    const password = document.querySelector('input[type="password"]');
    const passwordValue = (password as HTMLInputElement).value;

    setData({
      username: emailValue,
      password: passwordValue,
    });
  }, []);

  return (
    <Row justify="center" align="middle" className="h-screen">
      <Col xxl={6} xl={8} md={12} sm={18} xs={24}>
        <div className="rounded-md bg-white shadow-regular dark:bg-white/10 dark:shadow-none">
          <div className="border-b border-gray-200 px-5 py-4 text-center dark:border-white/10">
            <h2 className="mb-0 text-xl font-semibold text-dark dark:text-white/[.87]">
              Đăng nhập CB Ventures
            </h2>
          </div>
          <div className="px-8 pb-4 pt-6">
            <Form
              name="login"
              form={form}
              onFinish={handleLogin}
              layout="vertical"
            >
              <Form.Item
                name="username"
                rules={[
                  {
                    message: "Tên đăng nhập không được để trống",
                    required: true,
                  },
                ]}
                initialValue={data.username}
                label="Tên đăng nhập"
                className="[&>div>div>label]:text-sm [&>div>div>label]:font-medium [&>div>div>label]:text-dark dark:[&>div>div>label]:text-white/60"
              >
                <Input
                  type="text"
                  value={data.username}
                  placeholder="name@example.com"
                  className="h-12 rounded-4 p-3 hover:border-primary focus:border-primary"
                  onChange={(e: any) =>
                    setData({
                      ...data,
                      username: e.target.value,
                    })
                  }
                />
              </Form.Item>
              <Form.Item
                name="password"
                initialValue="123"
                label="Mật khẩu"
                className="[&>div>div>label]:text-sm [&>div>div>label]:font-medium [&>div>div>label]:text-dark dark:[&>div>div>label]:text-white/60"
              >
                <Input.Password
                  onChange={(e: any) =>
                    setData({
                      ...data,
                      password: e.target.value,
                    })
                  }
                  value={data.password}
                  type="password"
                  placeholder="Mật khẩu"
                  className="h-12 rounded-4 p-3 hover:border-primary focus:border-primary"
                />
              </Form.Item>
              <div className="flex flex-wrap items-center justify-between gap-[10px]">
                <CheckBox
                  onChange={checkboxChange}
                  checked={state.checked}
                  className="text-xs text-light dark:text-white/60"
                >
                  Giữ đăng nhập
                </CheckBox>
                <Link className="text-13 text-primary" href="/forgotPassword">
                  Quên mật khẩu?
                </Link>
              </div>
              <Form.Item>
                <Button
                  className="my-6 h-12 w-full bg-primary p-0 text-sm font-medium"
                  htmlType="submit"
                  type="primary"
                  size="large"
                >
                  {loading ? "Đang tải..." : "Đăng nhập"}
                </Button>
              </Form.Item>
              {error && (
                <p className="mb-10 text-center text-base text-danger">
                  {error}
                </p>
              )}
              <p className="relative text-center text-13 font-medium text-body before:absolute before:top-1/2 before:z-10 before:h-px before:w-full before:-translate-y-1/2 before:bg-gray-200 dark:text-white/60 dark:before:bg-white/10 ltr:before:left-0 rtl:before:right-0">
                <span className="relative z-20 bg-white px-4 dark:bg-[#1b1d2a]">
                  Or
                </span>
              </p>
              <ul className="mb-0 flex items-center justify-center">
                <li className="px-1.5 pb-2.5 pt-3">
                  <div
                    onClick={() => signIn("google")}
                    className="google-social group flex h-12 items-center justify-center rounded-md bg-google-plus-transparent px-4 text-google-plus hover:bg-google-plus hover:text-white"
                  >
                    <ReactSVG
                      className="[&>div>svg>path]:fill-google-plus group-hover:[&>div>svg>path]:fill-white"
                      src="/img/icon/google-plus.svg"
                    />
                  </div>
                </li>
                <li className="px-1.5 pb-2.5 pt-3">
                  <Link
                    href="#"
                    className="facebook-social flex h-12 items-center justify-center rounded-md bg-facebook-transparent px-4 text-facebook hover:bg-facebook hover:text-white"
                  >
                    <UilFacebook />
                  </Link>
                </li>
                <li className="px-1.5 pb-2.5 pt-3">
                  <Link
                    href="#"
                    className="twitter-social flex h-12 items-center justify-center rounded-md bg-twitter-transparent px-4 text-twitter hover:bg-twitter hover:text-white"
                  >
                    <UilTwitter />
                  </Link>
                </li>
                <li className="px-1.5 pb-2.5 pt-3">
                  <div
                    onClick={() => signIn("discord")}
                    className="github-social flex h-12 items-center justify-center rounded-md bg-github-transparent px-4 text-github hover:bg-github hover:text-white"
                  >
                    <UilGithub />
                  </div>
                </li>
              </ul>
            </Form>
          </div>
          <div className="rounded-b-md bg-gray-100 p-2 text-center dark:bg-white/10">
            <p className="mb-0 text-sm font-medium text-body dark:text-white/60">
              Bạn chưa có tài khoản?
              <Link
                href="/register"
                className="text-info hover:text-primary ltr:ml-1.5 rtl:mr-1.5"
              >
                Đăng ký
              </Link>
            </p>
          </div>
        </div>
      </Col>
    </Row>
  );
}

export default SignIn;
