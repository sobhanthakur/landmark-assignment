import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import ModelForm from "./ModelForm";

const EditModel = ({ model }) => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  return (
    <div>
      <Button color="link" size="sm" onClick={toggle}>
        Edit Model Info
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          <ModelForm model={model} />
        </ModalBody>
      </Modal>
    </div>
  );
};

export default EditModel;
