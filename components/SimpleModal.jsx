import React from 'react';
import  Modal from 'react-bootstrap/Modal';
import  Button from 'react-bootstrap/Button';

const SimpleModal = ({title, bodyTxt, showModal, handleCloseModal}) => {
    return (
        <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header>
        <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{bodyTxt}</Modal.Body>
        <Modal.Footer>
        <Button variant="success" onClick={handleCloseModal}>
            Sweet as
        </Button>
        </Modal.Footer>
    </Modal>
    )
}

export default SimpleModal;