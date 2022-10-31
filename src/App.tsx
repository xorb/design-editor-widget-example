import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  useDisclosure,
  Box,
  Button,
  Portal,
} from "@chakra-ui/react";

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
      <Button onClick={onOpen}>Open editor</Button>
      {isOpen && <Editor isOpen={isOpen} onClose={onClose} />}
    </Box>
  );
}

const Editor = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  React.useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://xorb.github.io/design-editor-widget/index.widget.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Modal size={"full"} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <Portal>
        <ModalContent
          sx={{
            height: "100vh",
            width: "100vw",
            display: "flex",
          }}
        >
          <div
            style={{ height: "100%", width: "100%", display: "flex", flex: 1 }}
            id="design_editor_widget"
          ></div>
        </ModalContent>
      </Portal>
    </Modal>
  );
};
export default App;
