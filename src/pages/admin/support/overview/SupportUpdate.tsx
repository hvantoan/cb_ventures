import React, { useEffect } from 'react'
import { Form, Input, Select } from 'antd'
import { Buttons } from '@/components/Buttons'
import { Modals } from '@/components/Modals/antd-modals'

const { Option } = Select

function SupportCreate({ visible, onCancel, handleSubmit, editableData }: any) {
  const handleOk = (value: any) => {
    handleSubmit({ ...value, id: editableData.id })
  }

  const handleCancel = () => {
    onCancel()
  }

  return (
    <Modals
      getContainer={false}
      type="primary"
      title="Create Support"
      visible={visible}
      footer={null}
      onCancel={handleCancel}
    >
      <div className="project-modal">
        <>
          <Form name="supportCreate" onFinish={handleOk}>
            <Form.Item
              className="[&>.ant-form-item-row>div]:flex-auto [&>.ant-form-item-row>div>div>div>input]:border-normal dark:[&>.ant-form-item-row>div>div>div>input]:text-white/60 dark:[&>.ant-form-item-row>div>div>div>input]:border-white/10 [&>.ant-form-item-row>div>div>div>input]:rounded-md [&>.ant-form-item-row>div>div>div>input]:p-3 [&>div]:flex-col [&>div>div>label]:font-medium dark:[&>div>div>label]:text-white/[.87]"
              name="email"
              label="Email"
              rules={[
                {
                  required: true,
                  type: 'email',
                },
              ]}
            >
              <Input className="h-12 p-3" />
            </Form.Item>
            <Form.Item
              className="[&>.ant-form-item-row>div]:flex-auto [&>.ant-form-item-row>div>div>div>input]:border-normal dark:[&>.ant-form-item-row>div>div>div>input]:text-white/60 dark:[&>.ant-form-item-row>div>div>div>input]:border-white/10 [&>.ant-form-item-row>div>div>div>input]:p-3 [&>.ant-form-item-row>div>div>div>input]:rounded-md [&>div]:flex-col [&>div>div>label]:font-medium dark:[&>div>div>label]:text-white/[.87]"
              name="subject"
              label="Subject"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input className="h-12 p-3" />
            </Form.Item>
            <Form.Item
              className="[&>.ant-form-item-row>div]:flex-auto [&>.ant-form-item-row>div>div>div>input]:border-normal dark:[&>.ant-form-item-row>div>div>div>input]:text-white/60 dark:[&>.ant-form-item-row>div>div>div>input]:border-white/10 [&>.ant-form-item-row>div>div>div>input]:rounded-md [&>div]:flex-col [&>div>div>label]:font-medium dark:[&>div>div>label]:text-white/[.87]"
              name="priority"
              initialValue="high"
              label="Priority"
            >
              <Select className="[&>div]:border-normal dark:[&>div]:border-white/10 [&>div]:h-[50px] [&>div]:rounded-4 [&>.ant-select-arrow]:text-theme-gray w-full [&>div>.ant-select-selection-item]:flex [&>div>.ant-select-selection-item]:items-center dark:[&>div>.ant-select-selection-item]:text-white/60 h-[48px]">
                <Option value="high">High</Option>
                <Option value="medium">Medium</Option>
                <Option value="low">Low</Option>
              </Select>
            </Form.Item>
            <Form.Item
              className="[&>.ant-form-item-row>div]:flex-auto [&>.ant-form-item-row>div>div>div>input]:border-normal dark:[&>.ant-form-item-row>div>div>div>input]:text-white/60 dark:[&>.ant-form-item-row>div>div>div>input]:border-white/10 [&>.ant-form-item-row>div>div>div>input]:rounded-md [&>div]:flex-col [&>div>div>label]:font-medium dark:[&>div>div>label]:text-white/[.87]"
              name="status"
              initialValue="open"
              label="Status"
            >
              <Select className="[&>div]:border-normal dark:[&>div]:border-white/10 [&>div]:h-[50px] [&>div]:rounded-4 [&>.ant-select-arrow]:text-theme-gray w-full [&>div>.ant-select-selection-item]:flex [&>div>.ant-select-selection-item]:items-center dark:[&>div>.ant-select-selection-item]:text-white/60 h-[48px]">
                <Option value="open">Open</Option>
                <Option value="close">Close</Option>
                <Option value="pending">Pending</Option>
              </Select>
            </Form.Item>
            <Form.Item
              className="[&>.ant-form-item-row>div]:flex-auto [&>.ant-form-item-row]:flex-col [&>.ant-form-item-row>div]:text-start [&>.ant-form-item-row>div>label]:text-dark dark:[&>.ant-form-item-row>div>label]:text-white/[.87] [&>.ant-form-item-row>div>label]:font-semibold [&>.ant-form-item-row>div>div>div>input]:border-normal dark:[&>.ant-form-item-row>div>div>div>input]:border-white/10 dark:[&>.ant-form-item-row>div>div>div>input]:text-white/[.87] [&>.ant-form-item-row>div>div>div>input]:p-3 [&>.ant-form-item-row>div>div>div>input]:rounded-md dark:[&>.ant-form-item-row>div>div>div>textarea]:border-white/10"
              name="description"
              label="Description"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input.TextArea rows={4} />
            </Form.Item>
            <Form.Item>
              <Buttons
                className="bg-primary hover:bg-primary-hbr border-solid border-1 border-primary text-white dark:text-white/[.87] text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[4px] px-[20px] h-[44px]"
                type="primary"
                key="submit"
                onClick={() => handleOk}
              >
                Submit Ticket
              </Buttons>
            </Form.Item>
          </Form>
        </>
      </div>
    </Modals>
  )
}

export default SupportCreate
