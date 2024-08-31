'use client';
import { useState } from 'react';
import { Row, Col, Form, Input, Select } from 'antd';
import { Buttons } from '@/components/Buttons';
import Heading from '@/components/Heading';
import { Tags } from '@/components/Tags';

const { Option } = Select;

function Profile() {
  const [form] = Form.useForm();

  const [state, setState] = useState({
    tags: ['UI/UX', 'Branding', 'Product Design', 'Web Design'],
    values: null,
  });

  const handleSubmit = (values: any) => {
    setState({ ...state, values: { ...values, tags: state.tags } });
  };

  const handleCancel = (e: any) => {
    e.preventDefault();
    form.resetFields();
  };

  const checked = (checked: any) => {
    // setState({ tags: checked });
  };

  return (
    <>
      <div className="bg-white dark:bg-white/10 m-0 p-0 mb-[25px] rounded-10 relative">
        <div className="py-[18px] px-[25px] text-dark dark:text-white/[.87] font-medium text-[17px] border-regular dark:border-white/10 border-b">
          <Heading as="h4" className="mb-0 text-lg font-medium">
            Cập nhật thông tin
          </Heading>
          <span className="mb-0.5 text-light dark:text-white/60 text-13 font-normal">
            Thiết lập thông tin cá nhân của bạn
          </span>
        </div>
        <div className="p-[25px]">
          <Row justify="center">
            <Col xxl={12} lg={16} xs={24}>
              <Form className="pt-2.5 pb-[30px]" name="editProfile" onFinish={handleSubmit}>
                <Form.Item
                  name="name"
                  initialValue="Duran Clayton"
                  label="Tên"
                  className="mb-4 form-label-w-full form-label-text-start dark:text-white-60 [&>.ant-row]:flex-col [&>.ant-row>.ant-form-item-control]:flex-1"
                >
                  <Input className="px-5 py-3" />
                </Form.Item>
                <Form.Item
                  name="phone"
                  initialValue="0096644553"
                  label="Số điện thoại"
                  className="mb-4 form-label-w-full form-label-text-start [&>.ant-row]:flex-col [&>.ant-row>.ant-form-item-control]:flex-1"
                >
                  <Input className="px-5 py-3" />
                </Form.Item>
                <Form.Item
                  name="country"
                  initialValue=""
                  label="Quốc gia"
                  className="mb-4 form-label-w-full form-label-text-start [&>.ant-row]:flex-col [&>.ant-row>.ant-form-item-control]:flex-1"
                >
                  <Select className="[&>.ant-select-selector]:flex [&>.ant-select-selector]:items-center [&>.ant-select-selector]:w-full [&>.ant-select-selector]:h-10 [&>.ant-select-selector]:text-white/60 [&>.ant-select-selector]:px-5 h-[40px]">
                    <Option value="">Vui lòng chọn</Option>
                    <Option value="vietnamese">Việt nam</Option>
                    <Option value="india">India</Option>
                    <Option value="pakistan">Pakistan</Option>
                  </Select>
                </Form.Item>
                <Form.Item
                  name="website"
                  htmlFor="www.example.com"
                  label="Website"
                  className="mb-4 form-label-w-full form-label-text-start [&>.ant-row]:flex-col [&>.ant-row>.ant-form-item-control]:flex-1"
                >
                  <Input className="px-5 py-3" />
                </Form.Item>
                <Form.Item
                  name="userBio"
                  label="Bio"
                  className="mb-4 form-label-w-full form-label-text-start [&>.ant-row]:flex-col [&>.ant-row>.ant-form-item-control]:flex-1"
                >
                  <Input.TextArea rows={3} className="px-5 py-3" />
                </Form.Item>
                <div className="mt-11">
                  <Buttons
                    size="default"
                    htmlType="submit"
                    type="primary"
                    className="bg-primary hover:bg-primary-hbr text-white h-11 px-[20px] font-semibold"
                  >
                    Cập nhật hồ sơ
                  </Buttons>
                  &nbsp; &nbsp;
                  <Buttons
                    size="default"
                    onClick={handleCancel}
                    type="light"
                    className="h-11 px-5 bg-transparent hover:text-primary dark:text-white/[.87] border-[#d9d9d9] hover:border-primary dark:border-white/10 dark:hover:text-primary dark:hover:border-primary"
                  >
                    Hủy
                  </Buttons>
                </div>
              </Form>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}

export default Profile;
