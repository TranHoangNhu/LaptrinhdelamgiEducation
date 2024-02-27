import React, { useEffect, useState } from "react";
import { Modal } from "antd";
const ModalSuccess = (prop) => {
  let status = prop.status || false;
  const [isModalOpen, setIsModalOpen] = useState(status);
  console.log(isModalOpen);

  useEffect(() => {
    setIsModalOpen(status);
  }, [status]);

  return (
    <>
      <Modal title="Notification!" open={isModalOpen} footer={null}>
        Đang chuyển hướng sang trang chủ...
      </Modal>
    </>
  );
};
export default ModalSuccess;
