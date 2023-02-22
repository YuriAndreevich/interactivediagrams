import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

function MyModal(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <button onClick={onOpen}>{props.text}</button>

      <Modal isOpen={isOpen} onClose={onClose} size="full">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{props.text}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <iframe src={props.src} />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Закрыть
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default MyModal;
