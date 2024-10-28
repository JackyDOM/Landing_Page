import { 
  Modal, 
  ModalBody, 
  ModalCloseButton, 
  ModalContent, 
  ModalOverlay, 
} from "@chakra-ui/react";
import { MdClose } from "react-icons/md";

const MyModal = ({
  isOpen, 
  onClose, 
  children
}: {
  isOpen: boolean; 
  onClose: () => void;
  children: any;
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered size={"full"}>
      <ModalOverlay zIndex={90} bgColor={'rgba(0, 0, 0, 0.90)'} />
      <ModalContent 
        bg="transparent" 
        boxShadow="none" 
        w={'100%'}
        h={"100%"}
        className="!flex-row justify-around p-5" 
        zIndex={100}
        
      >
      <ModalCloseButton 
        zIndex={110} 
        onClick={onClose} 
        cursor="pointer"
        color="gray.800"
        className="!bg-white !bg-opacity-80"
        //@ts-ignore
        icon={<MdClose />}
      />
        <ModalBody 
          p={0} 
          display="flex" 
          justifyContent="center" 
          alignItems="center"  
          maxW="1536px" 
          h="auto"
        >
          {children}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default MyModal;
