import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button
} from "@chakra-ui/react";
import '../dropdown/dropdown.scss'

function MyModal(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <div  className={props.classname} onClick={onOpen}>{props.children}</div>

      <Modal isOpen={isOpen} onClose={onClose} size="full">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{props.text}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <iframe src={props.src} style={{ width: "100%", height: "84vh" }} />
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
