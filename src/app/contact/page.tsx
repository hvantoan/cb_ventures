"use client";
import { useAppSelector } from "@/redux";
import { Button, Col, Form, Input, Row, Typography } from "antd";
import { useEffect, useState } from "react";

const { Title } = Typography;

interface ContactForm {
  name?: string;
  email?: string;
  description?: string;
}

const ContactPage = () => {
  const { user } = useAppSelector((state) => state.auth);
  const [form] = Form.useForm();

  const [contact, setContact] = useState<ContactForm>({
    name: "",
    email: "",
    description: "",
  });

  useEffect(() => {
    if (user) {
      form.setFieldsValue({
        name: user.name,
        email: user.email,
      });
    }
  }, [user, form]);

  return (
    <Row className="container mx-auto my-20">
      <Col span={10}>
        <Title level={3} className="text-32 capitalize">
          Hãy <span className="text-primary">liên hệ</span> với chúng tôi
        </Title>
      </Col>
      <Col span={14}>
        <Form layout="vertical" form={form}>
          <Form.Item
            label="Tên liên hệ"
            name="name"
            className="[&>div>div>label]:text-sm [&>div>div>label]:font-medium [&>div>div>label]:text-dark dark:[&>div>div>label]:text-white/60"
            rules={[{ required: true, message: "Vui lòng nhập Tên liên hệ!" }]}
          >
            <Input
              placeholder="Nhập Tên liên hệ"
              value={contact?.name}
              onChange={(e) => {
                setContact({ ...contact, name: e.target.value });
              }}
              className="h-12 rounded-4 p-3 hover:border-primary focus:border-primary"
            />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            className="[&>div>div>label]:text-sm [&>div>div>label]:font-medium [&>div>div>label]:text-dark dark:[&>div>div>label]:text-white/60"
            rules={[{ required: true, message: "Vui lòng nhập email!" }]}
          >
            <Input
              placeholder="Nhập Email"
              value={contact?.email}
              onChange={(e) => {
                setContact({ ...contact, email: e.target.value });
              }}
              className="h-12 rounded-4 p-3 hover:border-primary focus:border-primary"
            />
          </Form.Item>

          <Form.Item
            label="Nội dung"
            name="description"
            className="[&>div>div>label]:text-sm [&>div>div>label]:font-medium [&>div>div>label]:text-dark dark:[&>div>div>label]:text-white/60"
            rules={[{ required: true, message: "Vui lòng nhập Nội dung!" }]}
          >
            <Input.TextArea
              placeholder="Nội dung liên hệ"
              maxLength={100}
              value={contact?.description}
              onChange={(e) => {
                setContact({ ...contact, description: e.target.value });
              }}
              className="h-[200px] rounded-4 p-3 hover:border-primary focus:border-primary"
            />
          </Form.Item>

          <Form.Item>
            <Button type="primary">Liên hệ</Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default ContactPage;
