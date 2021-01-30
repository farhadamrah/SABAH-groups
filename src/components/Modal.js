import React from 'react';

import { Modal, Button, Input, Form } from 'antd';

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 14 },
};
const tailLayout = {
  wrapperCol: { offset: 16 },
};

const ModalApp = ({ visible, setVisible, onFinish }) => {
  const initialValues = {
    name: '',
    age: '',
    address: '',
    status: '',
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <>
      <Modal
        visible={visible}
        title="Yeni Tələbə"
        onCancel={handleCancel}
        footer={[
          <Button style={{ display: 'none' }} />,
          <Button style={{ display: 'none' }} />,
        ]}
      >
        <Form {...layout} onFinish={onFinish} initialValues={initialValues}>
          <Form.Item label="Ad, soyad" name="name">
            <Input />
          </Form.Item>
          <Form.Item label="Ünvan" name="address">
            <Input />
          </Form.Item>
          <Form.Item label="Yaş" name="age">
            <Input />
          </Form.Item>
          <Form.Item label="Universitet" name="university">
            <Input />
          </Form.Item>
          <Form.Item label="Təhsil növü" name="eduType">
            <Input />
          </Form.Item>
          <Form.Item label="Status" name="status">
            <Input />
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Əlavə et
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default ModalApp;
