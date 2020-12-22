import React from 'react';
import { connect } from 'react-redux';
import { removeError } from '../../redux/modules/errors/errors';
import StyledErrors from "./Errors.styles";
import { Button } from '../';

type Props = {}

const Errors = ({errors, removeError}: Props) => {

    const hideAlert = () => {
        setTimeout(() => {
            removeError()
        }, 5000);
    }

    if (!!errors.length) {
        hideAlert();
    }
    const handleClick = () => {
        clearTimeout(hideAlert);
        removeError();
    };

    return (
        <StyledErrors className='bg-warning' show={!!errors.length}>
            {
                !!errors.length &&
                errors.map((error, index) => (
                    <p key={index}>{error.message}.</p>
                ))
            }
            <Button color={'white'} width={50} height={30} background={'darkBlue'} onClick={handleClick}>
                Hide
            </Button>
        </StyledErrors>
    );
};

const mapStateToProps = (state) => ({
    errors: state.errors.errors
});

export default connect(mapStateToProps, {removeError})(Errors);
