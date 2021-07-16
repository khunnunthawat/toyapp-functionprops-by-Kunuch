import { useState } from 'react';
import { Title } from '../components/Heading';
import Modal from '../components/Modal';
import Button from '../components/Button';

export default function ModalTest() {
  const [modalActive, setModalActive] = useState(false);
  const handleClick = function () {
    setModalActive(true);
  };
  const handleCancel = function () {
    setModalActive(false);
  };

  return (
    <div>
      <Title>Modal Test</Title>

      <Button color='primary' onClick={handleClick}>
        Show modal
      </Button>

      {modalActive && (
        <Modal onCancel={handleCancel}>
          <Title>This is a modal</Title>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
            quisquam dolorum enim eligendi quasi obcaecati fuga, quia totam
            inventore doloribus!
          </p>
        </Modal>
      )}
    </div>
  );
}
