import React from 'react';
import StyledUserProfile from "./UserProfile.styles";
import { Icon } from '../Kit';

const UserProfile = ({user, ...restProps}) => {
    const {first_name, last_name} = user.data;
    return (
        <StyledUserProfile {...restProps}>
            <img src="https://static.evand.net/assets/images/defaults/user-avatar.png" alt="" className='mx-1'/>
            <span className='mx-1'>{first_name + ' ' + last_name}</span>
            <Icon name='bell' size={15}/>
        </StyledUserProfile>
    );
};

export default UserProfile;