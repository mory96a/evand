import React, { useEffect, useState } from 'react';
import StyledModal, { StyledContent } from "./Modal.styles";
import { Button, Text } from "../index";

type Props = {};

const Modal = ({showModal, closeModal, children}: Props) => {

    const [show, setShow] = useState(showModal);

    if (show) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'visible';
    }

    useEffect(() => {
        setShow(showModal);
    }, [showModal]);

    const handleClose = () => {
        setShow(false);
        closeModal();
    };

    return (
        <StyledModal className='' isOpen={show}>
            <StyledContent>
                <Button id='close-button' className='border-0 bg-white p-0 m-0' onClick={handleClose}>
                    <Text color={'lightGray'}>x</Text>
                </Button>
                {children}
            </StyledContent>
        </StyledModal>
    );
};

export default Modal;