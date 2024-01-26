import Modal from 'react-modal';

Modal.setAppElement('#root'); 

const CommentsModal = ({ isOpen, onRequestClose, children, height }: any) => {
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
          height: height || 'auto'
        },
        
      };
    
      return (
        <Modal isOpen={isOpen} onRequestClose={onRequestClose} style={customStyles}>
          {children}
        </Modal>
      );
};

export default CommentsModal;