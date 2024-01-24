import Modal from 'react-modal';

Modal.setAppElement('#root'); 

const EditProfileModal = ({ isOpen, onRequestClose, children }: any) => {
    const customStyles = {
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.5)", 
        },
        content: {
          margin: "auto",
          width: "350px",
          border: "1px solid #ccc",
          background: "#fff",
          borderRadius: "4px",
          outline: "none",
          padding: "20px",
        },
        
      };
    
      return (
        <Modal isOpen={isOpen} onRequestClose={onRequestClose} style={customStyles}>
          {children}
        </Modal>
      );
};

export default EditProfileModal;