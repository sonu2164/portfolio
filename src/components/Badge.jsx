// BadgeModal.js
import React from 'react';
import Modal from 'react-modal';

const BadgeModal = ({ isOpen, onClose, badgeSrc }) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            style={{
                overlay: {
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                },
                content: {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    top: '50%',
                    left: '50%',
                    right: 'auto',
                    bottom: 'auto',
                    marginRight: '-50%',
                    transform: 'translate(-50%, -50%)',
                    border: 'none',
                    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)',
                    background: 'none',
                },
            }}
        >
            <img src={badgeSrc} alt="Badge" style={{ maxWidth: '100%', maxHeight: '100%' }} />
        </Modal>
    );
};

export default BadgeModal;
