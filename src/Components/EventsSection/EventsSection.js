import React from 'react';
import StyledEventsSection from "./EventsSection.styles";
import { Text, Icon } from '../Kit';
import moment from "moment-jalaali";

type Props = {
    event: Object
};

const EventsSection = ({event}: Props) => {

    const {cover, name, organization, start_date} = event;
    const EventCover = !!cover ? {name: cover.name, src: cover.original} : {
        name: 'کاور',
        src: 'https://static.evand.net/assets/images/defaults/event-cover.jpg'
    };

    const organizationLogo = !!organization.logo ? organization.logo.original :
        'https://www.regionalsan.com/sites/main/files/imagecache/lightbox/main-images/vacant_placeholder_0.gif';

    // @todo change rtl

    let persianDate = moment(start_date, 'YYYY/MM/DD').day();

    return (
        <StyledEventsSection className='col-12 mx-auto col-sm-5 col-lg-4 col-xl-3 my-2'>

            <img src={EventCover.src} alt='cover' className='w-100 mb-2'/>

            <div className='d-flex flex-column w-100 px-3 mb-4'>
                <div className='d-flex justify-content-between w-100 align-items-center'>
                    <Text>date</Text>
                    <Icon name='bookmark'/>
                </div>
                <Text size={18} className='mt-2 mb-4 font-weight-bold'>{name}</Text>
                <div className='d-flex flex-column w-100'>
                    <Text className='my-1 align-self-start' size={12}>city</Text>
                    <Text className='my-1 align-self-start' size={12}>320000</Text>
                    <div className='w-100'>
                        <Text size={12}>{organization.name}</Text>
                        <img id='logo-image' src={organizationLogo} alt="avatar"/>
                    </div>
                </div>
            </div>
        </StyledEventsSection>
    );
};

export default EventsSection;