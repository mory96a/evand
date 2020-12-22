import React from 'react';
import { connect } from 'react-redux';
import { removeAuthModal } from "../../redux/modules/authModal/modal";
import { loginUser } from "../../redux/modules/users/users";
import StyledSignInSignUpModal from "./SignInSignUp.styles";
import { Text, Button, Link, Modal } from '../Kit';
import { SignIn } from '../';

const SignInSignUpModal = ({showModal, user, loginUser, removeAuthModal}) => {

    const closeModal = () => {
        removeAuthModal();
    };

    if (!!user.data) {
        removeAuthModal();
    }

    return (
        <Modal showModal={showModal} closeModal={closeModal}>
            <StyledSignInSignUpModal>
                <div className='d-flex justify-content-center w-100 mt-2 mb-2'>
                    <Text size={13} className='px-3'>ورود</Text>
                    <Text size={13} className='px-3'>عضویت</Text>
                </div>
                <SignIn loginUser={loginUser}/>
            </StyledSignInSignUpModal>
        </Modal>
    );
};

const mapStateToProps = (state) => ({
    showModal: state.authModal.showModal,
    user: state.user.user
});

export default connect(mapStateToProps, {removeAuthModal: removeAuthModal, loginUser: loginUser})(SignInSignUpModal);