import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Form, Input, Button, Row, Col } from 'antd'
import { useDispatch } from 'react-redux'
import { ReactSVG } from 'react-svg'
import { UilFacebook, UilTwitter, UilGithub } from '@iconscout/react-unicons'
import { CheckBox } from '@/components/Checkbox'
import type { AppDispatch } from '@/redux/store'
import { LoginAction, LoginState, useAppDispatch } from '@/redux'

function SignIn() {
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const router = useRouter()
  const dispatch = useAppDispatch()

  const [data, setData] = useState<LoginState>({
    username: 'admin',
    password: '123',
  })

  const handleLogin = async (req: LoginState) => {
    try {
      setError('')
      setLoading(true)
      dispatch(LoginAction(req)).then(() => {
        router.push('/')
      })
    } catch (err) {
      console.log(err)
      setLoading(false)
      setError('Failed to Login!')
    }
  }

  const [form] = Form.useForm()
  const [state, setState] = useState({
    checked: false,
  })

  const checkboxChange = (checked: any) => {
    setState({ ...state, checked })
  }

  useEffect(() => {
    const email = document.querySelector('input[type="text"]')
    const emailValue = (email as HTMLInputElement).value
    const password = document.querySelector('input[type="password"]')
    const passwordValue = (password as HTMLInputElement).value

    setData({
      username: emailValue,
      password: passwordValue,
    })
  }, [])

  return (
    <Row justify="center">
      <Col xxl={6} xl={8} md={12} sm={18} xs={24}>
        <div className=" bg-white rounded-md dark:bg-white/10 shadow-regular dark:shadow-none">
          <div className="px-5 py-4 text-center border-b border-gray-200 dark:border-white/10">
            <h2 className="mb-0 text-xl font-semibold text-dark dark:text-white/[.87]">Đăng nhập CB Ventures</h2>
          </div>
          <div className="px-8 pt-6 pb-4">
            <Form name="login" form={form} onFinish={handleLogin} layout="vertical">
              <Form.Item
                name="username"
                rules={[{ message: 'Tên đăng nhập không được để trống', required: true }]}
                initialValue={data.username}
                label="Tên đăng nhập"
                className="[&>div>div>label]:text-sm [&>div>div>label]:text-dark dark:[&>div>div>label]:text-white/60 [&>div>div>label]:font-medium"
              >
                <Input
                  type="text"
                  value={data.username}
                  placeholder="name@example.com"
                  className="h-12 p-3 hover:border-primary focus:border-primary rounded-4"
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
                className="[&>div>div>label]:text-sm [&>div>div>label]:text-dark dark:[&>div>div>label]:text-white/60 [&>div>div>label]:font-medium"
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
                  className="h-12 p-3 hover:border-primary focus:border-primary rounded-4"
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
                <Link className=" text-primary text-13" href="/forgotPassword">
                  Quên mật khẩu?
                </Link>
              </div>
              <Form.Item>
                <Button
                  className="w-full bg-primary h-12 p-0 my-6 text-sm font-medium"
                  htmlType="submit"
                  type="primary"
                  size="large"
                >
                  {loading ? 'Đang tải...' : 'Đăng nhập'}
                </Button>
              </Form.Item>
              {error && <p className="text-danger mb-10 text-center text-base">{error}</p>}
              <p className="relative text-body dark:text-white/60 -mt-2.5 mb-6 text-center text-13 font-medium before:absolute before:w-full before:h-px ltr:before:left-0 rtl:before:right-0 before:top-1/2 before:-translate-y-1/2 before:z-10 before:bg-gray-200 dark:before:bg-white/10">
                <span className="relative z-20 px-4 bg-white dark:bg-[#1b1d2a]">Or</span>
              </p>
              <ul className="flex items-center justify-center mb-0">
                <li className="px-1.5 pt-3 pb-2.5">
                  <Link
                    href="#"
                    className="flex items-center justify-center h-12 px-4 rounded-md google-social group bg-google-plus-transparent hover:bg-google-plus text-google-plus hover:text-white"
                  >
                    <ReactSVG
                      className="[&>div>svg>path]:fill-google-plus group-hover:[&>div>svg>path]:fill-white"
                      src="/img/icon/google-plus.svg"
                    />
                  </Link>
                </li>
                <li className="px-1.5 pt-3 pb-2.5">
                  <Link
                    href="#"
                    className="flex items-center justify-center h-12 px-4 rounded-md facebook-social bg-facebook-transparent hover:bg-facebook text-facebook hover:text-white"
                  >
                    <UilFacebook />
                  </Link>
                </li>
                <li className="px-1.5 pt-3 pb-2.5">
                  <Link
                    href="#"
                    className="flex items-center justify-center h-12 px-4 rounded-md twitter-social bg-twitter-transparent hover:bg-twitter text-twitter hover:text-white"
                  >
                    <UilTwitter />
                  </Link>
                </li>
                <li className="px-1.5 pt-3 pb-2.5">
                  <Link
                    href="#"
                    className="flex items-center justify-center h-12 px-4 rounded-md github-social bg-github-transparent hover:bg-github text-github hover:text-white"
                  >
                    <UilGithub />
                  </Link>
                </li>
              </ul>
            </Form>
          </div>
          <div className="p-2 text-center bg-gray-100 dark:bg-white/10 rounded-b-md">
            <p className="mb-0 text-sm font-medium text-body dark:text-white/60">
              Bạn chưa có tài khoản?
              <Link href="/register" className="ltr:ml-1.5 rtl:mr-1.5 text-info hover:text-primary">
                Đăng ký
              </Link>
            </p>
          </div>
        </div>
      </Col>
    </Row>
  )
}

export default SignIn
